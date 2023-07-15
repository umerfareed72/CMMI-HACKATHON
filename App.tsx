import React from 'react';
import {View} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import MainStack from './src/navigation/MainStack';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <PaperProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <MenuProvider>
              <MainStack />
            </MenuProvider>
          </PersistGate>
        </Provider>
      </PaperProvider>
    </View>
  );
};

export default App;
