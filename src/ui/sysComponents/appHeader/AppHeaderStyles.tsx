import { Box, Button, styled } from "@mui/material";
import sysSizing from "../../sysMaterialUi/sizing/sysSizes";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

interface IOptionButton {
  includeborder: "true" | "false";
}

const HeaderBody = styled(Box)(({ theme }) => ({
  width: "100%",
  height: sysSizing.contentPb,
  padding: `${sysSizing.spacingRemMd} ${sysSizing.spacingRemLg}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: `0px -1px 0px 0px ${theme.palette.divider} inset`,
  zIndex: 5,
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

const OptionButton = styled(Button)<IOptionButton>(
  ({ theme, includeborder }) => ({
    height: "40px",
    padding: "10px 12px",
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
    },
    ...(includeborder === "true" && {
      color: `${theme.palette.primary.main}`,
      borderBottom: `2.5px solid ${theme.palette.primary.main}`,
    }),
  })
);

const appHeaderStyles = {
  imgLogo: {
    width: "100%",
    height: "auto",
    maxWidth: "160px",
  },
  imgAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: sysSizing.radiusInfinite,
  },
};

export {
  HeaderBody,
  HeaderTitle,
  HeaderRoutes,
  HeaderOptions,
  OptionButton,
  appHeaderStyles,
  NotificationsIcon,
};