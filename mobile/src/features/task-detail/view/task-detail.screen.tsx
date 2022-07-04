import { TitleBar } from 'libraries/title-bar/title-bar';
import React from 'react';
import { View } from 'react-native';
import { TaskDetailContentComponent } from './components/task-detail-content/task-detail-content.component';
import { TaskDetailHeaderComponent } from './components/task-detail-header/task-detail-header.component';

export const TaskDetailContainer = (props: any) => {
  const task = props.navigation.getParam('task');
  console.log('TASK DETAIL SCREEN :', task);

  return (
    <View style={{ backgroundColor: '#F5F8FB', flex: 1 }}>
      <TitleBar title="Chi tiết công việc" back={true} />
      <TaskDetailHeaderComponent task={task} />
      <TaskDetailContentComponent task={task} />
    </View>
  );
};
