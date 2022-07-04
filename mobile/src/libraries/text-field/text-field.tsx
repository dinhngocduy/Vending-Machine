import React, { forwardRef, PureComponent, Ref, useState } from 'react';
import { StyleSheet, TextInput, View, Platform, Text, TouchableOpacity } from 'react-native';
import { TextFieldProps } from './text-field.props';
import colors from 'res/colors';
import svgs from 'res/svgs';
import { useImperativeHandle } from 'react';
import { RefObject } from './ref-props';
import { HyperButtonComponent } from '../hyper-button/hyper-button.component';

export const TextField = forwardRef((props: TextFieldProps, ref: Ref<RefObject>) => {
  const [value, setValue] = useState<string>('');
  const [showPass, setShowPass] = useState<boolean>(false);
  const [borderInputColor, setBorderInputColor] = useState<string>('#E6E8EB');
  const [errorInput, setErrorInput] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({ getValue }));

  const onBlurInput = () => {
    setBorderInputColor('#E6E8EB');
  };

  const onFocusInput = () => {
    setBorderInputColor('#4080FF');
  };

  const onChangeText = (value: string) => {
    setValue(value);
    setErrorInput(false);

    props.onChangeValue?.(value);
  };

  const onShowPass = () => {
    setShowPass(!showPass);
  };

  const onShowError = (isError: boolean) => {
    // this.setState({
    //   errorInput: isError,
    // });
  };

  const getValue = () => {
    return value;
  };

  const {
    placeHolderColor,
    inputStyle,
    onChangeValue,
    lable,
    iConRight,
    onPressIconR,
    containerStyle,
    passInput,
    errorTxt,
    placeHolderText,
    // errorInput,
    isDomain,
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.wrapLable}>
        <Text style={styles.lable}>{lable}</Text>
      </View>
      <View
        style={[styles.containerInput, { borderColor: errorInput ? '#FF4D54' : borderInputColor }]}
      >
        <View style={[styles.wrapInput]}>
          <TextInput
            autoCapitalize="none"
            defaultValue={value}
            placeholderTextColor={placeHolderColor || colors.Regent_Gray}
            {...props}
            style={[styles.input, inputStyle]}
            onChangeText={onChangeText}
            secureTextEntry={!showPass && passInput}
            onBlur={onBlurInput}
            onFocus={onFocusInput}
            placeholder={placeHolderText}
          />
        </View>
        {iConRight ? (
          <HyperButtonComponent
            onPress={onPressIconR}
            containerStyles={{ padding: 4 }}
            img={iConRight}
            imgWidth={20}
            imgHeight={20}
          />
        ) : null}
        {passInput ? (
          <HyperButtonComponent
            onPress={onShowPass}
            containerStyles={{ padding: 4 }}
            img={showPass ? svgs.ic_pass_show : svgs.ic_pass_hide}
            imgWidth={20}
            imgHeight={20}
          />
        ) : null}
        {/* {isDomain ? <Text style={styles.txtDomain}>.ihcm.vn</Text> : null} */}
      </View>
      {errorInput ? (
        <Text style={{ fontSize: 12, color: colors.Sunset_Red, marginTop: 4 }}>{errorTxt}</Text>
      ) : null}
    </View>
  );
});

//Styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  wrapInput: {
    flex: 1,
    marginVertical: Platform.OS === 'ios' ? 10 : 0,
  },
  input: {
    color: '#1A2948',
    fontSize: 14,
  },
  containerInput: {
    flexDirection: 'row',
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#E6E8EB',
    height: 44,
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  wrapLable: {
    width: '100%',
  },
  lable: {
    color: '#1A2948',
    fontSize: 14,
    fontWeight: '700',
  },
  txtDomain: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.primaryColor,
    marginLeft: 8,
  },
});
