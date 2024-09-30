import { Box, Typography } from "@mui/material";
import { ShowNotification } from "../../sysComponents/showNotification/ShowNotification";

export const Example = () => {
  return (
    <Box>
      <Typography>Example Page</Typography>
      <ShowNotification
        message="Operação realizada com sucesso!"
        type="success"
        showCloseButton
      />
    </Box>
  );
};
