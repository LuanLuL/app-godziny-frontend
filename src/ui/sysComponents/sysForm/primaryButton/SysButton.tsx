import React from "react";
import { ButtonProps, Typography } from "@mui/material";
import { SysButtonContainer } from "./sysButtonStyles";

interface ISysButton extends ButtonProps {
  mode: "primary" | "secondary" | "link";
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const SysButton: React.FC<ISysButton> = ({
  mode,
  label,
  onClick,
  ...props
}) => {
  return (
    <SysButtonContainer mode={mode} onClick={onClick} {...props}>
      <Typography variant="body1">{label}</Typography>
    </SysButtonContainer>
  );
};
