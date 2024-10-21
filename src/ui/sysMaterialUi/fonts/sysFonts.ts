import { TypographyOptions } from "@mui/material/styles/createTypography";

class SysFonts {
  public static readonly fontFamily = "Rawline, sans-serif";

  public static readonly h1 = (_fontScale: number = 1) => ({
    fontFamily: SysFonts.fontFamily,
    fontWeight: 700,
    fontSize: `${48 * _fontScale}px`,
    lineHeight: "normal",
    "@media screen and (max-width: 600px)": {
      fontSize: `${44 * _fontScale}px`,
      lineHeight: "normal",
    },
  });

  public static readonly h2 = (_fontScale: number = 1) => ({
    fontFamily: SysFonts.fontFamily,
    fontWeight: 700,
    fontSize: `${32 * _fontScale}px`,
    lineHeight: "normal",
    "@media screen and (max-width: 600px)": {
      fontSize: `${44 * _fontScale}px`,
      lineHeight: "normal",
    },
  });

  public static readonly h3 = (_fontScale: number = 1) => ({
    fontFamily: SysFonts.fontFamily,
    fontWeight: 700,
    fontSize: `${24 * _fontScale}px`,
    lineHeight: "normal",
    "@media screen and (max-width: 600px)": {
      fontSize: `${28 * _fontScale}px`,
      lineHeight: "normal",
    },
  });

  public static readonly h4 = (_fontScale: number = 1) => ({
    fontFamily: SysFonts.fontFamily,
    fontWeight: 400,
    fontSize: `${24 * _fontScale}px`,
    lineHeight: "normal",
    "@media screen and (max-width: 600px)": {
      fontSize: `${28 * _fontScale}px`,
      lineHeight: "normal",
    },
  });

  public static readonly h5 = (_fontScale: number = 1) => ({
    fontFamily: SysFonts.fontFamily,
    fontWeight: 700,
    fontSize: `${20 * _fontScale}px`,
    lineHeight: "normal",
    "@media screen and (max-width: 600px)": {
      fontSize: `${24 * _fontScale}px`,
      lineHeight: "normal",
    },
  });

  public static readonly h6 = (_fontScale: number = 1) => ({
    fontFamily: SysFonts.fontFamily,
    fontWeight: 400,
    fontSize: `${18 * _fontScale}px`,
    lineHeight: "normal",
    "@media screen and (max-width: 600px)": {
      fontSize: `${22 * _fontScale}px`,
      lineHeight: "normal",
    },
  });

  public static readonly subtitle1 = (_fontScale: number = 1) => ({
    fontFamily: SysFonts.fontFamily,
    fontWeight: 700,
    fontSize: `${16 * _fontScale}px`,
    lineHeight: "normal",
    "@media screen and (max-width: 600px)": {
      fontSize: `${18 * _fontScale}px`,
      lineHeight: "normal",
    },
  });

  public static readonly subtitle2 = (_fontScale: number = 1) => ({
    fontFamily: SysFonts.fontFamily,
    fontWeight: 700,
    fontSize: `${14 * _fontScale}px`,
    lineHeight: "normal",
    "@media screen and (max-width: 600px)": {
      fontSize: `${18 * _fontScale}px`,
      lineHeight: "normal",
    },
  });

  public static readonly button = (_fontScale: number = 1) => ({
    fontFamily: SysFonts.fontFamily,
    fontSize: `${14 * _fontScale}px`,
    textTransform: "none" as "none",
    fontWeight: 700,
    lineHeight: "24px",
    "@media screen and (max-width: 600px)": {
      fontSize: `${12 * _fontScale}px`,
      lineHeight: "normal",
    },
  });

  public static readonly body1 = (_fontScale: number = 1) => ({
    fontFamily: SysFonts.fontFamily,
    fontWeight: 400,
    fontSize: `${14 * _fontScale}px`,
    lineHeight: "normal",
    "@media screen and (max-width: 600px)": {
      fontSize: `${12 * _fontScale}px`,
      lineHeight: "normal",
    },
  });

  public static readonly body2 = (_fontScale: number = 1) => ({
    fontFamily: SysFonts.fontFamily,
    fontWeight: 400,
    fontSize: `${12 * _fontScale}px`,
    lineHeight: "normal",
    "@media screen and (max-width: 600px)": {
      fontSize: `${12 * _fontScale}px`,
      lineHeight: "normal",
    },
  });

  public static readonly caption = (_fontScale: number = 1) => ({
    fontFamily: SysFonts.fontFamily,
    fontWeight: 400,
    fontSize: `${10 * _fontScale}px`,
    lineHeight: "normal",
    "@media screen and (max-width: 600px)": {
      fontSize: `${10 * _fontScale}px`,
      lineHeight: "normal",
    },
  });

  public static readonly caption2 = (_fontScale: number = 1) => ({
    fontFamily: SysFonts.fontFamily,
    fontWeight: 700,
    fontSize: `${12 * _fontScale}px`,
    lineHeight: "normal",
    "@media screen and (max-width: 600px)": {
      fontSize: `${10 * _fontScale}px`,
      lineHeight: "normal",
    },
  });

  public static readonly caption3 = (_fontScale: number = 1) => ({
    fontFamily: SysFonts.fontFamily,
    fontWeight: 600,
    fontSize: `${11 * _fontScale}px`,
    lineHeight: "normal",
    "@media screen and (max-width: 600px)": {
      fontSize: `${9 * _fontScale}px`,
      lineHeight: "normal",
    },
  });

  public static readonly getTypography = (
    _fontScale: number = 1
  ): TypographyOptions => ({
    fontFamily: SysFonts.fontFamily,
    h1: SysFonts.h1(_fontScale),
    h2: SysFonts.h2(_fontScale),
    h3: SysFonts.h3(_fontScale),
    h4: SysFonts.h4(_fontScale),
    h5: SysFonts.h5(_fontScale),
    h6: SysFonts.h6(_fontScale),
    subtitle1: SysFonts.subtitle1(_fontScale),
    subtitle2: SysFonts.subtitle2(_fontScale),
    button: SysFonts.button(_fontScale),
    body1: SysFonts.body1(_fontScale),
    body2: SysFonts.body2(_fontScale),
    caption: SysFonts.caption(_fontScale),
  });
}

export default SysFonts;
