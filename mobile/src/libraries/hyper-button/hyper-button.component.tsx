/* 
    Created by thaolt
*/

import React, { FunctionComponent as Component, PureComponent } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { HyperButtonProps } from './hyper-button.props';
import { HyperButtonAdapter } from './hyper-button.adapter';
import { SvgXml } from 'react-native-svg';
import svgs from 'res/svgs';

export const HyperButtonComponent = (props: HyperButtonProps) => {
  const {
    containerStyles,
    onPress,
    imgWidth = 24,
    imgHeight = 24,
    img = {},
    imgStyle = {},
    text,
    textStyle,
  } = props;
  return (
    <TouchableOpacity
      style={[styles.container, containerStyles && { ...containerStyles }]}
      onPress={onPress && onPress}
    >
      
      
      {text ? (
        <Text style={[styles.textStyle, textStyle && { ...textStyle }]}>{text}</Text>
      ) : (
        <SvgXml
          width={imgWidth}
          height={imgHeight}
          xml={img}
          style={[styles.imgStyle, imgStyle && { ...imgStyle }]}
        />
      //   <SvgXml
      //   width={imgWidth}
      //   height={imgHeight}
      //   xml={svgs.logo_vending}
      //   style={[styles.imgStyle, imgStyle && { ...imgStyle }]}
      // />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  imgStyle: {},
  textStyle: {},
});
