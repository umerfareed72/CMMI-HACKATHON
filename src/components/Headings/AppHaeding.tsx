import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, size} from '../../utilities';

interface AppHeadingProps {
  title: string;
  marginBottom?: any;
}
export const AppHeading = ({title, marginBottom}: AppHeadingProps) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {marginBottom: marginBottom}]}>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },

  titleStyle: {
    fontSize: size.large,
    color: colors.black,
    marginLeft: 10,
  },
});
