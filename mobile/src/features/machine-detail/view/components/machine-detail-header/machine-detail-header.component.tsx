import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import colors from 'res/colors';
import svgs from 'res/svgs';
import navigationService from 'routers/navigation-service';
import { convertToCurrency } from 'utils/functions/convertToCurrency';
import images from '../../../../../res/images';
import { MachineDetailHeaderProps } from './machine-datail-header.props';

export const MachineDetailHeaderComponent = (props: MachineDetailHeaderProps) => {
  const { id, name, fullCash, error, outOfStock, location, process, turnover, remainProduct, totalProduct } = props;

  const goback = () => {
    navigationService.goBack();
  };

  const renderStatusTag = () => {
    return (
      <View style={styles.status_tag_wrap}>
        {error ? (
          <View style={[styles.status_tag_ctn, { backgroundColor: colors.Sunset_Red }]}>
            <Text style={styles.status_tag_text}>Máy lỗi</Text>
          </View>
        ) : null}
        {outOfStock ? (
          <View style={[styles.status_tag_ctn, { backgroundColor: colors.warning }]}>
            <Text style={styles.status_tag_text}>Hết hàng</Text>
          </View>
        ) : null}
        {fullCash ? (
          <View style={[styles.status_tag_ctn, { backgroundColor: colors.Dodger_Blue }]}>
            <Text style={styles.status_tag_text}>Tiền đầy</Text>
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={images.home_header_bg} resizeMode="cover" style={styles.bg_image}>
        <View style={styles.tabbar}>
          <SvgXml height={24} width={24} xml={svgs.icon.back} onPress={goback} />
        </View>
        <View style={styles.header}>
          <Text style={styles.id_text}>{'#' + id}</Text>
          {renderStatusTag()}
        </View>
        <View style={styles.name_wrap}>
          <Text style={styles.name_text}>{name}</Text>
        </View>
        <View style={styles.location_ctn}>
          <View style={styles.wrap_location}>
            <SvgXml height={16} width={16} xml={svgs.icon.coin} />
            <Text style={styles.turnover_text}>{convertToCurrency(turnover)}</Text>
          </View>
          <View style={styles.wrap_location}>
            <SvgXml height={16} width={16} xml={svgs.icon.location_white} />
            <Text style={styles.location_text}>{location}</Text>
          </View>
        </View>
        <View style={styles.footer_ctn}>
          <ProgressBar
            progress={(process || 0) / 100}
            color={colors.Dodger_Blue}
            style={styles.progressbar}
          />
          <View style={styles.progress_text_ctn}>
            <Text style={styles.text_progress}>{remainProduct}/{totalProduct} sản phẩm</Text>
            <Text style={[styles.text_progress, { textAlign: 'right' }]}>{process + '%'}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 190,
  },
  bg_image: {
    flex: 1,
  },
  tabbar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: 'center',
  },
  name_wrap: {
    paddingHorizontal: 16,
  },
  id_text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginRight: 18,
    flex: 1
  },
  name_text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  status_tag_wrap: {
    flexDirection: 'row',
    paddingTop: 6,
  },
  status_tag_ctn: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  status_tag_text: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
  },
  location_ctn: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  wrap_location: {
    flexDirection: 'row',
    marginRight: 50,
  },
  turnover_text: {
    color: colors.Mustard,
    fontSize: 14,
    fontWeight: '500',
  },
  location_text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
  footer_ctn: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  text_progress: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
    flex: 1,
  },
  progress_text_ctn: {
    flexDirection: 'row',
  },
  progressbar: { height: 6, borderRadius: 4, marginBottom: 6, backgroundColor: '#fff' },
});
