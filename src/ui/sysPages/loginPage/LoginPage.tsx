import React, { useContext, useState } from "react";
import Styles from "./LoginPageStyles";
import { SysTextField } from "../../sysComponents/sysForm/sysTextField/SysTextField";
import { Box, Typography } from "@mui/material";
import { SysButton } from "../../sysComponents/sysForm/sysButton/SysButton";
import UseAuthContext from "../../../utils/hooks/useAuth/UseAuthContext";
import { useNavigate } from "react-router-dom";

interface ILoginPageProps {
  redirectionPath: string;
}

type ILoginForm = {
  email: string;
  password: string;
};

export const LoginPage: React.FC<ILoginPageProps> = ({ redirectionPath }) => {
  const [loginForm, SetLoginForm] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const { signIn } = useContext(UseAuthContext);
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    SetLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async () => {
    if (loginForm.email && loginForm.password) {
      const isLogged = await signIn(loginForm.email, loginForm.password);
      if (isLogged) {
        navigate(redirectionPath);
      } else {
        alert("Não foi possível realizar login!");
      }
    }
  };

  return (
    <Styles.Container>
      <Typography
        variant="h4"
        sx={{ marginBottom: "12px", textAlign: "center" }}
      >
        Acesso ao Sistema
      </Typography>
      <form>
        <SysTextField
          label="Email"
          name="email"
          placeholder="Digite seu e-mail de acesso"
          value={loginForm.email}
          changeValue={handleChange}
          maxWidth="100%"
        />
        <SysTextField
          label="Senha"
          name="password"
          placeholder="Digite sua senha de acesso"
          value={loginForm.password}
          changeValue={handleChange}
          maxWidth="100%"
          type="password"
        />
      </form>
      <Box sx={{ marginBottom: "12px", textAlign: "center" }}>
        <SysButton
          mode="primary"
          label="Entrar"
          onClick={handleLogin}
          disabled={!loginForm.email || !loginForm.password}
        />
      </Box>
    </Styles.Container>
  );
};
