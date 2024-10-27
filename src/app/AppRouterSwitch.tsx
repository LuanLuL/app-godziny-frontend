import { Routes, Route, Navigate } from "react-router-dom";
import { Example } from "../ui/sysPages/example/Example";
import { Box, SvgIconProps, Typography } from "@mui/material";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";

export interface IRoutes {
  label: string;
  path: string;
  icon: React.ReactElement<SvgIconProps>;
}

export const sysRoutes: IRoutes[] = [
  { label: "Exemplo", path: "/example", icon: <FolderZipIcon /> },
  { label: "Atividades", path: "/atividades", icon: <EventNoteIcon /> },
  { label: "Cursos", path: "/cursos", icon: <SchoolIcon /> },
  { label: "Usuários", path: "/usuarios", icon: <BadgeIcon /> },
];

export const AppRouterSwitch = () => {
  return (
    <Routes>
      <Route path="/example" element={<Example />} />
      <Route
        path="/atividades/:screenState?/:id?"
        element={
          <Box>
            <Typography>Atividades</Typography>
          </Box>
        }
      />
      <Route
        path="/cursos/:screenState?/:id?"
        element={
          <Box>
            <Typography>cursos</Typography>
          </Box>
        }
      />
      <Route
        path="/usuarios/:screenState?/:id?"
        element={
          <Box>
            <Typography>usuarios</Typography>
          </Box>
        }
      />
      <Route path="*" element={<Navigate to="/example" />} />
    </Routes>
  );
};
