import { ElementType } from "react";
import sysSizing from "../../../../sysMaterialUi/sizing/sysSizes";
import {
  DialogActions,
  DialogActionsProps,
  styled,
  Theme,
} from "@mui/material";

interface IStyles {
  Actions: ElementType<DialogActionsProps>;
}

export const DeleteDialogBoxStyles = {
  display: "flex",
  flexDirection: "column",
  borderRadius: sysSizing.base.baseFixed1,
  padding: sysSizing.spacingRemLg,
  gap: sysSizing.spacingRemLg,
  backgroundColor: (theme: Theme) => theme.palette.background.default,
};

const DeleteDialogStyles: IStyles = {
  Actions: styled(DialogActions)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: sysSizing.spacingRemMd,
    padding: 0,
  })),
};

export default DeleteDialogStyles;
