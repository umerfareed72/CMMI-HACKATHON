import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {appFonts, colors, size, WP} from '../../utilities';
interface AppInputProps {
  placeholder: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  keyboardType?: any;
  value: any;
  onChangeText: any;
  onBlur?: any;
  blurOnSubmit?: any;
  returnKeyType?: any;
  maxLength?: number;
  editable?: boolean;
  rightIcon?: any;
  rightText?: any;
  numberofLines?: number;
  width?: any;
  label?: string;
}
export const AppInput = ({
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  keyboardType,
  value,
  onChangeText,
  onBlur,
  blurOnSubmit,
  returnKeyType,

  maxLength,
  editable,
  rightIcon,
  rightText,
  numberofLines,
  width,
  label,
}: AppInputProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <TextInput
        style={[styles.inputStyle, {width: width ? width : null}]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        onBlur={onBlur}
        blurOnSubmit={blurOnSubmit}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        editable={editable}
        maxLength={maxLength}
        mode={'outlined'}
        outlineColor={colors.g4}
        activeOutlineColor={colors.theme_color}
        theme={{roundness: 8, colors: {text: 'black'}}}
        dense={true}
        right={rightIcon && <TextInput.Icon icon={rightIcon} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginVertical: WP('1'),
  },

  inputStyle: {
    fontSize: size.medium,
    color: '#000000',
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingVertical: 5,
  },

  errorStyle: {
    fontSize: size.xxxtiny,
    color: colors.error,
    padding: 5,
    textAlign: 'right',
  },
  labelText: {
    fontSize: size.small,
    color: colors.drakBlack,
  },
});
