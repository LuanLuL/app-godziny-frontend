import sysSizing from "../../sysMaterialUi/sizing/sysSizes";

const BasicMenuStyles = {
  iconButton: {
    width: sysSizing.spacingFixedLg,
    height: sysSizing.spacingFixedLg,
  },
  menu: {
    "& .css-oeilvz-MuiButtonBase-root-MuiMenuItem-root": {
      backgroundColor: "#ffffff",
    },
    "& .css-8oiess-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
      backgroundColor: "#ffffff",
      minWidth: "133px",
    },
    "& .css-8oiess-MuiPaper-root-MuiPopover-paper-MuiMenu-paper::-webkit-scrollbar":
      {
        width: "4px",
        height: "4px",
      },
  },
};

export { BasicMenuStyles };
