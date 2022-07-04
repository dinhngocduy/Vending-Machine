import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { HomeHeaderComponents } from './components/home-header/home-header.components';
import colors from '../../../res/colors';
import { ReportChartComponent } from './components/report-chart/report-chart.component';
import { ScrollView } from 'react-native-gesture-handler';
import { TypeChart } from 'enum/type-chart';
import { PickTimeComponents } from 'libraries/pick-time-components/pick-time.componets';
import { ModalPickTimeComponent } from 'libraries/modal-pick-time/modal-pick-time.component';
import { ModalRefProps } from 'libraries/modal-pick-time/modal-ref-props';
import { HomeAdapter } from '../../../../../vending-core/model-home/home.adapter';
import asyncStorageHelpers, {
  StorageKey,
} from '../../../../../vending-core/common/helpers/async-storage-helpers';
import { ENUM_TIME_FILTER } from 'enum/enum-time-filter';

export const HomeContainer = (props: any) => {
  const modalRef = useRef<ModalRefProps>(null);

  const [timeFilter, setTimeFilter] = useState<string>(ENUM_TIME_FILTER.DAY);

  useEffect(() => {
    console.log('CHANGE TIME FILTER : ', timeFilter);
  }, [timeFilter]);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const value = await asyncStorageHelpers.get(StorageKey.DEVICE_INFO);
    console.log('test_get_user_info: ', value);
  };

  const openPickTimeModal = () => {
    console.log('HOME SCREEN : OPEN PICK TIME MODAL');
    modalRef.current?.open();
  };

  return (
    <View style={styles.container}>
      <HomeHeaderComponents userName={'Nguyễn Ngọc Minh'} />
      <View style={styles.pick_time_ctn}>
        <PickTimeComponents title={timeFilter} onPress={openPickTimeModal} />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ReportChartComponent
          type={TypeChart.LineChart}
          title="Thống kê doanh thu bán hàng"
          time={timeFilter}
        />

        <ReportChartComponent
          type={TypeChart.BarChart}
          title="Thống kê mặt hàng bán được"
          time={timeFilter}
        />
        <ReportChartComponent
          type={TypeChart.PieChart}
          title="Tổng số sản phẩm bán ra"
          time={timeFilter}
        />
        {/* <ReportChartComponent title="Blank Chart" /> */}
      </ScrollView>
      <ModalPickTimeComponent ref={modalRef} setTime={setTimeFilter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_bg,
    flexDirection: 'column',
  },
  pick_time_ctn: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
  },
});
