import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {colors, appFonts, size} from '../../utilities';
interface AppButtonProps {
  onPress: any;
  title: string;
  height?: any;
  width?: any;
  bgColor?: string;
  borderRadius?: number;
  borderWidth?: any;
  borderColor?: any;
}
export const AppButton = ({
  onPress,
  title,
  height,
  width,
  bgColor,
  borderRadius,
  borderWidth,
  borderColor,
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.appButton,
        {
          height: height || 50,
          width: width || '100%',
          backgroundColor: bgColor || colors.theme_color,
          borderRadius: borderRadius || 8,
          borderWidth: borderWidth || 1,
          borderColor: borderColor || 'transparent',
        },
      ]}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonText: {
    fontSize: size.xsmall,
    color: colors.white,
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  appButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
