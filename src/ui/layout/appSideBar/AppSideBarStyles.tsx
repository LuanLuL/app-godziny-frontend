import { Box, BoxProps, Divider, DividerProps, styled } from "@mui/material";
import { ElementType } from "react";

interface IStyles {
  DrawerAppSideBar: ElementType<BoxProps>;
}

const sysDrawerAppBarStyles: IStyles = {
  DrawerAppSideBar: styled(Box)(({ theme }) => ({  })),
};

export default sysDrawerAppBarStyles;
