import {Platform, StatusBar, StyleSheet} from 'react-native';
import {colors, size} from '../../utilities';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: size.h6,
    color: colors.b1,
    width: '80%',
  },
});

export default styles;
