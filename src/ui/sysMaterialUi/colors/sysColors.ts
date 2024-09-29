import { PaletteOptions } from "@mui/material";

const blueScale = {
  escuro: "#003399",
  claro: "#6699FF",
  normal: "#003399",
};

const greenScale = {
  escuro: "#00802f",
  claro: "#C5F2C7",
  normal: "#00b050",
};

const grayScale = {
  escuro: "rgba(0, 0, 0, 0.72)",
  claro: "#969696",
  normal: "#666666",
  separator: "#0000001a",
  textPrimary: "#17171c",
  textSecondary: "#454554",
  disabled: "#a4a4b5",
};

const redScale = {
  escuro: "#990003",
  claro: "#ff6669",
  normal: "#d51013",
};

const yellowScale = {
  escuro: "#665200",
  claro: "#ffe066",
  normal: "#ffd633",
};

const sysBaseColors = {
  black: "#000000de",
  white: "#ffffff",
};

const sysPalette: PaletteOptions = {
  common: {
    black: sysBaseColors.black,
    white: sysBaseColors.white,
  },
  primary: {
    light: blueScale.claro,
    main: blueScale.normal,
    dark: blueScale.escuro,
  },
  success: {
    light: greenScale.claro,
    main: greenScale.normal,
    dark: greenScale.escuro,
  },
  warning: {
    light: yellowScale.claro,
    main: yellowScale.normal,
    dark: yellowScale.escuro,
  },
  info: {
    light: blueScale.claro,
    main: blueScale.normal,
    dark: blueScale.escuro,
  },
  error: {
    light: redScale.claro,
    main: redScale.normal,
    dark: redScale.escuro,
  },
  text: {
    primary: grayScale.textPrimary,
    secondary: grayScale.textSecondary,
    disabled: grayScale.disabled,
  },
  background: {
    paper: sysBaseColors.white,
    default: sysBaseColors.white,
  },
  divider: grayScale.separator,
};

export default sysPalette;
