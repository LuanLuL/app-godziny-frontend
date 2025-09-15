import { ElementType } from "react";
import { styled } from "@mui/material/styles";
import { Box, BoxProps } from "@mui/material";

interface IStyles {
  Container: ElementType<BoxProps>;
}

const loginPageStyles: IStyles = {
  Container: styled(Box)(({ theme }) => ({
    margin: "60px auto",
    maxWidth: "400px",
    height: "100%",
  })),
};

export default loginPageStyles;
