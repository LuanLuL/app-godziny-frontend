import { Box, BoxProps, styled } from "@mui/material";
import { ElementType } from "react";
import sysSizing from "../../sysMaterialUi/sizing/sysSizes";

interface IStyles {
  StackOfCards: ElementType<BoxProps>;
}

const AppNotificationStackStyles: IStyles = {
  StackOfCards: styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: sysSizing.spacingFixedMd,
  })),
};

export default AppNotificationStackStyles;
