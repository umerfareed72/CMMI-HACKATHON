import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {DrawerComponent} from '../components';
import CategoryDetail from '../screens/App/CategoryDetail';
import ManageCatergories from '../screens/App/ManageCategories';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

const initialRoute = 'HomeStack';
const DrawerNav: React.FC = () => {
  const {categories} = useSelector((state: any) => state.categories);
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerComponent {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName={initialRoute}>
      <Drawer.Screen name="Dashboard" component={HomeStack} />
      {categories?.map((item: any, index: number) => {
        if (item?.category_name) {
          return (
            <Drawer.Screen
              key={index}
              name={`${item?.category_name}+${index}`}
              component={CategoryDetail}
            />
          );
        }
      })}
      <Drawer.Screen name="ManageCategories" component={ManageCatergories} />
    </Drawer.Navigator>
  );
};
export default DrawerNav;
export const styles = StyleSheet.create({});
