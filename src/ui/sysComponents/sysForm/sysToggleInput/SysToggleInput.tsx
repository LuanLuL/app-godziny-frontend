import React, { ChangeEvent, useState } from "react";
import { Box, SwitchProps, Typography } from "@mui/material";
import { MySwitch, SysToggleInputStyles } from "./SysToggleInputStyles";

interface ISysToggleInput extends SwitchProps {
  label: string;
  maxWidth?: string;
  msgchecked?: string;
  msgunchecked?: string;
  onSubmit: () => void;
}

export const SysToggleInput: React.FC<ISysToggleInput> = ({
  label,
  onSubmit,
  maxWidth = "1000px",
  msgchecked = "Ativo",
  msgunchecked = "Inativo",
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(props.checked);
  function onChange(event: ChangeEvent<HTMLInputElement>, checked: boolean) {
    setIsChecked(checked);
    onSubmit();
  }

  return (
    <Box sx={SysToggleInputStyles.container}>
      <Box sx={SysToggleInputStyles.boxLabel}>
        <Typography
          sx={{ maxWidth: maxWidth, ...SysToggleInputStyles.label }}
          variant="body2"
        >
          {label ?? "Escolha um valor"}
        </Typography>
      </Box>
      <Box sx={SysToggleInputStyles.body}>
        <MySwitch onChange={onChange} {...props} />
        <Typography variant="body1">
          {isChecked ? msgchecked : msgunchecked}
        </Typography>
      </Box>
    </Box>
  );
};
