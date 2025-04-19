import { ElementType } from "react";
import Box, { BoxProps } from "@mui/material/Box";
import styled from "@mui/material/styles/styled";

interface IStyles {
  AppScreen: ElementType<BoxProps>;
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
  AppContainerRouterSwitch: styled(Box)(({ theme }) => ({
    width: "100%",
    position: "relative",
  })),
  AppContainerSideBar: styled(Box)(({ theme }) => ({
    width: "100%",
    position: "relative",
  })),
};

export default AppLayoutStyles;
