import moment from 'moment';
import React, {useRef} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  appIcons,
  colors,
  fields_menu_list,
  size,
  spacing,
  WP,
} from '../../utilities';
import {AppCheckBox} from '../Box/AppCheckBox';
import {DatePickerModal} from '../Fields/DatePickerModal';
import {AppInput} from '../Inputs/AppInput';

interface CategoryItemCardProps {
  title: any;
  value: any;
  onChangeCatName: any;
  onPressDelCat: any;
  onChangeField: any;
  fields?: any;
  onChangeNumField: any;
  isDatePickerVisible?: any;
  onDateChange: any;
  onChangeCheckBox: any;
}
export const CategoryItemCard = ({
  title,
  value,
  onPressDelCat,
  onChangeCatName,
  fields,
  onChangeField,
  onChangeNumField,
  onDateChange,
  onChangeCheckBox,
}: CategoryItemCardProps) => {
  const actionSheetRef: any = useRef();
  return (
    <View style={[styles.appButton]}>
      <View style={styles.itemCon}>
        <Text style={styles.h1}>{value}</Text>

        <TouchableOpacity onPress={onPressDelCat} style={styles.smCard}>
          <Image source={appIcons.delete} style={[styles.icon24]} />
        </TouchableOpacity>
      </View>

      <AppInput
        label={title}
        onChangeText={(text: any) => {
          onChangeCatName(text);
        }}
        value={value}
        placeholder={`Enter ${title}`}
      />
      {fields?.map((item: any, index: number) => {
        return (
          <View key={index}>
            {item?.id == 'text' && (
              <View style={spacing.my4}>
                <AppInput
                  label={item?.title}
                  onChangeText={(text: any) => {
                    onChangeField(text, index);
                  }}
                  value={item?.value}
                  placeholder={`Enter ${item?.title}`}
                />
              </View>
            )}
            {item?.id == 'checkbox' && (
              <View style={spacing.my4}>
                <AppCheckBox
                  h1={item?.title}
                  isEnabled={item?.value}
                  toggleSwitch={(check: boolean) => {
                    onChangeCheckBox(check, index);
                  }}
                />
              </View>
            )}
            {item?.id == 'number' && (
              <View style={spacing.my4}>
                <AppInput
                  label={item?.title}
                  onChangeText={(text: number) => {
                    onChangeNumField(text, index);
                  }}
                  value={item?.value}
                  placeholder={`Enter ${item?.title}`}
                  keyboardType={'decimal-pad'}
                />
              </View>
            )}
            {item?.id == 'date' && (
              <View style={spacing.my4}>
                <Text style={styles.labelText}>{item?.title}</Text>
                <TouchableOpacity
                  style={styles.appButton}
                  onPress={() => {
                    actionSheetRef?.current?.open();
                  }}>
                  <Text>
                    {moment(item?.value)?.format('DD/MM/YYYY') ||
                      `Select ${item?.title}`}
                  </Text>
                </TouchableOpacity>
                <DatePickerModal
                  dateValue={item?.value || new Date()}
                  onDateChange={(date: any) => {
                    onDateChange(date, index);
                  }}
                  actionSheetRef={actionSheetRef}
                  onPressHide={() => {
                    actionSheetRef?.current?.close();
                  }}
                />
              </View>
            )}
          </View>
        );
      })}
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
