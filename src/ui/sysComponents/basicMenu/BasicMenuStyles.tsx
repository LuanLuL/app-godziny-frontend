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
import { sysShadows } from "../../sysMaterialUi/shadow/sysShadows";

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
    ".MuiPaper-root": {
      boxShadow: sysShadows.shadowCardDefault,
    },
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
