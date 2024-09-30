import React from "react";
import { TooltipProps } from "@mui/material";
import { CustomWidthTooltip } from "./MyTooltipStyles";

interface IMyTooltipProps extends TooltipProps {
  customWidth: number;
}

export const MyTooltip: React.FC<IMyTooltipProps> = ({
  customWidth,
  children,
  ...props
}) => {
  return (
    <CustomWidthTooltip customWidth={customWidth} {...props}>
      {children}
    </CustomWidthTooltip>
  );
};
