import * as React from 'react';
import { View, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
import { DimensionHelpers } from 'helpers/dimension-helpers';
import { translate } from 'res/languages';
import BaseIcon from 'libraries/icon/base-icon';
import colors from 'res/colors';

interface Props {}

interface States {
  visible: boolean;
  title: string;
  key: string;
  data: [];
}

const WIDTH = DimensionHelpers.width - 30;

export default class BaseModal extends React.PureComponent<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
      title: '',
      key: '',
      data: [],
    };
  }

  onShow = (title: string, data: [], key: string) => {
    this.setState({
      title,
      data,
      key,
      visible: true,
    });
  };

  onHide = () => {
    this.setState({ visible: false });
  };

  renderHeader() {
    let { title } = this.state;
    return (
      <View style={styles.viewHeader}>
        <Text style={styles.titleStyle}>{title && translate(title)}</Text>
        <BaseIcon
          name="ic_close"
          width={16}
          onPress={this.onHide}
          style={{ paddingLeft: 10, paddingVertical: 5 }}
        />
      </View>
    );
  }

  renderContent() {
    return (
      <View style={styles.modalView}>
        {this.renderHeader()}
        <Text>123123</Text>
      </View>
    );
  }

  public render() {
    let { visible } = this.state;
    return (
      <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={this.onHide}>
        <View style={styles.modalWrap}>
          <TouchableOpacity onPress={this.onHide} style={styles.modalOverlay} activeOpacity={1} />
          {this.renderContent()}
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  modalWrap: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalOverlay: {
    flex: 1,
    position: 'absolute',
    width: DimensionHelpers.width,
    height: DimensionHelpers.height,
  },
  modalView: {
    width: WIDTH,
    backgroundColor: colors.white,
    borderRadius: 5,
    alignItems: 'center',
  },
  viewHeader: {
    flexDirection: 'row',
    height: 47,
    backgroundColor: '#F5F6F8',
    width: '100%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
  },
  titleStyle: {
    fontSize: 15,
    color: colors.black,
    fontWeight: 'bold',
  },
});
