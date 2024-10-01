import React, { createContext, useCallback, useMemo, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouterSwitch } from "./AppRouterSwitch";
import {
  ISysAppLayoutContext,
  ISysGeneralComponentsCommon,
} from "../typings/DefaultTypings";
import {
  IShowNotificationProps,
  ShowNotification,
} from "../ui/sysComponents/showNotification/ShowNotification";
import { useTheme, useMediaQuery } from "@mui/material";

export const SysAppLayoutContext = createContext<ISysAppLayoutContext>(
  {} as ISysAppLayoutContext
);

const defaultState: ISysGeneralComponentsCommon = { open: false };

export const AppLayout: React.FC = () => {
  const [showNotification, setShowNotification] =
    useState<IShowNotificationProps>(defaultState);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCloseNotification = useCallback((callBack?: () => void) => {
    setShowNotification(defaultState);
    callBack?.();
  }, []);

  const showNotificationHandler = useCallback(
    (props?: IShowNotificationProps) => {
      props?.onOpen?.();
      setShowNotification({
        ...showNotification,
        ...props,
        onClose: () => handleCloseNotification(props?.onClose),
        open: true,
      });
    },
    [handleCloseNotification, showNotification]
  );

  const providerValue: ISysAppLayoutContext = useMemo(
    () => ({
      showNotification: showNotificationHandler,
      closeNotification: handleCloseNotification,
      isMobile: isMobile,
    }),
    [handleCloseNotification, showNotificationHandler, isMobile]
  );

  return (
    <SysAppLayoutContext.Provider value={providerValue}>
      <Router>
        <AppRouterSwitch />
      </Router>
      <ShowNotification {...showNotification} />
    </SysAppLayoutContext.Provider>
  );
};
