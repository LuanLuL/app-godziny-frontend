import { Box, BoxProps, Container, styled } from "@mui/material";
import { ElementType } from "react";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";

interface IStyles {
  Container: ElementType<BoxProps>;
  ActionItensBody: ElementType<BoxProps>;
  BoxFlex: ElementType<BoxProps>;
  BoxTexto: ElementType<BoxProps>;
  BoxNavegacao: ElementType<BoxProps>;
}

const PaginationTableStyles: IStyles = {
  Container: styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  })),
  ActionItensBody: styled(Box)(() => ({
    height: "27px",
    display: "flex",
    alignItems: "center",
    gap: sysSizing.spacingFixedMd,
  })),
  BoxFlex: styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: sysSizing.spacingFixedSm,
  }),
  BoxTexto: styled(Box)({
    gap: "10px",
    padding: `${sysSizing.spacingFixedXs} ${sysSizing.spacingFixedSm}`,
  }),
  BoxNavegacao: styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: sysSizing.spacingFixedMd,
  }),
};

export default PaginationTableStyles;
