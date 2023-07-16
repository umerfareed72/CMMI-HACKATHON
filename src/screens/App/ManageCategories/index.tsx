import {NavigationProp} from '@react-navigation/core';
import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {AppHeader} from '../../../components';
import {CategoryCard} from '../../../components/Cards/CategoryCard';
import {
  addCategoryAction,
  addCategoryFieldAction,
  removeCategoryAction,
  removeCategoryFieldAction,
  updateCategoryAction,
  updateCatFieldAction,
} from '../../../redux/actions';
import {appIcons} from '../../../utilities';
import styles from './styles';
interface CategoriesProps {
  navigation: NavigationProp<any>; // Replace `any` with your specific navigation type
}
const ManageCatergories: React.FC<CategoriesProps> = ({navigation}) => {
  const dispatch: Dispatch<any> = useDispatch();
  const {categories} = useSelector((state: any) => state.categories);
  const [fieldText, setFieldText]: any = useState<String>('');

  const addCategory = (): void => {
    const NewItem = {
      category_name: '',
      category_value: '',
      fields: [
        {
          type: 'Text',
          title: '',
          value: '',
          id: 'text',
        },
      ],
      items: [],
      title: '',
      title_value: '',
    };
    const body = {
      values: NewItem,
      onSuccess: () => {},
    };
    dispatch(addCategoryAction(body));
  };

  // remove category
  const removeCategory = (id: number): void => {
    const body = {
      values: id,
      onSuccess: () => {},
    };
    dispatch(removeCategoryAction(body));
  };
  // On Select Field Value
  const selectFieldValue = (value: any, index: number): void => {
    setFieldText(value?.title);
    const obj = {
      type: value?.title,
      title: '',
      value: '',
      id: value?.id,
    };
    const data = {
      id: index,
      data: obj,
    };
    const body = {
      values: data,
      onSuccess: () => {},
    };

    dispatch(addCategoryFieldAction(body));
  };
  // On Remove Field Value
  const removeFieldValue = (index: number, itemIndex: number): void => {
    const obj = {
      index: index,
      itemIndex: itemIndex,
    };

    const body = {
      values: obj,
      onSuccess: () => {},
    };
    dispatch(removeCategoryFieldAction(body));
  };

  // On update  Value
  const updateCategoryValue = (value: string, index: number): void => {
    const data = {
      id: index,
      value: '',
      input: true,
      title: value,
    };
    const body = {
      values: data,
      onSuccess: () => {},
    };
    dispatch(updateCategoryAction(body));
  };

  // On update  Value
  const updateCategoryTypeValue = (value: string, index: number): void => {
    const data = {
      id: index,
      title: value,
      input: false,
      value: '',
    };
    const body = {
      values: data,
      onSuccess: () => {},
    };
    dispatch(updateCategoryAction(body));
  };

  // On update Field Value
  const updateCategoryFieldValue = (
    value: string,
    itemIndex: number,
    index: number,
  ): void => {
    const data = {
      id: index,
      itemId: itemIndex,
      value: '',
      input: true,
      title: value,
    };

    const body = {
      values: data,
      onSuccess: () => {},
    };
    dispatch(updateCatFieldAction(body));
  };

  // On update Field Type Value
  const updateCategoryFieldTypeValue = (
    value: string,
    itemIndex: number,
    index: number,
  ): void => {
    const data = {
      id: index,
      itemId: itemIndex,
      value: '',
      input: false,
      title: value,
    };

    const body = {
      values: data,
      onSuccess: () => {},
    };
    dispatch(updateCatFieldAction(body));
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.content}>
        <AppHeader
          title={'ManageCategories'}
          leftIcon={appIcons.backIcon}
          onPress={() => {
            navigation?.goBack();
          }}
          onPressRightText={addCategory}
          rightText={'Add New Category'}
        />

        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.categoryCon}>
            {categories?.map((item: any, index: number) => {
              return (
                <View key={index} style={styles.categoryItem}>
                  <CategoryCard
                    onChangeCatName={(text: any) => {
                      updateCategoryValue(text, index);
                    }}
                    onPressDelCat={() => {
                      removeCategory(index);
                    }}
                    title={item?.title}
                    onChangeField={(text: any, itemIndex: number) => {
                      updateCategoryFieldValue(text, itemIndex, index);
                    }}
                    category_name={item?.category_name}
                    fields={item?.fields}
                    onSelectField={(item: any) => {
                      selectFieldValue(item, index);
                    }}
                    onDelField={(itemIndex: number) => {
                      removeFieldValue(index, itemIndex);
                    }}
                    fieldText={fieldText}
                    onUpdateFieldType={(item: any, id: number) => {
                      updateCategoryFieldTypeValue(item, id, index);
                    }}
                    onChangeTitle={(text: any) => {
                      updateCategoryTypeValue(text, index);
                    }}
                    field_list={item?.fields?.map((item: any) => {
                      return {
                        title: item?.title,
                        id: item?.id,
                      };
                    })}
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

export default ManageCatergories;
