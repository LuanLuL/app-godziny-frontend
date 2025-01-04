import { styled, TextField } from "@mui/material";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";

const MyTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-root": {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: sysSizing.radiusXs,
    maxHeight: "40px",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.palette.info.light,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.info.light,
  },
  "&:hover .MuiInputBase-input::placeholder": {
    color: theme.palette.common.black,
  },
}));

const SysTextFieldStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: sysSizing.base.baseFixed075,
    gap: sysSizing.base.baseFixed075,
    Width: "360px",
  },
  label: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
};

export { MyTextField, SysTextFieldStyles };
