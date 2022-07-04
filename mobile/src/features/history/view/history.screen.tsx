import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import { ListFixBugComponent } from './components/list-fix-bug/list-fix-bug.component';
import { ListLoadGoodComponent } from './components/list-load-goods/list-load-good.component';
import { ListWithDrawMoneyComponent } from './components/list-withdraw-money/list-withdraw-money.component';
import * as screenName from '../../../routers/screen-name';
import navigationService from 'routers/navigation-service';
import colors from 'res/colors';
import { TitleBar } from 'libraries/title-bar/title-bar';
import { TypeTask } from 'enum/type-task';

export const HistoryContainer = () => {
  const [index, setIndex] = useState<number>(0);

  const gotoHistoryDetail = (item: any, type: TypeTask) => {
    navigationService.navigate(screenName.HistoryDetailScreen, { item: item, type: type });
  };

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={{ backgroundColor: colors.primaryColor, elevation: 0 }}
      labelStyle={styles.labelStyle}
      getLabelText={({ route }) => route.title}
      activeColor="#fff"
      inactiveColor="rgba(255,255,255,0.8)"
    />
  );

  const renderScene = ({ route, jumpTo }: any) => {
    switch (route.key) {
      case '1':
        return (
          <View style={styles.scene}>
            <ListLoadGoodComponent onClickItem={gotoHistoryDetail} />
          </View>
        );
      case '2':
        return (
          <View style={styles.scene}>
            <ListWithDrawMoneyComponent onClickItem={gotoHistoryDetail} />
          </View>
        );
      case '3':
        return (
          <View style={styles.scene}>
            <ListFixBugComponent onClickItem={gotoHistoryDetail} />
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      <TitleBar title="Lịch sử" />
      <View style={styles.wrapTab}>
        <TabView
          navigationState={{
            index: index,
            routes: [
              { key: '1', title: 'Nạp hàng' },
              { key: '2', title: 'Rút tiền' },
              { key: '3', title: 'Sửa lỗi' },
            ],
          }}
          onIndexChange={(i) => {
            setIndex(i);
          }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  scene: {
    flex: 1,
    backgroundColor: colors.primary_bg,
    flexDirection: 'column',
  },
  indicatorStyle: {
    backgroundColor: '#fff',
    height: 3,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: '700',
  },
  wrapTab: {
    flex: 1,
  },
});
