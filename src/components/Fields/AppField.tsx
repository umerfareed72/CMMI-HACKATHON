import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, size} from '../../utilities';

interface AppFieldProps {
  title: string;
}
export const AppField = ({title}: AppFieldProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: 50,
    backgroundColor: colors.white,
    borderColor: colors.theme_color,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
  },

  titleStyle: {
    fontSize: size.large,
    color: colors.black,
    marginLeft: 10,
  },
});
