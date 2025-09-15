import React from "react";
import { Box, Tooltip, TooltipProps } from "@mui/material";
import Styles from "./IconTooltipStyles";

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
        {type === "info" ? <Styles.InformationIcon /> : <Styles.QuestionIcon />}
      </Box>
    </Tooltip>
  );
};
