import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import colors from 'res/colors';
import svgs from '../../res/svgs';
import { SearchInputProps } from './search-input.props';

export const SearchInputComponent = (props: SearchInputProps) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.wrapIconSearch}>
        <SvgXml width="24" height="24" xml={svgs.icon.search} />
      </View>
      <View style={styles.wraptxtSearch}>
        <TextInput
          placeholder={props.placeHolderText}
          placeholderTextColor="#B3B8C2"
          // ref={this.inputRef}
          style={{
            fontSize: 14,
            color: colors.Midnight,
            flex: 1,
          }}
          // // onChangeText={this.onChangeTextDelayed}
          // onChangeText={(text) => {
          //   this.onChangeTextDelayed(text);
          //   this.setState({ text: text });
          // }}
          // onFocus={this.setFocus.bind(this, true)}
          // onBlur={this.setFocus.bind(this, false)}
          // value={this.state.text}
        />
        {/* {this.state.text != '' ? (
            <SvgXml height={20} width={20} xml={svgs.ic_close_search} onPress={this.onClear} />
          ) : null} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderWidth: 1,
    borderColor: '#CCCFD6',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 4,
    flex: 1,
  },
  wrapIconSearch: {
    marginLeft: 10,
  },
  wraptxtSearch: {
    marginLeft: 10,
    //   width: Dimensions - 16 - 14 - 24 - 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtSearch: {
    fontSize: 14,
    color: '#B3B8C2',
  },
});
