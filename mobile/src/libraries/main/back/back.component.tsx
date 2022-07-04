import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BackProps } from './back.props';
import BaseIcon from 'libraries/icon/base-icon';
import colors from 'res/colors';

export class BackComponent extends PureComponent<BackProps> {
  render() {
    const { style, goBack, title = '', iconRight, onPressRight } = this.props;
    return (
      <View style={style}>
        {/* <TouchableOpacity onPress={goBack} style={styles.backStyle}>
          <SvgXml width="18" height="18" xml={R.svgs.authen.icBack} />
        </TouchableOpacity> */}
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title.toUpperCase()}
        </Text>
        {iconRight ? (
          <BaseIcon name={iconRight} onPress={onPressRight} style={styles.imgRight} />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backStyle: {
    marginLeft: 13,
  },
  notiStyle: {
    marginRight: 13,
  },
  title: {
    textAlign: 'center',
    flexGrow: 1,
    fontWeight: '600',
    marginRight: 20,
    color: colors.white,
  },
  imgRight: {
    marginLeft: -20,
    marginRight: 13,
  },
});
