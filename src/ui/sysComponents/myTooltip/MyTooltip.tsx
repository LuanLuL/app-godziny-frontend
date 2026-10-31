import React from "react";
import { TooltipProps } from "@mui/material";
import { CustomWidthTooltip } from "./MyTooltipStyles";

interface IMyTooltipProps extends TooltipProps {
  customWidth: string;
  disabled?: boolean;
}

export const MyTooltip: React.FC<IMyTooltipProps> = ({
  customWidth,
  children,
  disabled,
  ...props
}) => {
  if (disabled) return <>{children}</>;
  return (
    <CustomWidthTooltip customWidth={customWidth} {...props}>
      {children}
    </CustomWidthTooltip>
  );
};
