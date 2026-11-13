import { Box, BoxProps, keyframes, styled } from "@mui/material";
import { ElementType } from "react";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";

interface ILoading extends BoxProps {
  size: "small" | "medium" | "large";
}

interface IConfigLoading {
  largura: string;
  altura: string;
  dimension: string;
  borderWidth: string;
}

const sizeMap: Record<"small" | "medium" | "large", IConfigLoading> = {
  small: {
    largura: "120px",
    altura: "108px",
    dimension: "25px",
    borderWidth: "3px",
  },
  medium: {
    largura: "160px",
    altura: "144px",
    dimension: "50px",
    borderWidth: "5px",
  },
  large: {
    largura: "200px",
    altura: "180px",
    dimension: "84px",
    borderWidth: sysSizing.spacingFixedSm,
  },
};

const spin = keyframes`
  from {
    transform: rotate(-360deg);
  }
`;

interface IStyles {
  Container: ElementType<BoxProps>;
  Content: ElementType<ILoading>;
  Loading: ElementType<ILoading>;
  LoadingOverlay: ElementType<BoxProps>;
}

const SysLoadingStyles: IStyles = {
  Container: styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  })),
  Content: styled(Box)<ILoading>(({ theme, size }) => {
    const { largura, altura } = sizeMap[size];

    return {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: sysSizing.radiusSm,
      backgroundColor: theme.palette.background?.paper,
      gap: sysSizing.base.baseFixed075,
      width: largura,
      height: altura,
    };
  }),
  Loading: styled(Box)<ILoading>(({ theme, size }) => {
    const { dimension, borderWidth } = sizeMap[size];

    return {
      width: dimension,
      height: dimension,
      border: `5px solid ${theme.palette.primary.contrastText}`,
      borderWidth: borderWidth,
      borderRadius: "50%",
      borderTopColor: theme.palette.primary.main,
      animation: `${spin} linear infinite 1s`,
    };
  }),
  LoadingOverlay: styled(Box)(({ theme }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    zIndex: theme.zIndex.modal + 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })),
};

export default SysLoadingStyles;
