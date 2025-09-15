import React from "react";
import { DialogTitle } from "@mui/material";
import Styles, { DeleteDialogBoxStyles } from "./DeleteDialogStyles";
import { IShowDialogProps } from "../../ShowDialog";
import { SysButton } from "../../../sysForm/sysButton/SysButton";

interface IDeleteDialogProps extends IShowDialogProps {
  showDialog: (options?: IShowDialogProps) => void;
  closeDialog: (
    event?: {},
    reason?: "backdropClick" | "escapeKeyDown",
    callBack?: (event?: {}, reason?: "backdropClick" | "escapeKeyDown") => void
  ) => void;
  onDeleteConfirm?: () => void;
}

function DeleteDialog({
  showDialog,
  closeDialog,
  onDeleteConfirm,
  title,
  ...props
}: IDeleteDialogProps) {
  showDialog({
    ...props,
    sx: DeleteDialogBoxStyles,
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
            onDeleteConfirm?.();
            closeDialog();
          }}
          mode={"primary"}
          label={"Excluir"}
        />
      </Styles.Actions>
    ),
  });
}

export default DeleteDialog;
