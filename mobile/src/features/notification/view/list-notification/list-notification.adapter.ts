import { INotifcation, NOTICATION_TYPE } from './../../../../enum/notification';
import { useState, useEffect } from 'react';
import { NotificationAdapter } from '../../../../../../vending-core/model-notification/notification.adapter';
import { Subscription } from 'rxjs';
import EventBus, {
  EventBusType,
  EventBusName,
} from '../../../../../../vending-core/common/event-bus';
export const ListNotificationAdapter = () => {
  const subscriptions = new Subscription();
  const { getListNotification, readNotification, temperatureOverheat } = NotificationAdapter();

  const [page, setPage] = useState<number>(1);
  const [listNotification, setListNotification] = useState<INotifcation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    getDataListNotification();
  }, [page]);

  const loadMore = () => {
    if (page < totalPage - 1) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    EventBusSubCription();
  }, []);

  useEffect(() => {
    return () => {
      subscriptions.unsubscribe();
    };
  }, []);

  // Eventbus Subcription
  const EventBusSubCription = () => {
    subscriptions.add(
      EventBus.getInstance().events.subscribe((res: EventBusType) => {
        const payload = res?.payload;
        switch (res?.type) {
          case EventBusName.NEW_NOTIFICATION:
            setListNotification((olddata) => [payload, ...olddata]);
            break;

          // const userInfo = JSON.parse( );
        }
      })
    );
  };

  const getDataListNotification = async () => {
    setLoading(true);
    const data = {
      page: page - 1,
      pageSize: 10,
    };
    const response = await getListNotification(data);
    console.log('GET LIST NOTIFICATION : ', response);
    if (response.data) {
      setListNotification((olddata) => [...olddata, ...response.data]);
      setTotalPage(response.numberOfPages);
      setLoading(false);
    }
  };

  const onReadNotification = (notifi: INotifcation) => {
    console.log('LIST NOTIFICATION ADAPTER: ', notifi.id);
    const data = {
      notificationId: notifi.id,
    };
    readNotification(data).then((res) => {
      console.log('READ NOTIFICATION :', res);
      setListNotification((olddata) => {
        return olddata.map((item: INotifcation) => {
          if (item.id === notifi.id && !item.read) {
            const newData: INotifcation = {
              id: item.id,
              title: item.title,
              description: item.description,
              type: item.type,
              read: true,
              createdDate: item.createdDate,
            };
            EventBus.getInstance().post({
              type: EventBusName.READ_NOTIFICATION,
            });
            return newData;
          }
          return item;
        });
      });
    });

    if (notifi.title === NOTICATION_TYPE.ALERT_TEMPERATURE) {
      temperatureOverheat();
    }
  };

  return {
    page,
    listNotification,
    loading,
    loadMore,
    onReadNotification,
  };
};
