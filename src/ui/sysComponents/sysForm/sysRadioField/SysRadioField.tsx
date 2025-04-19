import React, { ChangeEvent } from "react";
import { FormControl, FormLabel, RadioProps } from "@mui/material";
import Styles from "./SysRadioFieldStyles";
import { SysSimpleLabel } from "../sysSimpleLabel/SysSimpleLabel";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

export type IOptionToSysRadioField = {
  value: string;
  label: string;
};

interface ISysRadioField extends RadioProps {
  label: string;
  value: string;
  options: IOptionToSysRadioField[];
  maxWidth?: string;
  useCheckedIcon?: boolean;
  changeValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SysRadioField: React.FC<ISysRadioField> = ({
  label,
  value,
  options,
  maxWidth = "1000px",
  useCheckedIcon = false,
  changeValue,
  ...props
}) => {
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    changeValue(event);
  }

  return (
    <FormControl
      sx={{
        width: "100%",
        maxWidth: maxWidth,
        padding: sysSizing.base.baseFixed075,
      }}
    >
      <FormLabel id={`radio-buttons-group-${props.name}`}>
        <SysSimpleLabel
          label={label ?? "Escolha uma das opções"}
          disabled={props.disabled ?? false}
        />
      </FormLabel>
      <Styles.Container
        aria-labelledby={`radio-buttons-group-${props.name}`}
        name={`controlled-radio-buttons-group-${props.name}`}
        value={value}
        onChange={onChange}
      >
        {options.map((item, index) => (
          <Styles.MyFormControlLabel
            key={`keyRadioInput${index}`}
            disabled={props.disabled ?? false}
            value={item.value}
            control={
              <Styles.MyRadio
                {...props}
                checkedIcon={
                  useCheckedIcon ? (
                    <CheckBoxOutlinedIcon />
                  ) : (
                    <RadioButtonCheckedIcon />
                  )
                }
                icon={
                  useCheckedIcon ? (
                    <CheckBoxOutlineBlankOutlinedIcon />
                  ) : (
                    <RadioButtonUncheckedIcon />
                  )
                }
              />
            }
            label={item.label}
          />
        ))}
      </Styles.Container>
    </FormControl>
  );
};
