import { ChooseLocationScreen } from 'features/choose-location';
import { EditProfileScreen } from 'features/edit-profile';
import { HistoryDetailScreen } from 'features/history-detail';
import { LoginScreen } from 'features/login';
import { MachineDetailScreen } from 'features/machine-detail';
import { NotificationScreen } from 'features/notification';
import { TaskDetailScreen } from 'features/task-detail';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as screenName from './screen-name';
import { BottomTab } from './tab-navigator';
const mainStack = createStackNavigator(
  {
    // [screenName.SplashScreen]: SplashScreen, // Màn hình Splash

    [screenName.LoginScreen]: LoginScreen,
    [screenName.BottomTab]: BottomTab,
    [screenName.ChooseLocationScreen]: ChooseLocationScreen,
    [screenName.MachineDetailScreen]: MachineDetailScreen,
    [screenName.TaskDetailScreen]: TaskDetailScreen,
    [screenName.HistoryDetailScreen]: HistoryDetailScreen,
    [screenName.EditProfileScreen]: EditProfileScreen,
    [screenName.NotificationScreen]: NotificationScreen,
  },
  {
    initialRouteName: screenName.LoginScreen,
    mode: 'card',
    headerMode: 'none',
  }
);
const MainNavigation = createAppContainer(mainStack);
export default MainNavigation;
