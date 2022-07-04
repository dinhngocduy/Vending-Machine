import React, { PureComponent } from 'react';
import { View, Modal } from 'react-native';
import Spinner from 'react-native-spinkit';
import LoadingManager from './loading-manager';
import PropTypes from 'prop-types';
import colors from 'res/colors';

const TIME_OUT = 5 * 1000;

export function showLoading() {
  const ref = LoadingManager.getDefault();
  if (!!ref) {
    ref.showLoading();
  }
}

export function hideLoading() {
  const ref = LoadingManager.getDefault();
  if (!!ref) {
    ref.hideLoading();
  }
}

interface IProps {
  spinnerSize?: number;
  spinnerType?: string;
  spinnerColor?: string;
}

class LoadingModal extends PureComponent<IProps> {
  isVisible = false;

  static defaultProps = {
    spinnerSize: 40,
    spinnerType: 'Circle',
    spinnerColor: colors.primaryColor,
  };

  static propTypes = {
    spinnerSize: PropTypes.number,
    spinnerType: PropTypes.string,
    spinnerColor: PropTypes.string,
  };

  constructor(props: IProps) {
    super(props);
  }

  componentWillUnmount() {}

  hideLoading = () => {
    setTimeout(() => {
      if (this.isVisible) this.isVisible = false;
    }, 200);
  };

  showLoading = () => {
    if (!this.isVisible) this.isVisible = true;
  };

  render() {
    return (
      <Modal transparent animationType="fade" visible={this.isVisible}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.25)',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spinner
            isVisible
            size={this.props.spinnerSize}
            type={this.props.spinnerType}
            color={this.props.spinnerColor}
          />
        </View>
      </Modal>
    );
  }
}

export default LoadingModal;
