import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import svgs from 'res/svgs';
import navigationService from 'routers/navigation-service';
import colors from '../../res/colors';
import { TitleBarProps } from './title-bar.props';

export const TitleBar = (props: TitleBarProps) => {
  const { title, back } = props;

  const goback = () => {
    navigationService.goBack();
  };

  return (
    <View style={styles.container}>
      {back ? <SvgXml height={24} width={24} xml={svgs.icon.back} onPress={goback} /> : null}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
});
