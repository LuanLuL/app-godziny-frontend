import React from "react";
import { Box, Tooltip, TooltipProps } from "@mui/material";
import SysIcon from "../sysIcon/SysIcons";
import { MyTooltip } from "../myTooltip/MyTooltip";

interface IIconTooltipProps extends TooltipProps {
  type: "info" | "help";
}

export const IconTooltip: React.FC<IIconTooltipProps> = ({
  type,
  ...props
}) => {
  return (
    <MyTooltip customWidth="auto" {...props}>
      <Box component="span">
        <SysIcon name={type} sx={{ color: (t) => t.palette.common.black }} />
      </Box>
    </MyTooltip>
  );
};
