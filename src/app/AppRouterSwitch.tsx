import { Routes, Route, Navigate } from "react-router-dom";
import { Example } from "../ui/sysPages/example/Example";
import { Box, Typography } from "@mui/material";

export interface IRoutes {
  label: string;
  path: string;
}

export const sysRoutes: IRoutes[] = [
  { label: "Exemplo", path: "/example" },
  { label: "Atividades", path: "/atividades" },
  { label: "Cursos", path: "/cursos" },
  { label: "Usuários", path: "/usuarios" },
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
