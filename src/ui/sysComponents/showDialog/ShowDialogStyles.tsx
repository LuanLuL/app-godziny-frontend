import {
  DialogContent,
  DialogTitle,
  styled,
  DialogTitleProps,
  DialogContentProps,
} from "@mui/material";
import { ElementType } from "react";
import sysSizing from "../../sysMaterialUi/sizing/sysSizes";

interface IStyles {
  DialogTitleStyled: ElementType<DialogTitleProps>;
  DialogContentStyled: ElementType<DialogContentProps>;
}

const ShowDialogStyles: IStyles = {
  DialogTitleStyled: styled(DialogTitle)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: sysSizing.spacingRemMd,
    padding: `${sysSizing.spacingFixedLg} ${sysSizing.spacingFixedLg} 0 ${sysSizing.spacingFixedLg}`,
    gap: sysSizing.spacingRemMd,
    "& .MuiSvgIcon-root": {
      fontSize: "2.2rem",
    },
  })),
  DialogContentStyled: styled(DialogContent)(({ theme }) => ({
    padding: 0,
    color: theme.palette.text.primary,
    overflowY: "hidden",
  })),
};

export default ShowDialogStyles;
