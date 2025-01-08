import { styled, TextField } from "@mui/material";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";

const MyTextField = styled(TextField)(({ theme }) => ({
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
      backgroundColor: "#e7e7e7",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.info.light,
  },
  "&:hover .MuiInputBase-input::placeholder": {
    color: theme.palette.common.black,
  },
  "& .MuiInputBase-input.Mui-disabled": {
    color: theme.palette.common.black,
    WebkitTextFillColor: theme.palette.common.black,
  },
}));

const SysTextFieldStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: sysSizing.base.baseFixed075,
  },
  label: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    marginBottom: sysSizing.base.baseFixed075,
  },
  errorMessageBody: {
    marginTop: sysSizing.spacingFixedXs,
  },
  errorMessageText: {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    lineHeight: "13.84px",
    letterSpacing: "0.025em",
  },
};

export { MyTextField, SysTextFieldStyles };
