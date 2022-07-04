import React, { FunctionComponent as Component, PureComponent, useState } from 'react';
import { StyleSheet, View, Switch, Text } from 'react-native';
import svgs from '../../res/svgs';
import { SvgXml } from 'react-native-svg';
import colors from '../../res/colors';

export const NotifiOnOffComponent = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <SvgXml width={24} height={24} xml={svgs.icon.bell_black} />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.txt}>Thông báo</Text>
        </View>
      </View>
      <Switch
        trackColor={{ false: colors.Regent_Gray, true: colors.primaryColor }}
        thumbColor={isEnabled ? '#fff' : '#fff'}
        ios_backgroundColor={colors.Regent_Gray}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  txt: {
    fontSize: 16,
    color: colors.Midnight,
    fontWeight: '500',
  },
  txtStatus: {
    fontSize: 12,
    color: '#667085',
    marginTop: 2,
  },
});
