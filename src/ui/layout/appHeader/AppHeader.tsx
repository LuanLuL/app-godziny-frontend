import React, { useContext } from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import Styles, { appHeaderStyles } from "./AppHeaderStyles";
import SysAppContext from "../../../app/AppContext";
import BasicTabs from "./components/basicTabs/BasicTabs";
import SysIcon from "../../sysComponents/sysIcon/SysIcons";
import { sysShadows } from "../../sysMaterialUi/shadow/sysShadows";
import sysSizing from "../../sysMaterialUi/sizing/sysSizes";

interface IAppHeaderProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppHeader: React.FC<IAppHeaderProps> = ({ open, setOpen }) => {
  const { isMobile } = useContext(SysAppContext);

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        zIndex: (t) => t.zIndex.drawer + 3,
        height: sysSizing.contentPb,
        justifyContent: "center",
        bgcolor: (t) => t.palette.common.white,
        boxShadow: sysShadows.shadow2,
        pl: isMobile ? 1 : 4,
        pr: 4,
      }}
    >
      <Toolbar disableGutters>
        <Styles.HeaderTitle>
          {isMobile && (
            <IconButton
              onClick={() => setOpen((previw) => !previw)}
              sx={{ padding: "8px 8px 8px 8px" }}
            >
              <SysIcon
                name={open ? "close" : "menu"}
                sx={{ color: (t) => t.palette.common.black }}
              />
            </IconButton>
          )}
          <Box
            component="img"
            src={"/assets/imgs/logoGodzinyApp.png"}
            alt="logoApp"
            sx={appHeaderStyles.imgLogo(isMobile)}
          />
        </Styles.HeaderTitle>
        <Styles.HeaderRoutes>
          {!isMobile && <BasicTabs />}
          <Styles.HeaderOptions>
            <IconButton action={() => {}}>
              <SysIcon
                name="notifications"
                sx={{ color: (t) => t.palette.common.black }}
              />
            </IconButton>
            <Box
              component="img"
              src={"/assets/imgs/avatar.png"}
              alt="avatarApp"
              sx={appHeaderStyles.imgAvatar(isMobile)}
            />
          </Styles.HeaderOptions>
        </Styles.HeaderRoutes>
      </Toolbar>
    </AppBar>
  );
};
