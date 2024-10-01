import { AppLayout } from "./AppLayout";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { MaterialUiTheme } from "../ui/sysMaterialUi/theme";

export const App = () => {
  return (
    <ThemeProvider theme={MaterialUiTheme}>
      <CssBaseline enableColorScheme />
      <AppLayout />
    </ThemeProvider>
  );
};
