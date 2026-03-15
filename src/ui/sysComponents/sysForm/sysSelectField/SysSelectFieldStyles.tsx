import {
  Box,
  BoxProps,
  styled,
  Select,
  SelectProps,
  Typography,
  TypographyProps,
  SxProps,
  Theme,
  alpha,
} from "@mui/material";
import { ElementType } from "react";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";
import { sysShadows } from "../../../sysMaterialUi/shadow/sysShadows";

interface IStyles {
  Container: ElementType<BoxProps>;
  RenderValue: ElementType<BoxProps>;
  MySelectField: ElementType<SelectProps>;
  ErrorMessageBody: ElementType<BoxProps>;
  ErrorMessageText: ElementType<TypographyProps>;
  InputSelectedOption: ElementType<BoxProps>;
  TextInputSelectedOptionContainer: ElementType<BoxProps>;
  TextInputSelectedOption: ElementType<TypographyProps>;
  CounterText: ElementType<TypographyProps>;
  select: SxProps<Theme>;
  startAdornment: SxProps<Theme>;
  endAdornment: SxProps<Theme>;
}

const SysSelectFieldStyles: IStyles = {
  Container: styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: sysSizing.base.baseFixed075,
  })),
  RenderValue: styled(Box)(() => ({
    display: "flex",
    width: "100%",
  })),
  MySelectField: styled(Select)(({ theme }) => ({
    width: "100%",
    minWidth: 100,
    height: "40px",
    "& .MuiSelect-select": {
      height: "40px",
      display: "flex",
      alignItems: "center",
      borderRadius: sysSizing.radiusXs,
      color: theme.palette.text.secondary,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.info.light,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.error.main,
    },
    "&.Mui-error:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.error.main,
    },
    "&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.error.main,
    },
    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&.Mui-disabled": {
      backgroundColor: theme.palette.action.disabledBackground,
    },
    "& .MuiSelect-select.Mui-disabled": {
      color: theme.palette.text.disabled,
      WebkitTextFillColor: theme.palette.text.disabled,
    },
    "& .MuiSelect-select:hover": {
      color: theme.palette.info.light,
    },
  })),
  ErrorMessageBody: styled(Box)(() => ({
    marginTop: sysSizing.spacingFixedXs,
    width: "100%",
    display: "flex",
    gap: sysSizing.spacingFixedSm,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  })),
  ErrorMessageText: styled(Typography)(() => ({
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    lineHeight: "13.84px",
    letterSpacing: "0.025em",
  })),
  InputSelectedOption: styled(Box)(() => ({
    display: "flex",
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    pr: sysSizing.spacingFixedMd,
  })),
  TextInputSelectedOptionContainer: styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  })),
  TextInputSelectedOption: styled(Typography)(({ theme }) => ({
    color: theme.palette.common.black,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    flex: 1,
  })),
  CounterText: styled(Typography)(({ theme }) => ({
    color: theme.palette.common.black,
    marginLeft: sysSizing.spacingFixedXs,
    flexShrink: 0,
  })),
  select: {
    position: "relative",
    "& .MuiSelect-icon": {
      right: sysSizing.spacingRemSm,
      zIndex: 1,
    },
    "& .MuiSelect-select": {
      paddingRight: "48px !important",
      paddingLeft: "32px !important",
    },
  },
  startAdornment: {
    position: "absolute",
    left: "36px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 0,
    pointerEvents: "none",
    "& .MuiIconButton-root": {
      pointerEvents: "auto",
    },
  },
  endAdornment: {
    position: "absolute",
    right: "38px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 0,
    pointerEvents: "none",
    "& .MuiIconButton-root": {
      pointerEvents: "auto",
      marginRight: 0,
    },
  },
};

const MenuBoxPopperSx = (theme: Theme) => ({
  padding: sysSizing.spacingFixedSm,
  paddingBottom: 0,
  backgroundColor: theme.palette.common.white,
  boxShadow: sysShadows.shadowCardDefault,
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "20px",
    opacity: 1,
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "& .MuiMenu-list": {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    paddingTop: sysSizing.spacingFixedXs,
    paddingBottom: sysSizing.spacingFixedSm,
  },
  "& .MuiMenuItem-root": {
    padding: `10px ${sysSizing.spacingFixedXs} 10px ${sysSizing.spacingFixedSm}`,
    borderRadius: sysSizing.spacingFixedXs,
  },
  "& .MuiMenuItem-root.Mui-selected": {
    backgroundColor: alpha(theme.palette.common.black, 0.04),
  },
  "& .MuiMenuItem-root:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.04),
  },
  "& .MuiMenuItem-root.Mui-selected:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.04),
  },
  "& .MuiMenuItem-root.Mui-focusVisible": {
    backgroundColor: alpha(theme.palette.common.black, 0.04),
  },
});

export default SysSelectFieldStyles;
export { MenuBoxPopperSx };
