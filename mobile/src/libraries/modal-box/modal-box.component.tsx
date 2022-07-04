import Modal, { ModalProps as BaseModalProps } from "react-native-modalbox";
import React, { ReactNode } from "react";
import { StyleSheet, ViewStyle } from "react-native";

interface ModalBoxProps extends BaseModalProps {
  children?: ReactNode;
  position: "top" | "bottom" | "center";
  overrideStyle?: ViewStyle;
}
interface ModalBoxState {}

export class ModalBox extends React.PureComponent<
  ModalBoxProps,
  ModalBoxState
> {
  refModalBox = React.createRef<Modal>();

  open = () => this.refModalBox.current && this.refModalBox.current.open();

  close = () => this.refModalBox.current && this.refModalBox.current.close();

  render() {
    return (
      <Modal
        
        ref={this.refModalBox}
        style={this.props.overrideStyle || styles.container}
        position={this.props.position}
        backdrop
        coverScreen
        {...this.props}
      >
        {this.props.children}
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    backgroundColor: "transparent",
  },
});
