import React, { useContext, useState } from "react";
import { Box, IconButton, Typography, Drawer } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HeaderBody,
  HeaderTitle,
  HeaderRoutes,
  HeaderOptions,
  appHeaderStyles,
  OptionButton,
  MenuIconHeader,
  NotificationsIcon,
} from "./AppHeaderStyles";
import { sysRoutes } from "../../../app/AppRouterSwitch";
import logo from "../../../assets/imgs/logoGodzinyApp.png";
import avatar from "../../../assets/imgs/avatar.png";
import { SysAppLayoutContext } from "../../../app/AppLayout";
import { DrawerHeader } from "./components/DrawerAppBar";

export const AppHeader: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isMobile } = useContext(SysAppLayoutContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleClick = (path: string) => {
    navigate(path);
  };
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
          {!isMobile && (
            <Box>
              {sysRoutes.map((route, index) => (
                <OptionButton
                  key={`route${index}:${route.label}`}
                  onClick={() => handleClick(route.path)}
                  includeborder={
                    location.pathname === route.path ? "true" : "false"
                  }
                  sx={{
                    borderRadius: location.pathname === route.path ? 0 : "",
                  }}
                >
                  <Typography variant="body1">{route.label}</Typography>
                </OptionButton>
              ))}
            </Box>
          )}
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
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerHeader navigate={handleClick} control={toggleDrawer} />
      </Drawer>
    </>
  );
};
