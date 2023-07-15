import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerActions, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {AppButton, AppHeader, AppHeading, HomeCard} from '../../../components';
import {appIcons} from '../../../utilities';
import styles from './styles';

interface HomeProps {
  navigation: DrawerNavigationProp<ParamListBase>; // Replace `any` with your specific navigation type
}
const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.content}>
        <AppHeader
          title={'Home'}
          leftIcon={appIcons.menu}
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />

        <View>
          <AppButton
            title={'Manage Categories'}
            onPress={() => {
              navigation?.navigate('ManageCategories');
            }}
          />
          <AppHeading title={'List of All Categories'} />

          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={({item, index}) => {
              return (
                <View>
                  <HomeCard
                    title={'Title'}
                    text={'Created'}
                    onPress={() => {}}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
