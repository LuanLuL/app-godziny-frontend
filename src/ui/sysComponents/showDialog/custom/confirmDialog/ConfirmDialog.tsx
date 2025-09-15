import React from "react";
import { DialogTitle } from "@mui/material";
import { SysButton } from "../../../sysForm/sysButton/SysButton";
import { IShowDialogProps } from "../../ShowDialog";
import Styles, { ConfirmDialogBoxStyles } from "./ConfirmDialogStyles";

interface IConfirmDialogProps extends IShowDialogProps {
  showDialog: (options?: IShowDialogProps) => void;
  closeDialog: (
    event?: {},
    reason?: "backdropClick" | "escapeKeyDown",
    callBack?: (event?: {}, reason?: "backdropClick" | "escapeKeyDown") => void
  ) => void;
  onConfirm?: () => void;
}

function ConfirmDialog({
  showDialog,
  closeDialog,
  onConfirm,
  title,
  ...props
}: IConfirmDialogProps) {
  showDialog({
    ...props,
    sx: ConfirmDialogBoxStyles,
    header: (
      <DialogTitle variant="subtitle1" sx={{ padding: 0 }}>
        {title}
      </DialogTitle>
    ),
    actions: (
      <Styles.Actions>
        <SysButton
          onClick={closeDialog}
          mode={"secondary"}
          label={"Cancelar"}
        />
        <SysButton
          onClick={() => {
            onConfirm?.();
            closeDialog();
          }}
          mode={"primary"}
          label={"Confirmar"}
        />
      </Styles.Actions>
    ),
  });
}

export default ConfirmDialog;
