import { createTheme } from "@mui/material";
import sysFonts from "./font/sysFonts";
import sysPalette from "./color/sysColors";

const typography = sysFonts.getTypography() as any;

declare module "@mui/material/styles" {
  interface ISysText {
    auxiliary?: string;
    auxiliary2?: string;
    base?: string;
    baseContrast?: string;
    body?: string;
    disabled?: string;
    title?: string;
  }

  interface Palette {
    sysText: ISysText;
  }

  interface PaletteOptions {
    sysText?: Partial<ISysText>;
  }
}

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
