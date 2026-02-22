import sysSizing from "../../sysMaterialUi/sizing/sysSizes";
import sysPalette from "../../sysMaterialUi/color/sysColors";
import { ElementType } from "react";
import {
  IconButton,
  IconButtonProps,
  Menu,
  MenuProps,
  styled,
} from "@mui/material";

interface IStyles {
  IconButtonBody: ElementType<IconButtonProps>;
  MenuBody: ElementType<MenuProps>;
}

const BasicMenuStyles: IStyles = {
  IconButtonBody: styled(IconButton)(() => ({
    width: sysSizing.spacingFixedXl,
    height: sysSizing.spacingFixedXl,
  })),
  MenuBody: styled(Menu)(() => ({
    ".MuiMenu-list": {
      backgroundColor: `${sysPalette.common?.white}`,
    },
    ".MuiMenuItem-root": {
      minWidth: "133px",
      padding: `${sysSizing.spacingFixedSm} ${sysSizing.spacingFixedMd}`,
    },
  })),
};

export default BasicMenuStyles;
