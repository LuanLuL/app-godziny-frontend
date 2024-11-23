import sysSizing from "../../sysMaterialUi/sizing/sysSizes";
import sysPalette from "../../sysMaterialUi/colors/sysColors";

const BasicMenuStyles = {
  iconButton: {
    width: sysSizing.spacingFixedLg,
    height: sysSizing.spacingFixedLg,
  },
  menu: {
    ".MuiMenu-list": {
      backgroundColor: `${sysPalette.common?.white}`,
    },
    ".MuiMenuItem-root": {
      minWidth: "133px",
      padding: `${sysSizing.spacingFixedSm} ${sysSizing.spacingFixedMd}`,
    },
  },
};

export { BasicMenuStyles };
