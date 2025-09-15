import { Box, BoxProps, styled, Switch, SwitchProps } from "@mui/material";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";
import { ElementType } from "react";

interface IStyles {
  MySwitch: ElementType<SwitchProps>;
  Container: ElementType<BoxProps>;
  Body: ElementType<BoxProps>;
  BoxLabel: ElementType<BoxProps>;
}

const SysToggleFieldStyles: IStyles = {
  MySwitch: styled(Switch)(({ theme }) => ({
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
  })),
  Container: styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: sysSizing.base.baseFixed075,
  })),
  Body: styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: sysSizing.spacingFixedXs,
  })),
  BoxLabel: styled(Box)(() => ({
    marginBottom: `${sysSizing.base.baseFixed1}`,
  })),
};

export default SysToggleFieldStyles;
