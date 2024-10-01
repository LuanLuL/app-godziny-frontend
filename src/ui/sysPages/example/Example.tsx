import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { SysAppLayoutContext } from "../../../app/AppLayout";
import axios, { AxiosError } from "axios";

export const Example = () => {
  const { showNotification } = React.useContext(SysAppLayoutContext);

  return (
    <Box
      sx={{
        padding: "40px",
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
      }}
    >
      <Typography>EXAMPLE PAGE</Typography>
      <Box>
        <Button
          onClick={() =>
            showNotification({
              message: "Operação realizada com sucesso!",
              type: "success",
            })
          }
        >
          Success Notification
        </Button>
        <Button
          onClick={() =>
            showNotification({
              message: "Operação está com aviso!",
              type: "warning",
            })
          }
        >
          Warning Notification
        </Button>
        <Button
          onClick={() =>
            showNotification({
              message: "Operação incompleta por causa de algum erro!",
              type: "error",
            })
          }
        >
          Error Notification
        </Button>
      </Box>
      <Box>
        <Button onClick={() => handleLogin()}>Login</Button>
      </Box>
    </Box>
  );

  async function handleLogin() {
    try {
      console.log("entrou");
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: "adm@uemg.com",
        senha: "123456",
      });
      console.log("LOGIN  = ", response);
      showNotification({
        type: "success",
        message: "Login realizado com sucesso!",
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        showNotification({
          type: "error",
          message: error.response?.data?.detail || "An unknown error occurred",
        });
      }
    }
  }
};
