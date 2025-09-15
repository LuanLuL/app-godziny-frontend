import { UseAppController } from "./AppController";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { MaterialUiTheme } from "../ui/sysMaterialUi/theme";
import { appStyles } from "./AppStyles";

export const App = () => {
  return (
    <ThemeProvider theme={MaterialUiTheme}>
      <CssBaseline enableColorScheme />
      <GlobalStyles styles={appStyles} />
      <UseAppController />
    </ThemeProvider>
  );
};
