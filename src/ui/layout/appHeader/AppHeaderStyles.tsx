import { ElementType } from "react";
import { SxProps, Theme } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import sysSizing from "../../sysMaterialUi/sizing/sysSizes";

interface IStyles {
  HeaderTitle: ElementType<BoxProps>;
  HeaderRoutes: ElementType<BoxProps>;
  HeaderOptions: ElementType<BoxProps>;
}

const AppHeaderStyles: IStyles = {
  HeaderTitle: styled(Box)(() => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexGrow: 4,
  })),
  HeaderRoutes: styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: sysSizing.spacingFixedXl,
    flexGrow: 6,
  })),
  HeaderOptions: styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: sysSizing.spacingFixedMd,
  })),
};

const appHeaderStyles = {
  imgLogo: (isMobile: boolean): SxProps<Theme> => ({
    width: "100%",
    height: "auto",
    objectFit: "contain",
    maxWidth: isMobile ? "130px" : "160px",
  }),
  imgAvatar: (isMobile: boolean): SxProps<Theme> => ({
    width: "40px",
    height: "40px",
    borderRadius: sysSizing.radiusInfinite,
  }),
};

export default AppHeaderStyles;

export { appHeaderStyles };
