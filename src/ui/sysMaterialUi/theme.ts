import { createTheme } from "@mui/material";
import sysFonts from "./fonts/sysFonts";
import sysPalette from "./colors/sysColors";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = sysFonts.getTypography();

export const MaterialUiTheme = createTheme({
  palette: {
    ...sysPalette,
  },
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});
