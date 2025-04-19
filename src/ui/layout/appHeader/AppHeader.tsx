import React, { useContext, useState } from "react";
import { Box, IconButton, Drawer } from "@mui/material";
import Styles, { appHeaderStyles } from "./AppHeaderStyles";
import logo from "../../../assets/imgs/logoGodzinyApp.png";
import avatar from "../../../assets/imgs/avatar.png";
import { SysAppLayoutContext } from "../../../app/AppLayout";
import { DrawerHeader } from "./components//DrawerAppBar/DrawerAppBar";
import BasicTabs from "./components/BasicTabs/BasicTabs";

export const AppHeader: React.FC = () => {
  const { isMobile } = useContext(SysAppLayoutContext);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Styles.HeaderBody>
        <Styles.HeaderTitle>
          {isMobile && (
            <Styles.ContainerMenuIconHeader>
              <IconButton onClick={toggleDrawer(true)}>
                <Styles.MenuIconHeader />
              </IconButton>
            </Styles.ContainerMenuIconHeader>
          )}
          <Box
            component="img"
            src={logo}
            alt="logoApp"
            sx={appHeaderStyles.imgLogo(isMobile)}
          />
        </Styles.HeaderTitle>
        <Styles.HeaderRoutes>
          {!isMobile && <BasicTabs />}
          <Styles.HeaderOptions>
            <IconButton action={() => {}}>
              <Styles.NotificationsIcon />
            </IconButton>
            <Box
              component="img"
              src={avatar}
              alt="avatarApp"
              sx={appHeaderStyles.imgAvatar(isMobile)}
            />
          </Styles.HeaderOptions>
        </Styles.HeaderRoutes>
      </Styles.HeaderBody>
      <Drawer
        anchor="left"
        open={isMobile ? drawerOpen : false}
        onClose={toggleDrawer(false)}
      >
        <DrawerHeader control={toggleDrawer} />
      </Drawer>
    </>
  );
};
