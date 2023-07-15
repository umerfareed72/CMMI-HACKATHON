import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import DrawerNav from './DrawerNav';

const AppStack = createNativeStackNavigator();

const MainStack: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'Splash'} component={Splash} />
        <AppStack.Screen name={'Drawer'} component={DrawerNav} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
