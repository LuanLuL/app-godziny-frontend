import { ElementType } from "react";
import { SxProps, Theme } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import sysSizing from "../../sysMaterialUi/sizing/sysSizes";
import MenuIcon from "@mui/icons-material/Menu";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

const NotificationsIcon = styled(ShieldOutlinedIcon)(({ theme }) => ({
  color: theme.palette.common.black,
  width: sysSizing.componentsIconSize,
  height: sysSizing.componentsIconSize,
}));

const MenuIconHeader = styled(MenuIcon)(({ theme }) => ({
  color: theme.palette.common.black,
  width: sysSizing.componentsIconSize,
  height: sysSizing.componentsIconSize,
  padding: 0,
}));

interface IStyles {
  HeaderBody: ElementType<BoxProps>;
  HeaderTitle: ElementType<BoxProps>;
  HeaderRoutes: ElementType<BoxProps>;
  HeaderOptions: ElementType<BoxProps>;
  ContainerMenuIconHeader: ElementType<BoxProps>;
  MenuIconHeader: typeof MenuIconHeader;
  NotificationsIcon: typeof NotificationsIcon;
}

const AppHeaderStyles: IStyles = {
  HeaderBody: styled(Box)(({ theme }) => ({
    width: "100%",
    height: sysSizing.contentPb,
    padding: `${sysSizing.spacingRemMd} 0px`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: `0px -1px 0px 0px ${theme.palette.divider} inset`,
    zIndex: 5,
    position: "relative",
  })),
  HeaderTitle: styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexGrow: 4,
  })),
  HeaderRoutes: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: sysSizing.spacingFixedXl,
    flexGrow: 6,
  })),
  HeaderOptions: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: sysSizing.spacingFixedMd,
  })),
  ContainerMenuIconHeader: styled(Box)(({ theme }) => ({
    marginRight: sysSizing.spacingFixedXs,
    marginLeft: sysSizing.spacingFixedSm,
  })),
  MenuIconHeader,
  NotificationsIcon,
};

const appHeaderStyles = {
  imgLogo: (isMobile: boolean): SxProps<Theme> => ({
    width: "100%",
    height: "auto",
    objectFit: "contain",
    marginLeft: isMobile ? "0px" : sysSizing.spacingRemLg,
    maxWidth: isMobile ? "130px" : "160px",
  }),
  imgAvatar: (isMobile: boolean): SxProps<Theme> => ({
    width: "40px",
    height: "40px",
    borderRadius: sysSizing.radiusInfinite,
    marginRight: isMobile ? sysSizing.spacingRemMd : sysSizing.spacingRemLg,
  }),
};

export default AppHeaderStyles;

export { appHeaderStyles };
