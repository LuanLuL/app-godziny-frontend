import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { sysRoutes } from "../../../../../app/AppRouterSwitch";
import Styles, { drawerAppBarStyles } from "./DrawerAppBarStyles";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../../../../assets/imgs/logoGodzinyApp.png";
import { useNavigate } from "react-router-dom";

interface IDrawerHeaderProps {
  control: (open: boolean) => () => void;
}

export const DrawerHeader: React.FC<IDrawerHeaderProps> = ({ control }) => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
    control(false);
  };

  const DrawerListAdminUser = (
    <Styles.ContainerOptionsDrawerAppBar role="presentation">
      <List>
        {sysRoutes
          .filter((item) => item.protect)
          .map((route, index) => (
            <ListItem
              key={`routeDrawerBar${index}:${route.label}`}
              disablePadding
              onClick={() => handleClick(route.path)}
            >
              <ListItemButton>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.label} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Styles.ContainerOptionsDrawerAppBar>
  );

  const DrawerListUser = (
    <Styles.ContainerOptionsDrawerAppBar role="presentation">
      <List>
        {sysRoutes
          .filter((item) => !item.protect)
          .map((route, index) => (
            <ListItem
              key={`routeDrawerBar${index}:${route.label}`}
              disablePadding
              onClick={() => handleClick(route.path)}
            >
              <ListItemButton>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.label} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Styles.ContainerOptionsDrawerAppBar>
  );

  return (
    <Styles.DrawerAppBarBody
      role="presentation"
      onClick={control(false)}
      onKeyDown={control(false)}
    >
      <Styles.DrawerAppBarTitle>
        <Styles.ContainerMenuIconDrawerAppBar>
          <IconButton onClick={control(false)}>
            <CloseIcon
              sx={{ color: (theme) => `${theme.palette.common.black}` }}
            />
          </IconButton>
        </Styles.ContainerMenuIconDrawerAppBar>
        <Box
          component="img"
          src={logo}
          alt="logoApp"
          sx={drawerAppBarStyles.imgLogo}
        />
      </Styles.DrawerAppBarTitle>
      {DrawerListAdminUser}
      <Styles.DividerDrawerAppBar />
      {DrawerListUser}
    </Styles.DrawerAppBarBody>
  );
};
