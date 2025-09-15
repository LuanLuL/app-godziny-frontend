import React from "react";
import {
  IShowNotificationProps,
  ShowNotification,
} from "./components/showNotification/ShowNotification";
import Styles from "./AppNotificationStackStyles";

export interface IAppNotification extends IShowNotificationProps {
  id: string;
}

interface IAppNotificationStackProps {
  notifications: IAppNotification[];
  removeNotification: (id: string) => void;
}

export const AppNotificationStack: React.FC<IAppNotificationStackProps> = ({
  notifications,
  removeNotification,
}) => {
  return (
    <Styles.StackOfCards>
      {notifications.map((notif, index) => (
        <ShowNotification
          key={notif.id}
          position={index + 1}
          open={true}
          type={notif.type}
          message={notif.message}
          duration={notif.duration}
          onClose={() => removeNotification(notif.id)}
        />
      ))}
    </Styles.StackOfCards>
  );
};
