import React, { useContext, useState } from "react";
import { Box, IconButton, Drawer } from "@mui/material";
import {
  HeaderBody,
  HeaderTitle,
  HeaderRoutes,
  HeaderOptions,
  appHeaderStyles,
  MenuIconHeader,
  NotificationsIcon,
} from "./AppHeaderStyles";
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
      <HeaderBody>
        <HeaderTitle>
          {isMobile && (
            <Box sx={appHeaderStyles.containerMenuIconHeader}>
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIconHeader />
              </IconButton>
            </Box>
          )}
          <Box
            component="img"
            src={logo}
            alt="logoApp"
            sx={appHeaderStyles.imgLogo(isMobile)}
          />
        </HeaderTitle>
        <HeaderRoutes>
          {!isMobile && <BasicTabs />}
          <HeaderOptions>
            <IconButton action={() => {}}>
              <NotificationsIcon />
            </IconButton>
            <Box
              component="img"
              src={avatar}
              alt="avatarApp"
              sx={appHeaderStyles.imgAvatar(isMobile)}
            />
          </HeaderOptions>
        </HeaderRoutes>
      </HeaderBody>
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
