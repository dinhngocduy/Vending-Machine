import navigationService from 'routers/navigation-service';
import * as screenName from '../../../../../routers/screen-name';
import { Subscription } from 'rxjs';
import EventBus, {
  EventBusType,
  EventBusName,
} from '../../../../../../../vending-core/common/event-bus';
import { HomeAdapter } from '../../../../../../../vending-core/model-home/home.adapter';
import { useState, useEffect } from 'react';
import { NotificationAdapter } from '../../../../../../../vending-core/model-notification/notification.adapter';

export const HomeHeaderAdapter = () => {
  const { getCountMachine } = HomeAdapter();
  const { countNotification } = NotificationAdapter();
  const subscriptions = new Subscription();

  const [countMachine, setCountMachine] = useState<any>();
  const [countNotifi, setCountNotifi] = useState<number>(0);

  useEffect(() => {
    getCountMachineOnOff();
    countNotification().then((res) => {
      setCountNotifi(res.unreadNotifications);
    });
  }, []);

  useEffect(() => {
    EventBusSubCription();
  }, []);

  useEffect(() => {
    return () => {
      subscriptions.unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log('NOTIFICATION :', countNotifi);
  }, [countNotifi]);

  // Eventbus Subcription
  const EventBusSubCription = () => {
    subscriptions.add(
      EventBus.getInstance().events.subscribe((res: EventBusType) => {
        switch (res?.type) {
          case EventBusName.NEW_NOTIFICATION:
            console.log('COUNT NOTIFICATION');
            setCountNotifi((notifi) => notifi + 1);
            break;
          case EventBusName.READ_NOTIFICATION:
            setCountNotifi((notifi) => {
              if (notifi > 0) {
                return notifi - 1;
              } else return notifi;
            });
            break;
        }
      })
    );
  };

  const getCountMachineOnOff = async () => {
    console.log('CALL COUNT MACHINE');

    const res = await getCountMachine();
    console.log('GET COUNT MACHINE : ', res);
    setCountMachine(res);
  };

  const gotoNotification = () => {
    navigationService.navigate(screenName.NotificationScreen);
  };

  return {
    countMachine,
    countNotifi,
    gotoNotification,
  };
};
