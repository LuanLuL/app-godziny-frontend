import sysSizing from "../../sysMaterialUi/sizing/sysSizes";
import sysPalette from "../../sysMaterialUi/color/sysColors";
import { ElementType } from "react";
import {
  IconButton,
  IconButtonProps,
  Menu,
  MenuItem,
  MenuItemProps,
  MenuProps,
  styled,
} from "@mui/material";
import { sysShadows } from "../../sysMaterialUi/shadow/sysShadows";

interface IStyles {
  IconButtonBody: ElementType<IconButtonProps>;
  MenuBody: ElementType<MenuProps>;
  MenuItemBody: ElementType<MenuItemProps>;
}

const BasicMenuStyles: IStyles = {
  IconButtonBody: styled(IconButton)(() => ({
    width: sysSizing.spacingFixedXl,
    height: sysSizing.spacingFixedXl,
  })),
  MenuBody: styled(Menu)(() => ({
    ".MuiPaper-root": {
      boxShadow: sysShadows.shadowCardDefault,
      width: "max-content",
      minWidth: 0,
    },
    ".MuiMenu-list": {
      backgroundColor: `${sysPalette.common?.white}`,
    },
    ".MuiMenuItem-root": {
      padding: `${sysSizing.spacingFixedSm} ${sysSizing.spacingFixedMd}`,
    },
  })),
  MenuItemBody: styled(MenuItem)(() => ({
    width: "100%",
    whiteSpace: "nowrap",
  })),
};

export default BasicMenuStyles;
