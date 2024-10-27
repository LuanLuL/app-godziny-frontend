import { Box, Typography } from "@mui/material";
import { sysRoutes } from "../../../../app/AppRouterSwitch";

interface IDrawerHeaderProps {
  navigate: (path: string) => void;
  control: (open: boolean) => () => void;
}

export const DrawerHeader: React.FC<IDrawerHeaderProps> = ({
  control,
  navigate,
}) => {
  return (
    <Box
      component="div"
      sx={{ width: 240 }}
      role="presentation"
      onClick={control(false)}
      onKeyDown={control(false)}
    >
      {sysRoutes.map((route, index) => (
        <Typography
          key={index}
          variant="body1"
          onClick={() => navigate(route.path)}
        >
          {route.label}
        </Typography>
      ))}
    </Box>
  );
};
