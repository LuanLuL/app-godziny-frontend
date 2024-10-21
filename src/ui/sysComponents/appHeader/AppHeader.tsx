import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HeaderBody,
  HeaderTitle,
  HeaderRoutes,
  HeaderOptions,
  appHeaderStyles,
  OptionButton,
  NotificationsIcon,
} from "./AppHeaderStyles";
import { sysRoutes } from "../../../app/AppRouterSwitch";
import logo from "../../../assets/imgs/logoGodzinyApp.png";
import avatar from "../../../assets/imgs/avatar.png";

export const AppHeader: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <HeaderBody>
      <HeaderTitle>
        <Box
          component="img"
          src={logo}
          alt="logoApp"
          sx={appHeaderStyles.imgLogo}
        />
      </HeaderTitle>
      <HeaderRoutes>
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
        <HeaderOptions>
          <IconButton action={() => {}}>
            <NotificationsIcon />
          </IconButton>
          <Box
            component="img"
            src={avatar}
            alt="avatarApp"
            sx={appHeaderStyles.imgAvatar}
          />
        </HeaderOptions>
      </HeaderRoutes>
    </HeaderBody>
  );
};
