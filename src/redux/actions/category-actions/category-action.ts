import {createAsyncThunk} from '@reduxjs/toolkit';

import * as Types from '../../types';

// get Categories
export const getAllCategoriesction = createAsyncThunk(
  Types.GET_ALL_CATEGORIES,
  async ({values, onSuccess}: any, {rejectWithValue}) => {
    try {
      return;
    } catch (error) {
      // return custom error message from API if any

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// Add Categories
export const addCategoryAction = createAsyncThunk(
  Types.ADD_CATEGORIES,
  async ({values, onSuccess}: any, {rejectWithValue}) => {
    try {
      onSuccess(values);
      return values;
    } catch (error) {
      // return custom error message from API if any

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
// update Categories
export const updateCategoryAction = createAsyncThunk(
  Types.UPDATE_CATEGORIES,
  async ({values, onSuccess}: any, {rejectWithValue}) => {
    try {
      onSuccess(values);
      return values;
    } catch (error) {
      // return custom error message from API if any

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// Remove Categories
export const removeCategoryAction = createAsyncThunk(
  Types.REMOVE_CATEGORIES,
  async ({values, onSuccess}: any, {rejectWithValue}) => {
    try {
      onSuccess(values);
      return values;
    } catch (error) {
      // return custom error message from API if any

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// Remove fields Categories
export const removeCategoryFieldAction = createAsyncThunk(
  Types.REMOVE_CATEGORY_FIELD,
  async ({values, onSuccess}: any, {rejectWithValue}) => {
    try {
      onSuccess(values);
      return values;
    } catch (error) {
      // return custom error message from API if any

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// Add fields Categories
export const addCategoryFieldAction = createAsyncThunk(
  Types.ADD_CATEGORY_FIELD,
  async ({values, onSuccess}: any, {rejectWithValue}) => {
    try {
      onSuccess(values);
      return values;
    } catch (error) {
      // return custom error message from API if any

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// Update fields Categories
export const updateCatFieldAction = createAsyncThunk(
  Types.UPDATE_CATEGORY_FIELD,
  async ({values, onSuccess}: any, {rejectWithValue}) => {
    try {
      onSuccess(values);
      return values;
    } catch (error) {
      // return custom error message from API if any

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// Cetgeory Detail
export const getCategoryDetailAction = createAsyncThunk(
  Types.GET_CATEGORY_DETAIL,
  async ({values, onSuccess}: any, {rejectWithValue}) => {
    try {
      onSuccess(values);
      return values;
    } catch (error) {
      // return custom error message from API if any

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// Items**********************
// Add Categories
export const addNewItemAction = createAsyncThunk(
  Types.ADD_NEW_ITEM,
  async ({values, onSuccess}: any, {rejectWithValue}) => {
    try {
      onSuccess(values);
      return values;
    } catch (error) {
      // return custom error message from API if any

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// Delete Categories
export const removeItemAction = createAsyncThunk(
  Types.REMOVE_NEW_ITEM,
  async ({values, onSuccess}: any, {rejectWithValue}) => {
    try {
      onSuccess(values);
      return values;
    } catch (error) {
      // return custom error message from API if any

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
