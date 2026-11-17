import { Box, BoxProps, styled } from "@mui/material";
import { ElementType } from "react";
import sysSizing from "../../sysMaterialUi/sizing/sysSizes";

interface IStyles {
  Container: ElementType<BoxProps>;
  TextContainer: ElementType<BoxProps>;
}

const SysEmptyStateStyle: IStyles = {
  Container: styled(Box)(() => ({
    height: "100%",
    width: "312px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: sysSizing.spacingFixedSm,
    padding: sysSizing.spacingFixedSm,
  })),
  TextContainer: styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: sysSizing.spacingFixedXs,
  })),
};

export default SysEmptyStateStyle;
