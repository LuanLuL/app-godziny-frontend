import { Box, Button, IconButton } from "@mui/material";
import {
  HeaderBody,
  HeaderTitle,
  HeaderOptions,
  appHeaderStyles,
  NotificationsIcon,
} from "./AppHeaderStyles";
import { sysRoutes } from "../../../app/AppRouterSwitch";
import logo from "../../../assets/imgs/logoGodzinyApp.png";
import avatar from "../../../assets/imgs/avatar.png";
import { useTheme } from "@emotion/react";

export const AppHeader: React.FC = () => {
  const theme = useTheme();
  console.log(theme);

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
      <HeaderOptions>
        {sysRoutes.map((route, index) => (
          <Button
            key={`route${index}:${route.label}`}
            sx={appHeaderStyles.optionBody}
          >
            {route.label}
          </Button>
        ))}
        <IconButton action={() => console.log("notificaçao")}>
          <NotificationsIcon />
        </IconButton>
        <Box
          component="img"
          src={avatar}
          alt="avatarApp"
          sx={appHeaderStyles.imgAvatar}
        />
      </HeaderOptions>
    </HeaderBody>
  );
};
