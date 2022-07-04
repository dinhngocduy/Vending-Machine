/**
 * @format
 */
 import { AppRegistry } from 'react-native';
 import messaging from '@react-native-firebase/messaging';
 import codePush from 'react-native-code-push';
 import 'react-native-gesture-handler';
 import App from './App.tsx';
 import { name as appName } from './app.json';
 import { LogBox } from 'react-native';
 
 // console.disableYellowBox = true;
 // YellowBox.ignoreWarnings([
 //   'Require cycle:'
 // ])
 
 LogBox.ignoreAllLogs();
 
 const codePushOptions = {
   checkFrequency: codePush.CheckFrequency.ON_APP_START,
 };
 
 let RootComponent = codePush(codePushOptions)(App);
 
 if (__DEV__) {
   RootComponent = App;
 }
 

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
  
  // pushStreamService.messageReceived(remoteMessage)

  // console.log(ToastExample, 'ToastExample ======');
  // ToastExample.show(remoteMessage.data.message,remoteMessage.data.user_name, remoteMessage.data.type_sound );
});

messaging().onMessage(async (remoteMessage) => {
  console.log('Message handled in the forgeground!', remoteMessage);
  // pushStreamService.messageReceived(remoteMessage)
  // console.log(ToastExample, 'ToastExample ======');
  // ToastExample.show(remoteMessage.data.message, remoteMessage.data.user_name, remoteMessage.data.type_sound);
});

 AppRegistry.registerComponent(appName, () => RootComponent);
 