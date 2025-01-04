import { styled, Switch } from "@mui/material";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";

const MySwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-track": {
    backgroundColor: theme.palette.common.black,
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: theme.palette.primary.main,
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: theme.palette.primary.contrastText,
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track + .MuiSwitch-switchBase.Mui-disabled":
    {
      color: theme.palette.info.light,
    },
  "& .MuiSwitch-switchBase.Mui-disabled": {
    color: theme.palette.info.light,
  },
  "& .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track": {
    backgroundColor: theme.palette.info.light,
  },
}));

const SysToggleFieldStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: sysSizing.base.baseFixed075,
  },
  body: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: sysSizing.spacingFixedXs,
  },
  boxLabel: {
    marginBottom: `${sysSizing.base.baseFixed1}`,
  },
  label: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
};

export { MySwitch, SysToggleFieldStyles };
