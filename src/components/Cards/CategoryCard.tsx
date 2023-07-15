import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {appIcons, colors, fields_menu_list, size, WP} from '../../utilities';
import {AppInput} from '../Inputs/AppInput';
import ThreeDotsMenu from '../Menu/ThreeDotMenu';

interface CategoryCardProps {
  title: string;
  category_name: any;
  onPressDelCat: any;
  fields: any;
  onSelectField: any;
  fieldText: string;
  onDelField: any;
  onChangeCatName: any;
  onChangeField: any;
  onUpdateFieldType: any;
  field_list: any;
  onChangeTitle: any;
}
export const CategoryCard = ({
  title,
  category_name,
  onPressDelCat,
  fields,
  onSelectField,
  fieldText,
  onDelField,
  onChangeCatName,
  onChangeField,
  onUpdateFieldType,
  field_list,
  onChangeTitle,
}: CategoryCardProps) => {
  return (
    <View style={[styles.appButton]}>
      <View style={styles.itemCon}>
        <Text style={styles.h1}>{category_name}</Text>

        <TouchableOpacity onPress={onPressDelCat} style={styles.smCard}>
          <Image source={appIcons.delete} style={[styles.icon24]} />
        </TouchableOpacity>
      </View>

      <AppInput
        label={'Category Name'}
        onChangeText={onChangeCatName}
        value={category_name}
        placeholder={'Enter Category Name'}
      />
      <View style={{width: '100%', zIndex: 9999}}>
        <Text style={styles.labelText}>{'Add Field'}</Text>
        <ThreeDotsMenu
          menu_list={fields_menu_list}
          onSelect={(item: any) => {
            onSelectField(item);
          }}
          title={fieldText}
        />
      </View>
      {fields?.length > 0 && (
        <>
          {fields?.map((item: any, index: number) => {
            return (
              <View key={index} style={styles.itemCon}>
                <View style={{width: '55%'}}>
                  <AppInput
                    label={'Text Field'}
                    onChangeText={(text: number) => {
                      onChangeField(text, index);
                    }}
                    value={item?.title}
                    placeholder={'Enter Category Name'}
                  />
                </View>

                <TouchableOpacity style={styles.textCon}>
                  <ThreeDotsMenu
                    value={item?.type}
                    menu_list={fields_menu_list}
                    onSelect={(item: any) => {
                      onUpdateFieldType(item, index);
                    }}
                    text={true}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    onDelField(index);
                  }}
                  style={styles.smCard}>
                  <Image
                    source={appIcons.delete}
                    style={[styles.icon24, {tintColor: colors.red, top: 10}]}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </>
      )}
      <View style={{width: '100%', zIndex: 9999}}>
        <Text style={styles.labelText}>{'Title'}</Text>
        <ThreeDotsMenu
          menu_list={field_list || []}
          onSelect={(text: any) => {
            onChangeTitle(text);
          }}
          title={title || ''}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appButton: {
    // justifyContent: 'center',
    // alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
    padding: WP('4'),
    backgroundColor: colors.r1,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.theme_color,
    shadowColor: colors.theme_color,
    marginHorizontal: 5,
    marginVertical: 10,
    width: '100%',
  },
  h1: {
    fontSize: size.large,
    color: colors.black,
    marginBottom: 10,
  },
  itemCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  smCard: {
    marginHorizontal: 5,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h2: {
    fontSize: size.xsmall,
    color: colors.black,
  },
  icon24: {
    height: 24,
    width: 24,
  },
  textCon: {
    top: 12,
    paddingVertical: 20,
  },
  labelText: {
    marginTop: 10,
    fontSize: size.normal,
    color: colors.black,
  },
});
