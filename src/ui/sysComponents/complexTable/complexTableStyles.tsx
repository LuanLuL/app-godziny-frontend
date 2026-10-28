import { Box, BoxProps, styled } from "@mui/material";
import { ElementType } from "react";
import sysSizing from "../../sysMaterialUi/sizing/sysSizes";
import { sysShadows } from "../../sysMaterialUi/shadow/sysShadows";

interface IStyles {
  Table: ElementType<BoxProps>;
  Head: ElementType<BoxProps>;
  Line: ElementType<BoxProps>;
  Column: ElementType<BoxProps>;
}

const ComplexTableStyles: IStyles = {
  Table: styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme.palette.common.white,
    borderRadius: sysSizing.radiusSm,
    boxShadow: sysShadows.shadow1,
  })),
  Head: styled(Box)(({ theme }) => ({
    width: "100%",
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    height: "56px",
  })),
  Line: styled(Box)(({ theme }) => ({
    width: "100%",
    height: "56px",
    borderBottom: `1px solid ${theme.palette.divider}`,
  })),
  Column: styled(Box)(() => ({})),
};

export default ComplexTableStyles;
