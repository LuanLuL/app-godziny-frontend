import React, { useMemo } from "react";
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
import Styles, { MenuBoxPopperSx } from "./SysSelectFieldStyles";
import { SysSimpleLabel } from "../sysSimpleLabel/SysSimpleLabel";
import { ParcedJson } from "../../../../shared/typings/DefaultTypings";
import SysIcon, { ISysIconProps } from "../../sysIcon/SysIcons";
import { hasValue } from "../../../../shared/libs/hasValue";
import { MyTooltip } from "../../myTooltip/MyTooltip";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";

export type IOptionToSysSelectField = {
  value: ParcedJson;
  label: string;
  description?: string;
};

type ISysSelectField = {
  label: string;
  value: string;
  changeValue: (event: SelectChangeEvent<string>) => void;
  options?: IOptionToSysSelectField[];
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

const SelectIcon: React.FC<ISysIconProps> = (props) => (
  <SysIcon {...props} name="muiArrowDropDown" />
);

export const SysSelectField: React.FC<ISysSelectField> = ({
  label,
  value,
  changeValue,
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
  const onChange = (event: SelectChangeEvent<unknown>) => {
    changeValue(event as SelectChangeEvent<string>);
  };

  const hasValueState = useMemo(() => {
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return hasValue(value);
  }, [value]);

  const renderValue = (selected: unknown) => {
    const selectedValue = selected as string;

    if (!hasValue(value)) {
      return (
        <Styles.RenderValue>
          <Typography variant="body2" overflow="hidden" textOverflow="ellipsis">
            {placeholder}
          </Typography>
        </Styles.RenderValue>
      );
    }

    const displayValue =
      options.find((opt) => opt.value === selectedValue)?.label ??
      (selectedValue as string);

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
          title={displayValue || ""}
          customWidth={maxWidth}
        >
          <Styles.TextInputSelectedOption variant="body2">
            {displayValue}
          </Styles.TextInputSelectedOption>
        </MyTooltip>
      </Styles.InputSelectedOption>
    );
  };

  return (
    <Styles.Container sx={sxMap?.container}>
      <SysSimpleLabel
        label={label ?? "Digite um texto"}
        disabled={props.disabled ?? false}
      />
      <Styles.MySelectField
        labelId={`MySelectFieldLabelIdOf${label}`}
        id={`MySelectFieldIdOf${label}`}
        value={value}
        onChange={onChange}
        displayEmpty
        disabled={props.disabled ?? false}
        renderValue={renderValue}
        IconComponent={SelectIcon}
        sx={{
          maxWidth: maxWidth,
          "& .MuiSelect-select": {
            paddingLeft: iconStart ? "32px !important" : undefined,
          },
        }}
        MenuProps={{
          PaperProps: {
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
                    target: { value: "", name: props.name },
                  } as SelectChangeEvent<string>);
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
          options.map((option) => (
            <MenuItem key={`menu-item-${option.value}`} value={option.value}>
              <Typography variant="body2" sx={{ letterSpacing: "2.5%" }}>
                {option.label}
              </Typography>
            </MenuItem>
          ))
        )}
      </Styles.MySelectField>
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
