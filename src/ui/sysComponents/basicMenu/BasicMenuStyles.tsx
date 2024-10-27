import sysSizing from "../../sysMaterialUi/sizing/sysSizes";

const BasicMenuStyles = {
  iconButton: {
    width: sysSizing.spacingFixedLg,
    height: sysSizing.spacingFixedLg,
  },
  menu: {
    "& .css-1v6ch8a-MuiButtonBase-root-MuiMenuItem-root": {
      padding: "8px 16px",
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
