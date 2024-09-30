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

interface IShowNotificationProps {
  close?: () => void;
  duration?: number;
  showCloseButton?: boolean;
  showStartIcon?: boolean;
  type?: "success" | "error" | "warning" | "default";
  message?: string;
  horizontal?: "left" | "center" | "right";
  vertical?: "top" | "bottom";
}

export const ShowNotification: React.FC<IShowNotificationProps> = ({
  close,
  duration = 4000,
  horizontal = "left",
  vertical = "bottom",
  type = "default",
  showCloseButton = false,
  showStartIcon = true,
  message,
}) => {
  const [visible, setVisible] = React.useState(true);
  const [isPaused, setIsPaused] = React.useState(false);
  const remainingTimeRef = React.useRef(duration);
  const timerRef = React.useRef<number | null>(null);

  const startTimer = React.useCallback(() => {
    if (timerRef.current !== null) return;

    timerRef.current = window.setTimeout(() => {
      setVisible(false);
      close && close();
    }, remainingTimeRef.current);
  }, [close]);

  const pauseTimer = React.useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    !isPaused && startTimer();
    return () => pauseTimer();
  }, [isPaused, duration, startTimer, pauseTimer]);

  const handleMouseEnter = React.useCallback(() => {
    setIsPaused(true);
    pauseTimer();
  }, [pauseTimer]);

  const handleMouseLeave = React.useCallback(() => {
    setIsPaused(false);
    startTimer();
  }, [startTimer]);

  if (!visible) return null;

  return (
    <Snackbar
      open={visible}
      onClose={() => {
        setVisible(false);
        close && close();
      }}
      anchorOrigin={{
        vertical: vertical,
        horizontal: horizontal,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ShowNotificationContainer
        type={type}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ShowNotificationBody>
          {showStartIcon &&
            {
              success: <CheckRoundedIcon />,
              error: <ErrorOutlineRoundedIcon />,
              warning: <WarningAmberRoundedIcon />,
              default: <NotificationsNoneRoundedIcon />,
            }[type]}
          <MyTooltip
            disableFocusListener
            title={message}
            customWidth={360}
            placement="top-start"
          >
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
          </MyTooltip>
          {showCloseButton && (
            <IconButton
              onClick={() => {
                setVisible(false);
                close && close();
              }}
            >
              <CloseRoundedIcon />
            </IconButton>
          )}
        </ShowNotificationBody>
      </ShowNotificationContainer>
    </Snackbar>
  );
};
