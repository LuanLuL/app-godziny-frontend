import React, { ChangeEvent } from "react";
import { SwitchProps, Typography } from "@mui/material";
import Styles from "./SysToggleFieldStyles";
import { SysSimpleLabel } from "../sysSimpleLabel/SysSimpleLabel";

interface ISysToggleField extends SwitchProps {
  label: string;
  value: boolean;
  maxWidth?: string;
  msgchecked?: string;
  msgunchecked?: string;
  changeValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SysToggleField: React.FC<ISysToggleField> = ({
  label,
  value,
  maxWidth = "1000px",
  msgchecked = "Ativo",
  msgunchecked = "Inativo",
  changeValue,
  ...props
}) => {
  function onChange(event: ChangeEvent<HTMLInputElement>, checked: boolean) {
    changeValue(event);
  }

  return (
    <Styles.Container>
      <Styles.BoxLabel>
        <SysSimpleLabel
          label={label ?? "Escolha um valor"}
          disabled={props.disabled ?? false}
        />
      </Styles.BoxLabel>
      <Styles.Body>
        <Styles.MySwitch onChange={onChange} checked={value} {...props} />
        <Typography
          variant="body1"
          sx={{
            color: (theme) =>
              props.disabled ? theme.palette.info.light : "rgba(0,0,0, 0.87)",
          }}
        >
          {value ? msgchecked : msgunchecked}
        </Typography>
      </Styles.Body>
    </Styles.Container>
  );
};
