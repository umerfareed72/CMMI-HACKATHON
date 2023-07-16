import {StyleSheet, Text, TouchableOpacity, View, Switch} from 'react-native';
import React from 'react';
import {colors, size} from '../../utilities';
interface CheckBoxPropos {
  h1: any;

  isEnabled?: boolean;
  toggleSwitch?: any;
}
export const AppCheckBox = ({
  h1,

  isEnabled,
  toggleSwitch,
}: CheckBoxPropos) => {
  return (
    <View style={styles.checkBoxStyle}>
      <Switch
        trackColor={{false: colors.white, true: colors.theme_color}}
        thumbColor={isEnabled ? colors.white : colors.white}
        ios_backgroundColor={colors.white}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text
        style={[
          styles.textStyle,
          {
            color: colors.black,
          },
        ]}>
        {h1}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: size.normal,
    color: colors.g6,
    lineHeight: 18,
    paddingLeft: 15,
  },

  checkBoxStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
