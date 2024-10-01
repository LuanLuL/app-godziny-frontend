import { IShowNotificationProps } from "../ui/sysComponents/showNotification/ShowNotification";

export interface ISysGeneralComponentsCommon {
  open?: boolean;
  onOpen?: (...props: any) => void;
  onClose?: (...props: any) => void;
  duration?: number;
}

export interface ISysAppLayoutContext {
  showNotification: (options?: IShowNotificationProps) => void;
  closeNotification: (callBack?: () => void) => void;
  isMobile: boolean;
}
