import { ElementType } from "react";
import Box, { BoxProps } from "@mui/material/Box";
import styled from "@mui/material/styles/styled";

interface IStyles {
  AppScreen: ElementType<BoxProps>;
  AppBody: ElementType<BoxProps>;
  AppContainerRouterSwitch: ElementType<BoxProps>;
  AppContainerSideBar: ElementType<BoxProps>;
}

const AppLayoutStyles: IStyles = {
  AppScreen: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
  })),
  AppBody: styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    height: "100%",
  })),
  AppContainerRouterSwitch: styled(Box)(({ theme }) => ({
    width: "100%",
    position: "relative",
    overflow: "scroll",
  })),
  AppContainerSideBar: styled(Box)(({ theme }) => ({
    height: "100%",
    position: "relative",
  })),
};

export default AppLayoutStyles;
