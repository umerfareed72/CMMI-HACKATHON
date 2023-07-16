import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerActions, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {AppButton, AppHeader, AppHeading, HomeCard} from '../../../components';
import {appIcons} from '../../../utilities';
import styles from './styles';

interface HomeProps {
  navigation: DrawerNavigationProp<ParamListBase>; // Replace `any` with your specific navigation type
}
const Home: React.FC<HomeProps> = ({navigation}) => {
  const {categories} = useSelector((state: any) => state.categories);
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
            data={categories}
            renderItem={({item, index}) => {
              return (
                <View>
                  <HomeCard
                    title={item?.category_name || ''}
                    text={item?.fields?.length}
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
