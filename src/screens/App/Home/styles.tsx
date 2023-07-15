import {Platform, StatusBar, StyleSheet} from 'react-native';
import {colors, WP} from '../../../utilities';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: WP('4'),
  },
});

export default styles;
