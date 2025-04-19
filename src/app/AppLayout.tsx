import React, { createContext, useCallback, useMemo, useState } from "react";
import {
  ISysAppLayoutContext,
  ISysGeneralComponentsCommon,
} from "../typings/DefaultTypings";
import {
  IShowNotificationProps,
  ShowNotification,
} from "../ui/sysComponents/showNotification/ShowNotification";
import { useTheme, useMediaQuery } from "@mui/material";
import { AppLayoutRefatorado } from "../ui/layout/appLayout/AppLayoutRefatorado";

export const SysAppLayoutContext = createContext<ISysAppLayoutContext>(
  {} as ISysAppLayoutContext
);

const defaultState: ISysGeneralComponentsCommon = { open: false };

export const AppLayout: React.FC = () => {
  const [showNotification, setShowNotification] =
    useState<IShowNotificationProps>(defaultState);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
      <AppLayoutRefatorado />
      <ShowNotification {...showNotification} />
    </SysAppLayoutContext.Provider>
  );
};
