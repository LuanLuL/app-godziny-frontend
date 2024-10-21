import {
  Box,
  styled
} from "@mui/material";
import sysSizing from "../../sysMaterialUi/sizing/sysSizes";

interface IContainer {
  type: "success" | "error" | "warning" | "default";
}

const ShowNotificationContainer = styled(Box)<IContainer>(
  ({ theme, type }) => ({
    minWidth: "370px",
    maxWidth: "560px",
    minHeight: "56px",
    borderRadius: `${sysSizing.spacingFixedSm}`,
    overflow: "hidden",
    padding: `${sysSizing.spacingFixedMd}`,

    [theme.breakpoints.down("md")]: {
      maxWidth: "420px",
    },

    [theme.breakpoints.down("sm")]: {
      minWidth: "200px",
      maxWidth: "280px",
    },

    "& .MuiSvgIcon-root": {
      width: `${sysSizing.spacingFixedLg}`,
      height: `${sysSizing.spacingFixedLg}`,
    },

    ...(type === "success" && {
      backgroundColor: theme.palette.success.light,
      color: theme.palette.text.primary,
      "& .MuiSvgIcon-root": {
        color: theme.palette.success.dark,
      },
    }),
    ...(type === "error" && {
      backgroundColor: theme.palette.error.light,
      color: theme.palette.text.primary,
      "& .MuiSvgIcon-root": {
        color: theme.palette.error.dark,
      },
    }),
    ...(type === "warning" && {
      backgroundColor: theme.palette.warning.light,
      color: theme.palette.text.primary,
      "& .MuiSvgIcon-root": {
        color: theme.palette.warning.dark,
      },
    }),
    ...(type === "default" && {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.primary,
      "& .MuiSvgIcon-root": {
        color: theme.palette.primary.dark,
      },
    }),
  })
);

const ShowNotificationBody = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${sysSizing.componentsButtonSmallPy} ${sysSizing.componentsButtonGap}`,
  flexGrow: 1,
  flexShrink: 0,
  gap: theme.spacing(1),
}));

const ShowNotificationStyles = {
  reticenciasDepoisDeUmaLinha: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
};

export {
  ShowNotificationContainer,
  ShowNotificationBody,
  ShowNotificationStyles,
};
