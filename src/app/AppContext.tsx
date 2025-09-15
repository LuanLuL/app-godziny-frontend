import { createContext } from "react";
import { IShowNotificationProps } from "../ui/layout/appNotificationStack/components/showNotification/ShowNotification";
import { IShowDialogProps } from "../ui/sysComponents/showDialog/ShowDialog";

interface IAppContext {
  showNotification: (options: Omit<IShowNotificationProps, "position">) => void;
  showDialog: (options?: IShowDialogProps) => void;
  closeDialog: (
    event?: object,
    reason?: "backdropClick" | "escapeKeyDown",
    callBack?: (
      event?: object,
      reason?: "backdropClick" | "escapeKeyDown"
    ) => void
  ) => void;
  isMobile: boolean;
}

const UseAppContext = createContext<IAppContext>({} as IAppContext);

export default UseAppContext;

export type { IAppContext };
