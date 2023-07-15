import {combineReducers} from 'redux';
import categorySlice from './category-reducers/categorySlice';

const root_reducer = combineReducers({
  /* your app’s top-level reducers */
  categories: categorySlice,
});

const rootReducer = (state: any, action: any) => {
  return root_reducer(state, action);
};

export default rootReducer;
