import { ListItemText, ListItemTextProps, styled } from "@mui/material";
import { ElementType } from "react";

interface IStyles {
  EllipsisListItemText: ElementType<ListItemTextProps>;
}

const appSideBarStyles: IStyles = {
  EllipsisListItemText: styled(ListItemText)(() => ({
    margin: 0,
    ".MuiListItemText-primary": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  })),
};

export default appSideBarStyles;
