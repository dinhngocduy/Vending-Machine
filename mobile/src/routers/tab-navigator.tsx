import { AccountScreen } from 'features/account';
import { HistoryScreen } from 'features/history';
import { HomeScreen } from 'features/home';
import { MachineErrorOperationScreen } from 'features/machine-error-operation';
import { MachineOperationScreen } from 'features/machine-operation';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { StyleSheet, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import colors from '../res/colors';
import svgs from '../res/svgs';

import * as screenName from './screen-name';

export const BottomTab = createMaterialBottomTabNavigator(
  {
    [screenName.HomeScreen]: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Báo cáo',
        tabBarIcon: ({ focused }) => {
          const xml = focused ? svgs.navigations.report_active : svgs.navigations.report_in_active;
          return <SvgXml xml={xml} />;
        },
        tabBarLabel: <Text style={styles.label}>Báo cáo</Text>,
      }),
    },
    [screenName.MachineOperationScreen]: {
      screen: MachineOperationScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'QL máy',
        tabBarIcon: ({ focused }) => {
          const xml = focused
            ? svgs.navigations.machine_active
            : svgs.navigations.machine_in_active;
          return <SvgXml xml={xml} />;
        },
        tabBarLabel: <Text style={styles.label}>QL máy</Text>,
      }),
    },
    [screenName.MachineErrorOperationScreen]: {
      screen: MachineErrorOperationScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Công việc',
        tabBarIcon: ({ focused }) => {
          const xml = focused
            ? svgs.navigations.machine_err_active
            : svgs.navigations.machine_err_in_active;
          return <SvgXml xml={xml} />;
        },
        tabBarLabel: <Text style={styles.label}>Công việc</Text>,
      }),
    },
    [screenName.HistoryScreen]: {
      screen: HistoryScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Lịch sử',
        tabBarIcon: ({ focused }) => {
          const xml = focused
            ? svgs.navigations.history_active
            : svgs.navigations.history_in_active;
          return <SvgXml xml={xml} />;
        },
        tabBarLabel: <Text style={styles.label}>Lịch sử</Text>,
      }),
    },
    [screenName.AccountScreen]: {
      screen: AccountScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Tài khoản',
        tabBarIcon: ({ focused }) => {
          const xml = focused ? svgs.navigations.user_active : svgs.navigations.user_in_active;
          return <SvgXml xml={xml} />;
        },
        tabBarLabel: <Text style={styles.label}>Tài khoản</Text>,
      }),
    },
  },
  {
    initialRouteName: screenName.HomeScreen,
    activeColor: colors.primaryColor,
    inactiveColor: colors.Regent_Gray,
    labeled: true,
    shifting:false,
    barStyleLight: {
      backgroundColor: '#fff',
    },
  }
);

const styles = StyleSheet.create({
  label: { fontFamily: 'pacifico', textAlign: 'center' },
});
