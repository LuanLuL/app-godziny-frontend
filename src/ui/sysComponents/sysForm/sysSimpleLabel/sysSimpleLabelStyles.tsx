import { ElementType } from "react";
import { styled } from "@mui/material/styles";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface IStyles {
  TypographyLabel: ElementType<TypographyProps>;
}

const SysSimpleLabelStyles: IStyles = {
  TypographyLabel: styled(Typography)(({ theme }) => ({
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    marginBottom: sysSizing.base.baseFixed075,
  })),
};

export default SysSimpleLabelStyles;
