import {NavigationProp} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {AppHeader, CategoryItemCard} from '../../../components';
import {addNewItemAction, removeItemAction} from '../../../redux/actions';
import {appIcons} from '../../../utilities';
import styles from './styles';

interface CategoriesProps {
  navigation: NavigationProp<any>; // Replace `any` with your specific navigation type
}
const CategoryDetail: React.FC<CategoriesProps> = ({navigation}) => {
  const {category_detail, items} = useSelector(
    (state: any) => state.categories,
  );
  const dispatch: Dispatch<any> = useDispatch();

  // Add Item
  const addNewItem = (): void => {
    const body = {
      values: category_detail,
      onSuccess: () => {},
    };
    dispatch(addNewItemAction(body));
  };

  // Remove Item
  const removeNewItem = (index: number): void => {
    const body = {
      values: index,
      onSuccess: () => {},
    };
    dispatch(removeItemAction(body));
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.content}>
        <AppHeader
          title={category_detail?.category_name || ''}
          leftIcon={appIcons.backIcon}
          onPress={() => {
            navigation?.goBack();
          }}
          rightText={'Add new item'}
          onPressRightText={addNewItem}
        />

        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.categoryCon}>
            {items?.map((item: any, index: number) => {
              return (
                <View key={index} style={styles.categoryItem}>
                  <CategoryItemCard
                    category_name={category_detail?.title}
                    onChangeCatName={() => {}}
                    onPressDelCat={() => {
                      removeNewItem(index);
                    }}
                    fields={category_detail?.fields}
                    onChangeField={() => {}}
                    onChangeNumField={() => {}}
                    onDateChange={() => {}}
                    date_value={new Date()}
                  />
                </View>
              );
            })}
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CategoryDetail;
