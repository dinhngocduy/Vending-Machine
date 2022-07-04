import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ModalBox } from './modal-box.component';
import Button, { EBtnPreset } from 'libraries/button/button';
import { DimensionHelpers } from 'helpers/dimension-helpers';
import Modal, { ModalProps as BaseModalProps } from 'react-native-modalbox';
import colors from 'res/colors';
import spacing from 'res/spacings';

interface IProps extends BaseModalProps {
  /**
   * Title: Tiêu đề thông báo
   */
  title: string;
  /**
   * labelYes: string
   */
  yesLabel?: string;
  /**
   * onYes: Function đồng ý
   */
  onYes?: () => void;
  /**
   * labelNo: string
   */
  noLabel?: string;
  /**
   * onNo: Function Từ chối
   */
  onNo?: () => void;
}

class ModalYesNo extends PureComponent<IProps> {
  refModalBox = React.createRef<ModalBox>();

  open = () => this.refModalBox.current?.open();

  close = () => this.refModalBox.current?.close();

  private onYes = (): void => {
    this.close();
    this.props.onYes?.();
  };

  private onNo = (): void => {
    this.close();
    this.props.onNo?.();
  };

  render() {
    let { title, yesLabel, noLabel } = this.props;
    yesLabel = yesLabel || 'common.yes';
    noLabel = noLabel || 'common.no';
    return (
      <Modal
        swipeToClose={false}
        position={'center'}
        ref={this.refModalBox}
        backdrop
        coverScreen
        {...this.props}
        style={styles.modal}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.btnView}>
            <Button
              preset={EBtnPreset.ACTIVE}
              labelTx={yesLabel}
              onPress={this.onYes}
              btnStyles={styles.btn}
            />
            <Button
              preset={EBtnPreset.DEACTIVE}
              labelTx={noLabel}
              onPress={this.onNo}
              btnStyles={styles.btn}
            />
          </View>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'transparent',
  },
  container: {
    margin: spacing.medium,
    backgroundColor: colors.background,
    borderRadius: spacing.medium,
    padding: spacing.medium,
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  title: {
    padding: spacing.larger,
    textAlign: 'center',
  },
  btn: {
    minWidth: DimensionHelpers.width * 0.4,
  },
});

export default ModalYesNo;
