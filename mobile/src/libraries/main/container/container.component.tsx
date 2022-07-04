import React, { PureComponent } from 'react';
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { ContainerProps } from './container.props';
import { BackComponent } from '../back/back.component';
import { goBack } from '../back/back.adapter';
import { AppStatusBar } from 'libraries/status-bar/status-bar';
import { translate } from 'res/languages';
import spacing from 'res/spacings';
import colors from 'res/colors';

export class ContainerComponent extends PureComponent<ContainerProps> {
  constructor(props: ContainerProps) {
    super(props);
  }

  renderContent() {
    const { noKeyboardAvoidingView } = this.props;
    if (noKeyboardAvoidingView) return this.props.children;
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'android' ? undefined : 'padding'}
      >
        {this.props.children}
      </KeyboardAvoidingView>
    );
  }

  render() {
    const {
      style,
      showBackBtn,
      title = '',
      titleKey = '',
      onBack,
      onPressRight,
      iconRight,
    } = this.props;
    return (
      <View style={[styles.container, style && { ...style }]}>
        <AppStatusBar />
        <SafeAreaView style={styles.safeAreaView}>
          {showBackBtn && (
            <BackComponent
              style={styles.backStyle}
              goBack={onBack || goBack(this.props)}
              title={!!titleKey ? translate(titleKey) : title}
              onPressRight={onPressRight}
              iconRight={iconRight}
            />
          )}
          {this.renderContent()}
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  safeAreaView: {
    flex: 1,
  },
  backStyle: {
    paddingVertical: spacing.medium,
    flexDirection: 'row',
    backgroundColor: colors.primaryColor,
  },
});

export default ContainerComponent;
