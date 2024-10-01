import React from "react";
import { IconButton, Snackbar, Typography } from "@mui/material";
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
import { MyTooltip } from "../myTooltip/MyTooltip";
import { SysAppLayoutContext } from "../../../app/AppLayout";

export interface IShowNotificationProps {
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  duration?: number;
  type?: "success" | "error" | "warning" | "default";
  message?: string;
}

export const ShowNotification: React.FC<IShowNotificationProps> = ({
  open = false,
  onOpen,
  onClose,
  duration = 4000,
  type = "default",
  message,
}) => {
  const { isMobile } = React.useContext(SysAppLayoutContext);
  if (!open) return null;

  return (
    <MyTooltip disableFocusListener title={message} customWidth={360} arrow>
      <Snackbar
        open={open}
        onClose={onClose}
        autoHideDuration={duration}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
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
