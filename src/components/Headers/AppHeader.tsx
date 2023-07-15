import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appIcons, colors, commonstyles, size, WP} from '../../utilities';
import {useNavigation} from '@react-navigation/native';
import {MyStatusBar} from '../Bar/MyStatusBar';
import {AppButton} from '../Buttons/AppButton';

interface AppHeaderProps {
  leftIcon: any;
  title: string;
  onPress: any;
  rightText?: string;
  onPressRightText?: any;
}
export const AppHeader = ({
  leftIcon,
  onPress,
  title,
  rightText,
  onPressRightText,
}: AppHeaderProps) => {
  const navigation = useNavigation();
  return (
    <>
      <MyStatusBar backgroundColor={colors.white} />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={commonstyles.aiRow}>
            {leftIcon && (
              <TouchableOpacity onPress={onPress}>
                <Image source={leftIcon} style={styles.menuIcon} />
              </TouchableOpacity>
            )}
            <Text style={styles.titleStyle}>{title}</Text>
          </View>
          <View>
            {rightText && (
              <AppButton
                title={rightText}
                onPress={onPressRightText}
                height={40}
              />
            )}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: WP('18'),
    justifyContent: 'flex-end',
  },
  contentContainer: {
    paddingVertical: WP('3'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleStyle: {
    fontSize: size.large,
    color: colors.black,
    marginLeft: 10,
  },
  menuIcon: {
    height: 24,
    width: 24,
  },
});
