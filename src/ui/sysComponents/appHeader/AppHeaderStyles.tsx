import { Box, styled, SxProps, Theme } from "@mui/material";
import sysSizing from "../../sysMaterialUi/sizing/sysSizes";
import MenuIcon from "@mui/icons-material/Menu";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

const HeaderBody = styled(Box)(({ theme }) => ({
  width: "100%",
  height: sysSizing.contentPb,
  padding: `${sysSizing.spacingRemMd} 0px`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: `0px -1px 0px 0px ${theme.palette.divider} inset`,
  zIndex: 5,
}));

const NotificationsIcon = styled(ShieldOutlinedIcon)(({ theme }) => ({
  color: theme.palette.common.black,
  width: sysSizing.componentsIconSize,
  height: sysSizing.componentsIconSize,
}));

const HeaderTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexGrow: 4,
}));

const HeaderRoutes = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: sysSizing.spacingFixedXl,
  flexGrow: 6,
}));

const HeaderOptions = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: sysSizing.spacingFixedMd,
}));

const MenuIconHeader = styled(MenuIcon)(({ theme }) => ({
  color: theme.palette.common.black,
  width: sysSizing.componentsIconSize,
  height: sysSizing.componentsIconSize,
  padding: 0,
}));

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
  containerMenuIconHeader: {
    marginRight: sysSizing.spacingFixedXs,
    marginLeft: sysSizing.spacingFixedSm,
  },
};

export {
  HeaderBody,
  HeaderTitle,
  HeaderRoutes,
  HeaderOptions,
  MenuIconHeader,
  appHeaderStyles,
  NotificationsIcon,
};
