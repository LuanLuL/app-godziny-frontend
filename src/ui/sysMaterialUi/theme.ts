import { createTheme } from "@mui/material";
import sysFonts from "./font/sysFonts";
import sysPalette from "./color/sysColors";

const typography = sysFonts.getTypography() as any;

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
