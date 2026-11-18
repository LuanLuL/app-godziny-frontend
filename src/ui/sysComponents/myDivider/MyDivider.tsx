import { DividerProps, SxProps } from "@mui/material";
import React from "react";
import Styles from "./MyDividerStyles";
import { Theme } from "@emotion/react";

interface IMyDividerProps extends DividerProps {
  sxMap?: {
    divider?: SxProps<Theme>;
  };
}

export const MyDivider: React.FC<IMyDividerProps> = ({ sxMap, ...props }) => {
  return <Styles.MyDivider sx={sxMap?.divider} {...props} />;
};
