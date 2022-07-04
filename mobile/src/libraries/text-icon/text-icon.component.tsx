import React from 'react';
import { View, StyleSheet, ViewStyle, Image, Text, TextStyle, Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { TextIconProps } from './text-icon.props';
import { getImage } from 'helpers/utils';
import colors from 'res/colors';

const { width } = Dimensions.get('screen');

export default class TextIconComponent extends React.PureComponent<TextIconProps> {
  constructor(props: TextIconProps) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    isSvg: false,
  };

  render() {
    const {
      isSvg,
      text = '',
      imgLeft,
      imgRight,
      containerStyles,
      textStyles,
      singleLine,
    } = this.props;
    return (
      <View style={[{ flexDirection: 'row' }, { ...containerStyles }]}>
        {isSvg ? (
          <TextSvgIcon text={text} textStyles={textStyles} {...this.props} />
        ) : (
          <TextImgIcon text={text} textStyles={textStyles} {...this.props} />
        )}
      </View>
    );
  }
}

//Image
class TextImgIcon extends React.PureComponent<TextIconProps> {
  constructor(props: TextImgIcon) {
    super(props);
  }

  render() {
    const {
      text = '',
      imgLeft,
      imgRight,
      containerStyles,
      textStyles,
      imgStyles,
      singleLine,
    } = this.props;
    return (
      <>
        {singleLine ? (
          <View
            style={[
              { flexDirection: 'row', alignItems: 'center', width: width * 0.6 },
              { ...containerStyles },
            ]}
          >
            {imgLeft !== null && imgLeft.toString().trim().length > 0 ? (
              <Image
                source={getImage(imgLeft)}
                style={[styles.imgLeft, imgStyles && { ...imgStyles }]}
                resizeMode="contain"
              />
            ) : null}

            <Text style={textStyles} numberOfLines={1}>
              {text}
            </Text>
            {imgRight ? (
              <Image
                source={getImage(imgRight)}
                style={[styles.imgRight, , imgStyles && { ...imgStyles }]}
              />
            ) : null}
          </View>
        ) : (
          <View style={[{ flexDirection: 'row', alignItems: 'center' }, { ...containerStyles }]}>
            {imgLeft && imgLeft.toString().trim().length > 0 ? (
              <Image
                source={getImage(imgLeft)}
                style={[styles.imgLeft, imgStyles && { ...imgStyles }]}
                resizeMode="contain"
              />
            ) : null}

            <Text style={textStyles} numberOfLines={3}>
              {text}
            </Text>
            {imgRight ? (
              <Image
                source={getImage(imgRight)}
                style={[styles.imgRight, imgStyles && { ...imgStyles }]}
              />
            ) : null}
          </View>
        )}
      </>
    );
  }
}
//Svg
class TextSvgIcon extends React.PureComponent<TextIconProps> {
  constructor(props: TextSvgIcon) {
    super(props);
  }

  render() {
    const { text, imgLeft, imgRight, containerStyles, textStyles, iconStyles, singleLine } =
      this.props;
    return (
      <View style={[{ flexDirection: 'row' }, { ...containerStyles }]}>
        {imgLeft && <SvgXml style={[styles.svg, { ...iconStyles }]} xml={imgLeft} />}
        <Text style={textStyles}>{text}</Text>
        {imgRight && <SvgXml style={[styles.svg, { ...iconStyles }]} xml={imgRight} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    margin: 15,
    alignItems: 'center',
  },
  imgLeft: {
    width: 13,
    height: 13,
    alignSelf: 'center',
    marginRight: 5,
  },
  imgRight: {
    width: 13,
    height: 13,
    alignSelf: 'center',
    marginLeft: 5,
  },
  svg: {
    width: '23',
    height: '23',
    alignSelf: 'center',
    marginRight: 5,
  },
});
