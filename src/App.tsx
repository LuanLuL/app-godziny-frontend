import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { CssBaseline } from "@mui/material";
import { MaterialUiTheme } from "./ui/sysMaterialUi/theme";

export const App = () => {
  return (
    <ThemeProvider theme={MaterialUiTheme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
