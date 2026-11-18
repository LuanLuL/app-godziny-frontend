import { Divider, DividerProps, styled } from "@mui/material";
import { ElementType } from "react";

interface IStyles {
  MyDivider: ElementType<DividerProps>;
}

const MyDividerStyles: IStyles = {
  MyDivider: styled(Divider)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
  })),
};

export default MyDividerStyles;
