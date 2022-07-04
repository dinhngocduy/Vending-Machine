import { ENUM_TIME_FILTER } from 'enum/enum-time-filter';
import { HyperButtonComponent } from 'libraries/hyper-button/hyper-button.component';
import { PickTimeComponents } from 'libraries/pick-time-components/pick-time.componets';
import React, { forwardRef, Ref, useImperativeHandle, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import { SvgXml } from 'react-native-svg';
import colors from 'res/colors';
import svgs from 'res/svgs';
import { ModalRefProps } from './modal-ref-props';

export const ModalPickTimeComponent = forwardRef((props: any, ref: Ref<ModalRefProps>) => {
  const refModalBox = useRef<Modal>(null);
  const [expand, setExpand] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({ open, close }));

  const open = () => {
    console.log('Modal Pick Time : OPEN');
    setExpand(false);
    refModalBox.current && refModalBox.current.open();
  };

  const close = () => {
    console.log('Modal Pick Time : CLOSE');
    refModalBox.current && refModalBox.current.close();
  };

  const opendExpandModal = () => {
    setExpand(true);
  };

  const onClickItem = (item: string) => {
    props.setTime(item);
    close();
  };

  return (
    <Modal
      swipeToClose={false}
      position={'center'}
      ref={refModalBox}
      backdrop
      coverScreen
      style={[styles.modal, { width: expand ? '100%' : '40%' }]}
      animationDuration={0}
      backdropPressToClose = {true}
    >
      {expand ? (
        <View style={styles.container2}>
          <Text style={styles.title}>Chọn thời gian</Text>
          <SvgXml
            height={24}
            width={24}
            xml={svgs.icon.close}
            style={{ position: 'absolute', top: 12, right: 16 }}
            onPress={close}
          />
          <View>
            <Text style={styles.label}>
              Thời gian bắt đầu<Text style={{ color: colors.Sunset_Red }}>*</Text>
            </Text>
            <View style={{ flexDirection: 'row', marginBottom: 24 }}>
              <PickTimeComponents title="Thời gian bắt đầu" />
            </View>
          </View>
          <View>
            <Text style={styles.label}>
              Thời gian kết thúc<Text style={{ color: colors.Sunset_Red }}>*</Text>
            </Text>
            <View style={{ flexDirection: 'row', marginBottom: 24 }}>
              <PickTimeComponents title="Thời gian kết thúc" />
            </View>
          </View>
          <View style={styles.btn_wrap}>
            <HyperButtonComponent
              containerStyles={styles.btn_ctn}
              text={'Đồng ý'}
              textStyle={styles.textBtn}
            />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity style={styles.row} onPress = {() => onClickItem(ENUM_TIME_FILTER.DAY) }>
            <Text style={styles.text}>{ENUM_TIME_FILTER.DAY}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row} onPress = {() => onClickItem(ENUM_TIME_FILTER.WEEK)}>
            <Text style={styles.text}>{ENUM_TIME_FILTER.WEEK}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row} onPress = {() => onClickItem(ENUM_TIME_FILTER.MONTH)}>
            <Text style={styles.text}>{ENUM_TIME_FILTER.MONTH}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row} onPress = {() => onClickItem(ENUM_TIME_FILTER.YEAR)}>
            <Text style={styles.text}>{ENUM_TIME_FILTER.YEAR}</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.row} onPress={opendExpandModal}>
            <Text style={styles.text}>Khác</Text>
          </TouchableOpacity> */}
        </View>
      )}
    </Modal>
  );
});

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    height: 'auto',
    backgroundColor: 'transparent',
  },

  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 230,
    left: 80,
  },
  row: {
    paddingVertical: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.Midnight,
  },

  container2: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 230,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 16,
    bottom: 150,
  },
  title: {
    fontSize: 18,
    color: colors.Midnight,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: colors.Midnight,
    fontWeight: '700',
    marginBottom: 2,
  },

  btn_ctn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#00DAD4',
  },
  textBtn: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
  },
  btn_wrap: {
    // paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
});
