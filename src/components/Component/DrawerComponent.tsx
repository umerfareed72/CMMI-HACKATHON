import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {getCategoryDetailAction} from '../../redux/actions';
import {colors, size, spacing} from '../../utilities';
import {MyStatusBar} from '../Bar/MyStatusBar';
import {AppHeading} from '../Headings/AppHaeding';

export const DrawerComponent = ({navigation}: any) => {
  const dispatch: Dispatch<any> = useDispatch();

  const {categories} = useSelector((state: any) => state.categories);
  // On Press Category
  const onPressCategory = (item: any, index: number) => {
    const body = {
      values: item,
      onSuccess: () => {
        navigation?.navigate(`${item?.category_name}+${index}`);
      },
    };
    dispatch(getCategoryDetailAction(body));
  };
  return (
    <>
      <MyStatusBar backgroundColor={colors.white} />
      <SafeAreaView style={styles.mainContainer}>
        <View style={[spacing.mt6, spacing.p2]}>
          <AppHeading title={'CMMI'} marginBottom={20} />

          <View>
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate('Home');
              }}
              style={[styles.card]}>
              <Text style={styles.text}>Dashboard</Text>
            </TouchableOpacity>
            <View style={styles.lineStyle} />
          </View>
          {categories?.map((item: any, index: number) => {
            if (item?.category_name) {
              return (
                <View key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      onPressCategory(item, index);
                    }}
                    style={[styles.card]}>
                    <Text style={styles.text}>{item?.category_name}</Text>
                  </TouchableOpacity>

                  <View style={styles.lineStyle} />
                </View>
              );
            }
          })}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.light_green,
  },
  text: {
    fontSize: size.normal,
    fontWeight: '500',
  },
  card: {
    marginHorizontal: 10,
  },
  lineStyle: {
    borderWidth: 0.4,
    borderColor: colors.g5,
    marginVertical: 10,

    // borderBottomColor: '#73C58D',
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // margin: 20,
  },
});
