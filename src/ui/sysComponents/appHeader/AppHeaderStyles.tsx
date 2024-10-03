import { Box, styled } from "@mui/material";
import sysSizing from "../../sysMaterialUi/sizing/sysSizes";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const HeaderBody = styled(Box)(({ theme }) => ({
  width: "100%",
  height: sysSizing.contentPb,
  padding: `${sysSizing.spacingRemMd} ${sysSizing.spacingRemLg}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0px -1px 0px 0px #0000001a inset",
}));

const NotificationsIcon = styled(NotificationsNoneIcon)(({ theme }) => ({
  color: theme.palette.common.black,
  width: sysSizing.componentsIconSize,
  height: sysSizing.componentsIconSize,
}));

const HeaderTitle = styled(Box)(({ theme }) => ({
  alignSelf: "flex-start",
  flexGrow: 4,
}));

const HeaderOptions = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "1px",
  flexGrow: 6,
}));

const appHeaderStyles = {
  imgLogo: {
    width: "100%",
    height: "auto",
    maxWidth: "170px",
  },
  imgAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: sysSizing.radiusInfinite,
  },
  optionBody: {
    height: "40px",
    borderRadius: sysSizing.spacingFixedXs,
  },
};

export {
  HeaderBody,
  HeaderTitle,
  HeaderOptions,
  appHeaderStyles,
  NotificationsIcon,
};
