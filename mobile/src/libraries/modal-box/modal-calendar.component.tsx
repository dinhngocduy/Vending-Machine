import { DimensionHelpers } from 'helpers/dimension-helpers';
import Button, { EBtnPreset } from 'libraries/button/button';
import { ChoseCalendarComponent } from 'libraries/chose-calendar/chose-calendar.component';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modalbox';
import { translate } from 'res/languages';
import { ModalBox } from './modal-box.component';
import spacing from 'res/spacings';
import colors from 'res/colors';

interface Props {
  title: string;
}

export default class ModalCalendarComponent extends React.Component<Props> {
  refModalBox = React.createRef<ModalBox>();

  open = (): void => {
    this.refModalBox.current && this.refModalBox.current.open();
  };

  close = (): void => {
    this.refModalBox.current && this.refModalBox.current.close();
  };

  public render(): React.ReactNode {
    const { title } = this.props;
    return (
      <Modal
        swipeToClose={false}
        position={'center'}
        ref={this.refModalBox}
        backdrop
        coverScreen
        style={styles.modal}
      >
        <View style={styles.container}>
          <Text preset={'fieldLabel'} tx={title} style={styles.title} />
          <View style={{ flex: 1 }}>
            <ChoseCalendarComponent />
          </View>
          {/* <View style={styles.btnView}>
            <Button
              preset={EBtnPreset.ACTIVE}
              labelTx={'common.submit'}
              // onPress={this.onYes}
              btnStyles={styles.btn}
            /> */}
          {/* <Button
              preset={EBtnPreset.DEACTIVE}
              labelTx={noLabel}
              onPress={this.onNo}
              btnStyles={styles.btn}
            /> */}
          {/* </View> */}
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    width: '100%',
    height: 'auto',
    backgroundColor: 'transparent'
  },
  container: {
    margin: spacing.medium,
    backgroundColor: colors.background,
    borderRadius: spacing.medium,
    padding: spacing.medium
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  title: {
    padding: spacing.larger,
    textAlign: 'center'
  },
  btn: {
    minWidth: DimensionHelpers.width * 0.4
  }
});
