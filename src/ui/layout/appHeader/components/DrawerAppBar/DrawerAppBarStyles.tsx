import { Box, BoxProps, Divider, DividerProps, styled } from "@mui/material";
import sysSizing from "../../../../sysMaterialUi/sizing/sysSizes";
import sysPalette from "../../../../sysMaterialUi/colors/sysColors";
import { ElementType } from "react";

export const drawerAppBarStyles = {
  imgLogo: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    marginLeft: "0px",
    maxWidth: "130px",
  },
};

interface IStyles {
  DrawerAppBarTitle: ElementType<BoxProps>;
  DrawerAppBarBody: ElementType<BoxProps>;
  ContainerMenuIconDrawerAppBar: ElementType<BoxProps>;
  ContainerOptionsDrawerAppBar: ElementType<BoxProps>;
  DividerDrawerAppBar: ElementType<DividerProps>;
}

const sysDrawerAppBarStyles: IStyles = {
  DrawerAppBarTitle: styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: `${sysSizing.base.baseFixed075} 0px`,
    width: 240,
  })),
  DrawerAppBarBody: styled(Box)(({ theme }) => ({
    width: 240,
    height: "100vh",
    backgroundColor: `${sysPalette.common?.white}`,
    borderRight: `1px solid ${sysPalette.divider}`,
    "&::-webkit-scrollbar": {
      height: "0",
    },
  })),
  ContainerMenuIconDrawerAppBar: styled(Box)(({ theme }) => ({
    marginRight: sysSizing.spacingFixedXs,
    marginLeft: sysSizing.spacingFixedSm,
  })),
  ContainerOptionsDrawerAppBar: styled(Box)(({ theme }) => ({
    width: 240,
  })),
  DividerDrawerAppBar: styled(Divider)(({ theme }) => ({
    border: `1px solid ${sysPalette.divider}`,
  })),
};

export default sysDrawerAppBarStyles;
