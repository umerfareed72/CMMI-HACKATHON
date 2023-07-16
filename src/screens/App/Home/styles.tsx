import {Platform, StatusBar, StyleSheet} from 'react-native';
import {colors, WP} from '../../../utilities';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    padding: WP('4'),
  },
  categoryItem: {flexBasis: '100%', margin: 4, paddingHorizontal: 5},
  categoryCon: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
