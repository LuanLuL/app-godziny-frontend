import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    caption2?: React.CSSProperties;
    caption3?: React.CSSProperties;
  }

  interface Palette {
    sysText: {
      auxiliary?: string;
      auxiliary2?: string;
      base?: string;
      baseContrast?: string;
      body?: string;
      disabled?: string;
      title?: string;
    };
  }

  interface PaletteOptions {
    sysText?: Partial<Palette["sysText"]>;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    caption2: true;
    caption3: true;
  }
}
