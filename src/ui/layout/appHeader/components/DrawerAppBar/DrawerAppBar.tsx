import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { sysAppBarOptions } from "../../../appModuleManeger/AppModuleManeger";
import Styles from "./DrawerAppBarStyles";
import CloseIcon from "@mui/icons-material/Close";
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
        {sysAppBarOptions
          .filter((item) => item.active)
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
        {sysAppBarOptions
          .filter((item) => item.active)
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
        <Box component="p">LOGO</Box>
      </Styles.DrawerAppBarTitle>
      {DrawerListAdminUser}
      <Styles.DividerDrawerAppBar />
      {DrawerListUser}
    </Styles.DrawerAppBarBody>
  );
};
