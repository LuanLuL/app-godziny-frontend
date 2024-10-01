import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { SysAppLayoutContext } from "../../../app/AppLayout";

export const Example = () => {
  const { showNotification } = React.useContext(SysAppLayoutContext);

  return (
    <Box sx={{ padding: "40px" }}>
      <Typography>EXAMPLE PAGE</Typography>
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
  );
};
