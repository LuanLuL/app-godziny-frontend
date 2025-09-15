import React, { useEffect } from "react";
import {
  IconButton,
  Snackbar,
  SnackbarCloseReason,
  Typography,
} from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  ShowNotificationContainer,
  ShowNotificationBody,
  ShowNotificationStyles,
} from "./ShowNotificationStyles";
import { MyTooltip } from "../../../../sysComponents/myTooltip/MyTooltip";
import SysAppContext from "../../../../../app/AppContext";

export interface IShowNotificationProps {
  position?: number;
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  duration?: number;
  type?: "success" | "error" | "warning" | "default";
  message?: string;
}

export const ShowNotification: React.FC<IShowNotificationProps> = ({
  position = 0,
  open = false,
  onOpen,
  onClose,
  duration = 6000,
  type = "default",
  message,
}) => {
  const { isMobile } = React.useContext(SysAppContext);

  useEffect(() => {
    if (open && onOpen) {
      onOpen();
    }
  }, [open, onOpen]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    onClose && onClose();
  };

  if (!open) return null;

  return (
    <MyTooltip disableFocusListener title={message} customWidth={360} arrow>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={duration}
        disableWindowBlurListener={true}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          "&.MuiSnackbar-root": { bottom: `${88 * position}px` },
        }}
      >
        <ShowNotificationContainer type={type}>
          <ShowNotificationBody>
            {
              {
                success: <CheckRoundedIcon />,
                error: <ErrorOutlineRoundedIcon />,
                warning: <WarningAmberRoundedIcon />,
                default: <NotificationsNoneRoundedIcon />,
              }[type]
            }

            <Typography
              variant="body1"
              color="textPrimary"
              sx={{
                flexGrow: 1,
                ...ShowNotificationStyles.reticenciasDepoisDeUmaLinha,
              }}
            >
              {message}
            </Typography>
            {!isMobile && (
              <IconButton onClick={onClose}>
                <CloseRoundedIcon />
              </IconButton>
            )}
          </ShowNotificationBody>
        </ShowNotificationContainer>
      </Snackbar>
    </MyTooltip>
  );
};
