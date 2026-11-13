import { Box, BoxProps, styled } from "@mui/material";
import { ElementType } from "react";
import sysSizing from "../../sysMaterialUi/sizing/sysSizes";
import { sysShadows } from "../../sysMaterialUi/shadow/sysShadows";

interface IStyles {
  Table: ElementType<BoxProps>;
  Head: ElementType<BoxProps>;
  Line: ElementType<BoxProps>;
  Column: ElementType<BoxProps>;
  LoadingContainer: ElementType<BoxProps>;
}

const ComplexTableStyles: IStyles = {
  Table: styled(Box)(({ theme }) => ({
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: theme.palette.common.white,
    borderRadius: sysSizing.radiusSm,
    boxShadow: sysShadows.shadow1,
    color: theme.palette.sysText?.body,
    overflowX: "auto",
    paddingBottom: sysSizing.spacingFixedSm,
  })),
  Head: styled(Box)(({ theme }) => ({
    width: "100%",
    display: "grid",
    alignItems: "center",
    boxSizing: "border-box",
    minHeight: "56px",
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    padding: `0px ${sysSizing.spacingFixedMd}`,
    columnGap: sysSizing.spacingFixedLg,
  })),
  Line: styled(Box)(({ theme }) => ({
    width: "100%",
    display: "grid",
    alignItems: "center",
    boxSizing: "border-box",
    minHeight: "56px",
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: `0px ${sysSizing.spacingFixedMd}`,
    columnGap: sysSizing.spacingFixedLg,
    "&:hover": {
      backgroundColor: theme.palette.action.disabledBackground,
    },
  })),
  Column: styled(Box)(() => ({
    minWidth: 0,
    padding: 0,
    margin: 0,
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  })),
  LoadingContainer: styled(Box)(() => ({
    width: "100%",
    height: "300px",
  })),
};

export default ComplexTableStyles;
