import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Example } from "../ui/sysPages/example/Example";
import { Box, Typography } from "@mui/material";
import { RequireAuth } from "../ui/sysComponents/requireAuth/RequireAuth";
import { useContext } from "react";
import UseAuthContext from "../utils/hooks/useAuth/UseAuthContext";
import { SysButton } from "../ui/sysComponents/sysForm/sysButton/SysButton";
import { UserType } from "../modules/user/config/EnumUserType";

export const AppRouterSwitch = () => {
  const { isLogged, signOut } = useContext(UseAuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate("/");
  };

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
          <RequireAuth level={UserType.ADMINISTRATOR} path="/usuarios">
            <Box>
              <Typography>usuarios</Typography>
            </Box>
            {isLogged && (
              <SysButton mode="primary" label="Sair" onClick={handleLogout} />
            )}
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/example" />} />
    </Routes>
  );
};
