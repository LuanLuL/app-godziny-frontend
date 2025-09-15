import {
  Box,
  BoxProps,
  styled,
  Theme,
  Typography,
  TypographyProps,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ElementType } from "react";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";

interface IStyles {
  Container: ElementType<BoxProps>;
  MyDatePicker: ElementType<any>;
  ErrorMessageBody: ElementType<BoxProps>;
  ErrorMessageText: ElementType<TypographyProps>;
}

const SysDatePickerStyles: IStyles = {
  Container: styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: sysSizing.base.baseFixed075,
  })),
  MyDatePicker: styled(DatePicker)(() => ({
    width: "100%",
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
};

const datePickerInputPropsSx = (theme: Theme) => ({
  borderRadius: sysSizing.radiusXs,
  maxHeight: "40px",
  maxWidth: "100%",
  border: "none",
  color: theme.palette.info.light,
  "&:hover": {
    color: theme.palette.common.black,
  },
  "&:not(.Mui-disabled):not(.Mui-error):not(.Mui-focused):hover fieldset": {
    borderColor: theme.palette.info.light,
  },
  "&.Mui-focused:not(.Mui-error) fieldset": {
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
  "&.Mui-disabled": {
    backgroundColor: theme.palette.action.disabledBackground,
  },
  "&.Mui-disabled fieldset": {
    border: "none",
  },
  "&.Mui-disabled .MuiSvgIcon-root": {
    color: theme.palette.text.disabled,
  },
});

const datePickerPopperSx = (theme: Theme) => ({
  "& .MuiPaper-root": {
    backgroundColor: theme.palette.common.white,
  },
  "& .MuiDateCalendar-root": {
    backgroundColor: theme.palette.common.white,
  },
});

export default SysDatePickerStyles;
export { datePickerInputPropsSx, datePickerPopperSx };
