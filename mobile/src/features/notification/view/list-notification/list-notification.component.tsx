import { INotifcation } from 'enum/notification';
import BottomLoadingIndicator from 'libraries/loading/bottom-loading-indicator';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Svg, { SvgXml } from 'react-native-svg';
import svgs from 'res/svgs';
import { ListNotificationItemComponent } from './list-notification-item/list-notification-item.component';
import { ListNotificationAdapter } from './list-notification.adapter';

export const ListNotificationComponent = () => {
  const { listNotification , loadMore, loading, onReadNotification} = ListNotificationAdapter();

  const renderItem = (item: INotifcation) => {
    return <ListNotificationItemComponent item={item} onPress = {onReadNotification} />;
  };

  const renderBlank = () => {
    return (
      <View style={styles.no_data}>
        <SvgXml width={200} xml={svgs.no_data_notification} />
      </View>
    );
  };

  const renderFooter = () => {
    if (loading) {
      return <BottomLoadingIndicator />;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      {listNotification.length > 0 ? (
        <FlatList
          data={listNotification}
          renderItem={({ item }) => renderItem(item)}
          style={{ flex: 1 }}
          onEndReached = {loadMore}
          onEndReachedThreshold = {0.5}
          ListFooterComponent = {renderFooter}
        />
      ) : (
        <>{renderBlank()}</>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  no_data: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
