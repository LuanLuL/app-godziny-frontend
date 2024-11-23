import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import { sysRoutes } from "../../../../app/AppRouterSwitch";
import {
  drawerAppBarStyles,
  DrawerAppBarTitle,
  DrawerAppBarOptions,
} from "./DrawerAppBarStyles";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../../../assets/imgs/logoGodzinyApp.png";

interface IDrawerHeaderProps {
  navigate: (path: string) => void;
  control: (open: boolean) => () => void;
}

export const DrawerHeader: React.FC<IDrawerHeaderProps> = ({
  control,
  navigate,
}) => {
  const theme = useTheme();

  return (
    <Box
      component="div"
      sx={drawerAppBarStyles.DrawerAppBarBody}
      role="presentation"
      onClick={control(false)}
      onKeyDown={control(false)}
    >
      <DrawerAppBarTitle>
        <Box sx={drawerAppBarStyles.containerMenuIconDrawerAppBar}>
          <IconButton onClick={control(false)}>
            <CloseIcon sx={{ color: `${theme.palette.common.black}` }} />
          </IconButton>
        </Box>
        <Box
          component="img"
          src={logo}
          alt="logoApp"
          sx={drawerAppBarStyles.imgLogo}
        />
      </DrawerAppBarTitle>
      <Box sx={drawerAppBarStyles.containerOptionsDrawerAppBar}>
        {sysRoutes.map((route, index) => (
          <DrawerAppBarOptions>
            {route.icon}
            <Typography
              key={`routeDrawerBar${index}:${route.label}`}
              onClick={() => navigate(route.path)}
              sx={drawerAppBarStyles.textOptionsDrawerAppBar}
            >
              {route.label}
            </Typography>
          </DrawerAppBarOptions>
        ))}
      </Box>
      <Divider sx={drawerAppBarStyles.dividerDrawerAppBar}/>
    </Box>
  );
};
