import {
  Box,
  BoxProps,
  styled,
  TextField,
  TextFieldProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { ElementType } from "react";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";

interface IStyles {
  Container: ElementType<BoxProps>;
  MyTextField: ElementType<TextFieldProps>;
  ErrorMessageBody: ElementType<BoxProps>;
  ErrorMessageText: ElementType<TypographyProps>;
  ShowNumberCaractersBody: ElementType<BoxProps>;
}

const SysTextFieldStyles: IStyles = {
  Container: styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: sysSizing.base.baseFixed075,
  })),
  MyTextField: styled(TextField)(({ theme }) => ({
    width: "100%",
    "& .MuiInputBase-root": {
      borderRadius: sysSizing.radiusXs,
      maxHeight: "40px",
      border: "none",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: theme.palette.info.light,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-error fieldset": {
        borderColor: theme.palette.error.main,
      },
      "&.Mui-error:hover fieldset": {
        borderColor: theme.palette.error.main,
      },
      "&.Mui-error.Mui-focused fieldset": {
        borderColor: theme.palette.error.main,
      },
      "&.Mui-disabled fieldset": {
        border: "none",
      },
      "&.Mui-disabled": {
        backgroundColor: theme.palette.action.disabledBackground,
      },
    },
    "& .MuiInputBase-input::placeholder": {
      color: theme.palette.info.light,
    },
    "&:hover .MuiInputBase-input::placeholder": {
      color: theme.palette.common.black,
    },
    "& .MuiInputBase-input.Mui-disabled": {
      color: theme.palette.text.disabled,
      WebkitTextFillColor: theme.palette.text.disabled,
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
  ShowNumberCaractersBody: styled(Box)(() => ({
    minWidth: "28px",
    textAlign: "right",
    color: "rgba(0,0,0, 0.72)",
  })),
};

export default SysTextFieldStyles;
