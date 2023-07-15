// app/store.js
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],

  // blackList: [],
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};
const pReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: pReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export default store;
