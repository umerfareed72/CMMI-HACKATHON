// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../screens/App/Home';
import ManageCatergories from '../screens/App/ManageCategories';

const Stack = createNativeStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ManageCategories" component={ManageCatergories} />
    </Stack.Navigator>
  );
};

export default HomeStack;
