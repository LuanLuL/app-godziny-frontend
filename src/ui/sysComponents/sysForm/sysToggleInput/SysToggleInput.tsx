import React, { ChangeEvent } from "react";
import { Box, SwitchProps, Typography, useTheme } from "@mui/material";
import { MySwitch, SysToggleInputStyles } from "./SysToggleInputStyles";

interface ISysToggleInput extends SwitchProps {
  label: string;
  value: boolean;
  maxWidth?: string;
  msgchecked?: string;
  msgunchecked?: string;
  changeValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SysToggleInput: React.FC<ISysToggleInput> = ({
  label,
  value,
  maxWidth = "1000px",
  msgchecked = "Ativo",
  msgunchecked = "Inativo",
  changeValue,
  ...props
}) => {
  const theme = useTheme();

  function onChange(event: ChangeEvent<HTMLInputElement>, checked: boolean) {
    changeValue(event);
  }

  return (
    <Box sx={SysToggleInputStyles.container}>
      <Box sx={SysToggleInputStyles.boxLabel}>
        <Typography
          sx={{
            maxWidth: maxWidth,
            color: props.disabled
              ? theme.palette.info.light
              : "rgba(0,0,0, 0.72)",
            ...SysToggleInputStyles.label,
          }}
          variant="body2"
        >
          {label ?? "Escolha um valor"}
        </Typography>
      </Box>
      <Box sx={SysToggleInputStyles.body}>
        <MySwitch onChange={onChange} checked={value} {...props} />
        <Typography
          variant="body1"
          sx={{
            color: props.disabled
              ? theme.palette.info.light
              : "rgba(0,0,0, 0.87)",
          }}
        >
          {value ? msgchecked : msgunchecked}
        </Typography>
      </Box>
    </Box>
  );
};
