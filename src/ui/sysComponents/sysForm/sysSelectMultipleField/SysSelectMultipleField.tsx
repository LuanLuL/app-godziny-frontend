import React, { useMemo, useRef, useState, useEffect } from "react";
import {
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  SelectChangeEvent,
  SelectProps,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import Styles, { MenuBoxPopperSx } from "./SysSelectMultipleFieldStyles";
import { SysSimpleLabel } from "../sysSimpleLabel/SysSimpleLabel";
import { ParcedJson } from "../../../../shared/typings/DefaultTypings";
import SysIcon, { ISysIconProps } from "../../sysIcon/SysIcons";
import { hasValue } from "../../../../shared/libs/hasValue";
import { MyTooltip } from "../../myTooltip/MyTooltip";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";

export type IOptionToSysSelectMultipleField = {
  value: ParcedJson;
  label: string;
  description?: string;
};

type ISysSelectMultipleField = {
  label: string;
  value: ParcedJson[];
  changeValue: (event: SelectChangeEvent<ParcedJson[]>) => void;
  labelAll?: string;
  options?: IOptionToSysSelectMultipleField[];
  placeholder?: string;
  maxWidth?: string;
  error?: boolean;
  msgError?: string;
  clearable?: boolean;
  renderChipsInside?: boolean;
  iconStart?: React.ReactNode;
  sxMap?: {
    container?: SxProps<Theme>;
    menuProps?: SxProps<Theme>;
  };
} & SelectProps;

const SELECT_ALL_VALUE = "__all__";

const isSameValue = (
  a: IOptionToSysSelectMultipleField | string,
  b: IOptionToSysSelectMultipleField | string,
) => String(a) === String(b);

const SelectIcon: React.FC<ISysIconProps> = (props) => (
  <SysIcon {...props} name="muiArrowDropDown" />
);

export const SysSelectMultipleField: React.FC<ISysSelectMultipleField> = ({
  label,
  value,
  changeValue,
  labelAll = "Todos",
  options = [],
  placeholder = `Selecione...`,
  maxWidth = "1000px",
  error = false,
  msgError = "Algo deu errado, por favor, tente novamente.",
  clearable = true,
  iconStart,
  sxMap,
  ...props
}) => {
  const [selectedHistory, setSelectedHistory] = useState<
    IOptionToSysSelectMultipleField[]
  >([]);

  useEffect(() => {
    setSelectedHistory((prev) => {
      const newOnes = value.filter(
        (v) => !prev.some((item) => isSameValue(item, v)),
      );
      let next = [...prev, ...newOnes];
      next = next.filter((v) => value.some((item) => isSameValue(item, v)));
      return next;
    });
  }, [value]);

  const selectedLabels = selectedHistory
    .map((val) => options.find((t) => isSameValue(t.value, val))?.label)
    .filter((label): label is string => !!label);

  const displayRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const menuPaperRef = useRef<HTMLDivElement | null>(null);
  const [maxLabelsToShow, setMaxLabelsToShow] = useState<number>(value.length);

  const allSelected = options.length > 0 && value.length === options.length;

  const keepMenuScrollAtTop = () => {
    if (!menuPaperRef.current) return;
    menuPaperRef.current.scrollTop = 0;
    requestAnimationFrame(() => {
      if (menuPaperRef.current) menuPaperRef.current.scrollTop = 0;
    });
  };

  const onChange = (event: SelectChangeEvent<unknown>) => {
    const selected = event.target.value as ParcedJson[];

    if (selected.includes(SELECT_ALL_VALUE)) {
      const newValue = allSelected ? [] : options.map((o) => o.value);

      changeValue({
        ...event,
        target: {
          ...event.target,
          value: newValue,
        },
      } as SelectChangeEvent<ParcedJson[]>);

      keepMenuScrollAtTop();
      return;
    }

    changeValue(event as SelectChangeEvent<ParcedJson[]>);
  };

  const hasValueState = useMemo(() => {
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return hasValue(value);
  }, [value]);

  useEffect(() => {
    if (displayRef.current && measureRef.current) {
      const displayWidth = displayRef.current.offsetWidth;
      const labelsToTest: string[] = [];
      let i = 0;
      for (; i < selectedLabels.length; i++) {
        measureRef.current.innerText =
          [...labelsToTest, selectedLabels[i]].join(", ") +
          (i < selectedLabels.length - 1
            ? ` +${selectedLabels.length - (i + 1)}`
            : "");
        if (measureRef.current.offsetWidth > displayWidth) break;
        labelsToTest.push(selectedLabels[i]);
      }
      setMaxLabelsToShow(labelsToTest.length);
    }
  }, [value, selectedLabels]);

  const renderValue = () => {
    if (!hasValue(value)) {
      return (
        <Styles.RenderValue>
          <Typography variant="body2" overflow="hidden" textOverflow="ellipsis">
            {placeholder}
          </Typography>
        </Styles.RenderValue>
      );
    }

    const showCounter =
      selectedLabels.length > maxLabelsToShow && maxLabelsToShow > 0;

    const displayValue = showCounter
      ? `${selectedLabels.slice(0, maxLabelsToShow).join(", ")}`
      : selectedLabels.join(", ");

    return (
      <Styles.InputSelectedOption
        sx={{
          marginRight:
            clearable && hasValueState ? 6 : sysSizing.spacingFixedMd,
        }}
      >
        <MyTooltip
          enterDelay={500}
          enterNextDelay={500}
          title={selectedLabels.join(", ") || ""}
          customWidth={maxWidth}
        >
          <Styles.TextInputSelectedOption variant="body2">
            {displayValue}
          </Styles.TextInputSelectedOption>
        </MyTooltip>
        {showCounter && (
          <Styles.CounterText variant="body2">
            {`+(${selectedLabels.length - maxLabelsToShow})`}
          </Styles.CounterText>
        )}
      </Styles.InputSelectedOption>
    );
  };

  return (
    <Styles.Container sx={sxMap?.container}>
      <SysSimpleLabel
        label={label ?? "Digite um texto"}
        disabled={props.disabled ?? false}
      />
      <Styles.MySelectMultipleField
        labelId={`MySelectMultipleFieldLabelIdOf${label}`}
        id={`MySelectMultipleFieldIdOf${label}`}
        value={value}
        onChange={onChange}
        displayEmpty
        disabled={props.disabled ?? false}
        renderValue={() => (
          <Styles.DisplayBox ref={displayRef}>
            {renderValue()}
            <Styles.GhostMeasureBox ref={measureRef} />
          </Styles.DisplayBox>
        )}
        multiple
        IconComponent={SelectIcon}
        sx={{
          maxWidth: maxWidth,
          "& .MuiSelect-select": {
            paddingLeft: iconStart ? "32px !important" : undefined,
          },
        }}
        MenuProps={{
          PaperProps: {
            ref: menuPaperRef,
            sx: MenuBoxPopperSx,
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
        }}
        startAdornment={
          iconStart && (
            <InputAdornment position="start" sx={Styles.startAdornment}>
              {iconStart}
            </InputAdornment>
          )
        }
        endAdornment={
          clearable && hasValueState && !props.disabled ? (
            <InputAdornment position="end" sx={Styles.endAdornment}>
              <IconButton
                sx={{ p: 0 }}
                aria-label="limpar seleção"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange({
                    target: { value: [], name: props.name },
                  } as unknown as SelectChangeEvent<ParcedJson[]>);
                }}
                edge="end"
                size="small"
              >
                <SysIcon name="close" />
              </IconButton>
            </InputAdornment>
          ) : null
        }
        error={error}
        {...props}
      >
        {options.length === 0 ? (
          <MenuItem disabled value="">
            <ListItemText primary="Nenhuma opção disponível" />
          </MenuItem>
        ) : (
          [
            <MenuItem key={`menu-item-${labelAll}`} value={SELECT_ALL_VALUE}>
              <Styles.MyCheckBox
                checkedIcon={<SysIcon name="checkBox" />}
                icon={<SysIcon name="checkBoxOutilineBlank" />}
                checked={allSelected}
              />
              <Typography variant="body2" sx={{ letterSpacing: "2.5%" }}>
                {labelAll}
              </Typography>
            </MenuItem>,
            ...options.map((option) => (
              <MenuItem key={`menu-item-${option.value}`} value={option.value}>
                <Styles.MyCheckBox
                  checkedIcon={<SysIcon name="checkBox" />}
                  icon={<SysIcon name="checkBoxOutilineBlank" />}
                  checked={value.includes(option.value)}
                />
                <Typography variant="body2" sx={{ letterSpacing: "2.5%" }}>
                  {option.label}
                </Typography>
              </MenuItem>
            )),
          ]
        )}
      </Styles.MySelectMultipleField>
      <Styles.ErrorMessageBody sx={{ maxWidth: maxWidth }}>
        {error && (
          <Styles.ErrorMessageText variant="caption" color="error">
            {msgError}
          </Styles.ErrorMessageText>
        )}
      </Styles.ErrorMessageBody>
    </Styles.Container>
  );
};
