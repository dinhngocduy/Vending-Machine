import NoInternetComponent from 'libraries/no-internet-component';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import evn from 'react-native-config';
import { RootComponentProps } from '../model/root-component.props';
import RootComponentAdapter from '../model/root-component.adapter';
import { useEffect, useReducer } from 'react';
import useForceUpdate from 'libraries/hooks/use-force-update';
import { setI18nConfig } from 'res/languages';

//Test URL
const api_host = evn.REACT_API_HOST;
const socket = evn.REACT_SOCKET;

// console.log('test_evn: ', 'api_host: ',api_host, 'socket:', socket, 'ANDROID_CODE_PUSH_KEY:',ANDROID_CODE_PUSH_KEY);
setI18nConfig(); // set initial config before even rendering once

export const RootComponent = (props: RootComponentProps | any) => {
  const {} = RootComponentAdapter(props);
  // const [, forceUpdate] = useReducer([], () => []);

  //Callback
  // useEffect(() => {
  //   // Did mount
  //   console.log('test_on_didmount');
  //   setI18nConfig();
  //   RNLocalize.addEventListener('change', handleLocalizationChange);
  // }, []);

  // useEffect(() => {
  //   // Did update
  // }, [dependencies]);

  useEffect(() => {
    console.log('test_on_unmount_0');
    const handleLocalizationChange = () => {
      console.log('test_on_unmount_handleLocalizationChange');
      setI18nConfig();
      // forceUpdate();
      useForceUpdate();
    };

    RNLocalize.addEventListener('change', handleLocalizationChange);
    // Unmount
    return () => {
      console.log('test_on_unmount');
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    };
  }, []);

  // const onReceived = (notification: any) => {
  //   try {
  //     onReceived(notification?.payload?.additionalData || undefined);
  //   } catch (error) {
  //     console.log('error: ', error);
  //   }
  // };

  // const onOpened = (data: any) => {
  //   try {
  //     onOpened(data?.notification?.payload?.additionalData || undefined);
  //   } catch (error) {
  //     console.log('error: ', error);
  //   }
  // };

  // const handleLocalizationChange = () => {
  //   console.log('test_handleLocalizationChange');
  //   setI18nConfig();
  //   useForceUpdate();
  // };

  const test_version =
    'api_host: ' +
    evn.REACT_API_HOST +
    ', socket:' +
    evn.REACT_SOCKET +
    ', type_app:' +
    evn.REACT_TYPE_APP;
  return (
    <View style={styles.container}>
      {props.children}
      {/* <NoInternetComponent /> */}
      {/* <Text style={{ margin: 50 }}>{test_version}</Text> */}
      {/* <CodePushVerion /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
