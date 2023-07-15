import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, size} from '../../utilities';
interface HomeCardProps {
  onPress: any;
  title: string;
  text: string;
}
export const HomeCard = ({onPress, title, text}: HomeCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.appButton]}>
      <Text style={[styles.appButtonTitleText]}>{title}</Text>
      <Text style={[styles.appButtonText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonTitleText: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: size.normal,
    // textAlign: 'center',
    lineHeight: 21,
    color: colors.drakBlack,
  },
  appButtonText: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: size.small,
    // textAlign: 'center',
    lineHeight: 21,
    color: colors.drakBlack,
  },
  appButton: {
    // justifyContent: 'center',
    // alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
    height: 70,
    width: '98%',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.theme_color,
    shadowColor: colors.theme_color,
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
