import { Button, styled } from "@mui/material";
import sysSizing from "../../../sysMaterialUi/sizing/sysSizes";

interface IButton {
  mode: "primary" | "secondary" | "link";
}

const SysButtonContainer = styled(Button)<IButton>(({ theme, mode }) => ({
  minWidth: "89px",
  height: "40px",
  padding: `${sysSizing.spacingFixedSm} ${sysSizing.spacingFixedLg}`,
  borderRadius: sysSizing.radiusXl,
  transition: "background-color 0.2s ease-in, color 0.2s ease-in",
  ...(mode === "primary" && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    "&.Mui-disabled": {
      cursor: "not-allowed",
      pointerEvents: "all !important",
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.common.white,
      border: `1px solid ${theme.palette.divider}`,
    },
  }),
  ...(mode === "secondary" && {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    border: `1px solid ${theme.palette.divider}`,
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
      BorderColor: "#AABED3",
    },
    "&.Mui-disabled": {
      cursor: "not-allowed",
      pointerEvents: "all !important",
      color: theme.palette.divider,
      backgroundColor: theme.palette.common.white,
    },
  }),
  ...(mode === "link" && {
    color: theme.palette.primary.main,
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "underline",
    },
  }),
}));

const SysButtonStyles = {};

export { SysButtonContainer, SysButtonStyles };
