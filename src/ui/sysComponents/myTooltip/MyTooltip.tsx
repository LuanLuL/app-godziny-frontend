import React from "react";
import { Box, TooltipProps } from "@mui/material";
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

  const isDisabled =
    React.isValidElement(children) &&
    Boolean((children.props as { disabled?: boolean }).disabled);

  return (
    <CustomWidthTooltip customWidth={customWidth} {...props}>
      {isDisabled ? <Box component="span">{children}</Box> : children}
    </CustomWidthTooltip>
  );
};
