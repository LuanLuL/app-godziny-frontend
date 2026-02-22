import React from "react";
import { Box, Tooltip, TooltipProps } from "@mui/material";
import Styles from "./IconTooltipStyles";
import SysIcon from "../sysIcon/SysIcons";

interface IIconTooltipProps extends TooltipProps {
  type: "info" | "help";
}

export const IconTooltip: React.FC<IIconTooltipProps> = ({
  type,
  ...props
}) => {
  return (
    <Tooltip {...props}>
      <Box component="span">
        <SysIcon name={type} sx={{ color: (t) => t.palette.common.black }} />
      </Box>
    </Tooltip>
  );
};
