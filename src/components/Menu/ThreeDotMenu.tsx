import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {appFonts, appIcons, colors, HP, size, WP} from '../../utilities';
import {AppField} from '../Fields/AppField';
import {AppInput} from '../Inputs/AppInput';
interface ThreeDotsMenuProps {
  menu_list: any;
  onSelect: any;
  width?: any;
  padding?: any;
  text?: boolean;
  value?: string;
  title?: string;
}
const ThreeDotsMenu = ({
  menu_list,
  onSelect,
  width,
  padding,
  text,
  value,
  title,
}: ThreeDotsMenuProps) => {
  return (
    <Menu>
      <MenuTrigger>
        <TouchableWithoutFeedback>
          {text ? (
            <Text style={styles.h2}>{value}</Text>
          ) : (
            <AppField title={title || 'Select Title'} />
          )}
        </TouchableWithoutFeedback>
      </MenuTrigger>
      <MenuOptions
        optionsContainerStyle={[
          styles.conStyle,
          {width: width || '35%', padding: padding || 5},
        ]}>
        {menu_list?.map((item: any, index: number) => {
          return (
            <MenuOption
              key={item?.id}
              style={[styles.men]}
              onSelect={() => onSelect(item)}>
              <Text style={[styles.textStyle]}>{item?.title || ''}</Text>
            </MenuOption>
          );
        })}
      </MenuOptions>
    </Menu>
  );
};
export default ThreeDotsMenu;

const styles = StyleSheet.create({
  MenuContext: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: WP('10'),
    alignSelf: 'flex-end',
  },
  men: {
    borderColor: colors.lightGrey,
  },
  dotStyle: {
    height: HP('3'),
    width: WP('5'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  hitSlop: {top: 30, bottom: 30, left: 30, right: 30},
  conStyle: {
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: colors.theme_color,
  },
  textStyle: {
    fontSize: size.xsmall,
    color: colors.g2,
  },
  h2: {
    fontSize: size.xsmall,
    color: colors.black,
  },
});
