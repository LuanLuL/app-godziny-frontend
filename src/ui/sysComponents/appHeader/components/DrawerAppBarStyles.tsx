import { Box, Button, styled } from "@mui/material";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";
import sysPalette from "../../../sysMaterialUi/colors/sysColors";

const DrawerAppBarTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: `${sysSizing.base.baseFixed075} 0px`,
  width: 240,
}));

const DrawerAppBarOptions = styled(Button)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: sysSizing.base.baseFixed125,
  padding: `0px ${sysSizing.base.baseFixed125}`,
  minHeight: `${sysSizing.base.baseFixed3}`,
  color: theme.palette.info.dark,
  width: "100%",
}));

const drawerAppBarStyles = {
  DrawerAppBarBody: {
    width: 240,
    height: "100vh",
    backgroundColor: `${sysPalette.common?.white}`,
    borderRight: `1px solid ${sysPalette.divider}`,
  },
  imgLogo: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    marginLeft: "0px",
    maxWidth: "130px",
  },
  containerMenuIconDrawerAppBar: {
    marginRight: sysSizing.spacingFixedXs,
    marginLeft: sysSizing.spacingFixedSm,
  },
  containerOptionsDrawerAppBar: {
    width: 232,
    margin: `${sysSizing.base.baseFixed075} 0px 0px ${sysSizing.spacingFixedXs}`,
  },
  dividerDrawerAppBar: {
    border: `1px solid ${sysPalette.divider}`,
    margin: `${sysSizing.base.baseFixed125} ${sysSizing.spacingFixedLg}`,
  },
  textOptionsDrawerAppBar: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 24,
    letterSpacing: 1.2,
  },
};

export { DrawerAppBarTitle, DrawerAppBarOptions, drawerAppBarStyles };
