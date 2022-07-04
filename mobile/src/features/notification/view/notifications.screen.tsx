import { TitleBar } from 'libraries/title-bar/title-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListNotificationComponent } from './list-notification/list-notification.component';

export const NotificationContianer = () => {
  return (
    <View style={styles.container}>
      <TitleBar title="Thông báo" back={true} />
      <ListNotificationComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
});
