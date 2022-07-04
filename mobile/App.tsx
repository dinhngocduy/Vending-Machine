import React, { useEffect, useState } from 'react';
import { ReactElement } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { HomeScreen } from 'features/home';
import { LoginScreen } from 'features/login';
import { RootComponent } from 'features/root/view/root-component';
import MainNavigation from 'routers/main-navigation';
import NavigationService from 'routers/navigation-service';
import EventBus, { EventBusType, EventBusName } from '../vending-core/common/event-bus';
import { Subscription } from 'rxjs';
import navigationService from 'routers/navigation-service';
import * as screenName from './src/routers/screen-name';
import messaging, { firebase } from '@react-native-firebase/messaging';
import * as screenname from './src/routers/screen-name';

function App(): ReactElement {
  const subscriptions = new Subscription();

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
        console.log('CATCH EVENT BUS APP : ', res);

        const payload = res?.payload;
        switch (res?.type) {
          case EventBusName.REDIRECT_APP:
            // redirectApp();
            navigationService.reset(screenName.BottomTab);
            break;
          case EventBusName.REDIRECT_SSO:
            navigationService.reset(screenName.LoginScreen);
            break;
        }
      })
    );
  };

  useEffect(() => {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log('Notification caused app to open from background state:' + remoteMessage);
      navigationService.navigate(screenName.NotificationScreen);

      // chuyển đến màn hình chi tiết chat khi bấm vào thông báo của hệ thống
      //  this.clickNotification(remoteMessage, userinfo);

      // navigation.navigate(remoteMessage.data.type);
    });
    messaging().onMessage(async (remoteMessage) => {
      console.log('Message handled in the forgeground!', remoteMessage);
      EventBus.getInstance().post({
        type: EventBusName.NEW_NOTIFICATION,
        payload: remoteMessage.data
      })
      // pushStreamService.messageReceived(remoteMessage)
      // console.log(ToastExample, 'ToastExample ======');
      // ToastExample.show(remoteMessage.data.message, remoteMessage.data.user_name, remoteMessage.data.type_sound);
    });
    

    // Check whether an initial notification is available
    //  messaging()
    //    .getInitialNotification()
    //    .then((remoteMessage) => {
    //      // if (remoteMessage) {
    //     console.log('Notification caused app to open from quit state:' + remoteMessage);
    //     //  this.clickNotification(remoteMessage, userinfo);
    //      const chatInfo = HyperUtils.parseVideoCallNotifi(remoteMessage?.data);
    //      console.log('VIDEO CALL NOTIFI PARSE : ' + chatInfo);

    //      if (
    //        remoteMessage?.data?.messageType === KindOfMsg.VIDEO_CALL &&
    //        remoteMessage?.data?.statusVideoCall === ENUM_TYPE_STATUS_VIDEO_CALL.CALL_AWAY_CALL_VIDEO
    //      ) {
    //        setTimeout(() => {
    //          NavigationService.navigate(IncomingCallScreen, {
    //            type: KindOfMsg.TYPE_VIDEO_CALL_INCOMING,
    //            chatInfo: chatInfo,
    //            isCall: false,
    //            voiceCall: chatInfo?.isVoice,
    //          });
    //        }, 1000);
    //      }

    // chuyển đến màn hình chi tiết chat khi bấm vào thông báo của hệ thống
    // }
    // setLoading(false);
    //  });
  }, []);

  return (
    <Provider store={store}>
      <RootComponent>
        <MainNavigation
          ref={(navigatorRef) => NavigationService.setTopLevelNavigator(navigatorRef)}
        />
      </RootComponent>
    </Provider>
  );
}

export default App;
