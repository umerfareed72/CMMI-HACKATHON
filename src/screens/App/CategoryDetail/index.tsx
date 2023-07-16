import {NavigationProp} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {AppHeader, CategoryItemCard} from '../../../components';
import {
  addNewItemAction,
  removeItemAction,
  updateItemAction,
  updateTitleAction,
} from '../../../redux/actions';
import {appIcons} from '../../../utilities';
import styles from './styles';

interface CategoriesProps {
  navigation: NavigationProp<any>; // Replace `any` with your specific navigation type
}
const CategoryDetail: React.FC<CategoriesProps> = ({navigation}) => {
  const {category_detail, categories, items, categoryIndex} = useSelector(
    (state: any) => state.categories,
  );
  const dispatch: Dispatch<any> = useDispatch();

  // Add Item
  const addNewItem = (): void => {
    const data = {
      categoryId: categoryIndex || 0,
      fields: category_detail?.fields || '',
      title: category_detail?.title || '',
      title_value: category_detail?.title_value || '',
    };

    const body = {
      values: data,
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

  // update input Item
  const updateTitleItem = (value: any, index: number): void => {
    const data = {
      value: value,
      index: index,
    };
    const body = {
      values: data,
      onSuccess: () => {},
    };
    dispatch(updateTitleAction(body));
  };

  // update input Item
  const updateInputItem = (value: any, id: number, index: number): void => {
    const data = {
      value: value,
      id: id,
      index: index,
    };
    const body = {
      values: data,
      onSuccess: () => {},
    };
    dispatch(updateItemAction(body));
  };

  // Update Checkbox Item
  const upodateCheckBoxItem = (
    value: boolean,
    id: number,
    index: number,
  ): void => {
    const data = {
      value: value,
      id: id,
      index: index,
    };
    const body = {
      values: data,
      onSuccess: () => {},
    };
    dispatch(updateItemAction(body));
  };

  // Update Checkbox Item
  const updateDateItem = (value: any, id: number, index: number): void => {
    const data = {
      value: value,
      id: id,
      index: index,
    };

    const body = {
      values: data,
      onSuccess: () => {},
    };
    dispatch(updateItemAction(body));
  };

  // Update Checkbox Item
  const upodateNumberItem = (
    value: number,
    id: number,
    index: number,
  ): void => {
    const data = {
      value: value,
      id: id,
      index: index,
    };
    const body = {
      values: data,
      onSuccess: () => {},
    };
    dispatch(updateItemAction(body));
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
            {categories[categoryIndex]?.items?.map(
              (item: any, index: number) => {
                return (
                  <View key={index} style={styles.categoryItem}>
                    <CategoryItemCard
                      onChangeCatName={(text: any) => {
                        updateTitleItem(text, index);
                      }}
                      title={item?.title}
                      value={item?.title_value}
                      onPressDelCat={() => {
                        removeNewItem(index);
                      }}
                      fields={item?.fields}
                      onChangeField={(text: any, id: number) => {
                        updateInputItem(text, id, index);
                      }}
                      onChangeNumField={(text: number, id: number) => {
                        upodateNumberItem(text, id, index);
                      }}
                      onDateChange={(text: any, id: number) => {
                        updateDateItem(text, id, index);
                      }}
                      onChangeCheckBox={(text: boolean, id: number) => {
                        upodateCheckBoxItem(text, id, index);
                      }}
                    />
                  </View>
                );
              },
            )}
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CategoryDetail;
