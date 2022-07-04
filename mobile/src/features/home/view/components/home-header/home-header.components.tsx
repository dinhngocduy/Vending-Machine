import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import images from '../../../../../res/images';
import { ParameterCtnComponents } from '../parameter-container/parameter-ctn.component';
import colors from '../../../../../res/colors';
import { SvgXml } from 'react-native-svg';
import svgs from 'res/svgs';
import { HomeHeaderProps } from './home-header.props';
import { HomeHeaderAdapter } from './home-header-adapter';

export const HomeHeaderComponents = (props: HomeHeaderProps) => {
  const { countMachine, countNotifi, gotoNotification } = HomeHeaderAdapter();

  const convertToPercent = (total: number, value: number) => {
    if (total) {
      return parseInt(((value / total) * 100).toFixed(0));
    } else return 0;
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={images.home_header_bg} style={styles.bg_image} resizeMode="cover">
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }}
          />
          <View style={styles.info_ctn}>
            <Text style={styles.hello_text}>Xin chào !</Text>
            <Text style={styles.user_name_text}>{props.userName}</Text>
          </View>
          <View style={styles.notifi_btn}>
            <SvgXml height={24} xml={svgs.icon.bel} onPress={gotoNotification} />
            {countNotifi > 0 ? (
              <View style={styles.count_notifi_ctn}>
                <Text style={styles.count_text}>{countNotifi}</Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.footer}>
          <ParameterCtnComponents
            title="Tổng máy"
            data={countMachine?.total || 0}
            dataColor={colors.Dodger_Blue}
          />
          <ParameterCtnComponents
            title="Hoạt động"
            data={countMachine?.online || 0}
            // percent={ convertToPercent(countMachine?.total , countMachine?.online) }
            dataColor={colors.Jade_Green}
          />
          <ParameterCtnComponents
            title="Đã ngừng"
            data={countMachine?.offline || 0}
            // percent={ convertToPercent(countMachine?.total , countMachine?.offline)}
            dataColor={colors.Sunset_Red}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
  },
  bg_image: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 16,
  },
  info_ctn: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    flex: 1,
  },
  hello_text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    lineHeight: 21,
  },
  user_name_text: {
    fontWeight: '700',
    color: '#fff',
    lineHeight: 24,
  },
  notifi_btn: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
  },
  count_notifi_ctn: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    borderRadius: 20,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: -5,
    right: -5,
  },
  count_text: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
});
