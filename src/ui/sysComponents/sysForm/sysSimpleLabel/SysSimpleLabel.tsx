import React from "react";
import Styles from "./sysSimpleLabelStyles";

interface ISysSimpleLabel {
  label: string;
  disabled: boolean;
  maxWidth?: string;
}

export const SysSimpleLabel: React.FC<ISysSimpleLabel> = ({
  label,
  disabled,
  maxWidth = "1000px",
}) => {
  return (
    <Styles.TypographyLabel
      sx={{
        maxWidth: maxWidth,
        color: (theme) =>
          disabled ? theme.palette.info.light : "rgba(0,0,0, 0.72)",
      }}
      variant="body2"
    >
      {label ?? "Escolha uma das opções"}
    </Styles.TypographyLabel>
  );
};
