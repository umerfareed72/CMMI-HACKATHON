import React, {useEffect, useRef} from 'react';
import {colors} from '../../utilities';
import DatePicker from 'react-native-date-picker';
import {Dimensions, KeyboardAvoidingView} from 'react-native';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

interface DatePickerProps {
  dateValue: any;
  onDateChange: any;
  actionSheetRef: any;
  minDate?: any;
  onPressHide: any;
}
export const DatePickerModal = ({
  dateValue,
  onDateChange,
  actionSheetRef,
  minDate,
  onPressHide,
}: DatePickerProps) => {
  return (
    <RBSheet
      ref={actionSheetRef}
      height={350}
      customStyles={{
        container: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <View style={styles.modalContainer}>
        <DatePicker
          fadeToColor={colors.white}
          textColor={colors.theme_color}
          mode={'date'}
          date={dateValue}
          androidVariant={'nativeAndroid'}
          onDateChange={onDateChange}
          minimumDate={minDate}
        />
      </View>
      <View style={styles.bot}>
        <TouchableOpacity style={styles.buttonContainer} onPress={onPressHide}>
          <Text style={styles.btnText}>Done</Text>
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.white,
    borderRadius: 50,
  },

  modalContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: colors.theme_color,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
  },
  btnText: {
    color: colors.white,
    fontSize: 16,
  },
  bot: {
    bottom: 0,
    width: '100%',
  },
});
