import {createSlice} from '@reduxjs/toolkit';
import {
  addCategoryAction,
  addCategoryFieldAction,
  removeCategoryAction,
  removeCategoryFieldAction,
  updateCategoryAction,
  updateCatFieldAction,
  getCategoryDetailAction,
  addNewItemAction,
  removeItemAction,
  updateItemAction,
  updateTitleAction,
} from '../../actions';

// initialize userToken from local storage

const initialState = {
  categories: [],
  category_detail: null,
  items: [],
  error: null,
};

const categoriesSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addCategoryAction.pending, (state, {payload}) => {
      state.error = null;
    });
    builder.addCase(addCategoryAction.fulfilled, (state: any, {payload}) => {
      state?.categories?.push(payload);
      state.categories = state.categories;
    });

    builder.addCase(addCategoryAction.rejected, (state, {payload}) => {});
    // Rmvove Category
    builder.addCase(removeCategoryAction.pending, (state, {payload}) => {
      state.error = null;
    });
    builder.addCase(removeCategoryAction.fulfilled, (state: any, {payload}) => {
      state?.categories?.splice(payload, 1);
      state.categories = state.categories;
    });
    builder.addCase(removeCategoryAction.rejected, (state, {payload}) => {});

    // update  Category
    builder.addCase(updateCategoryAction.pending, (state, {payload}) => {
      state.error = null;
    });
    builder.addCase(updateCategoryAction.fulfilled, (state: any, {payload}) => {
      const {id, title, input} = payload;
      if (input) {
        state.categories[id].category_name = title;
      } else {
        state.categories[id].title = title?.title;
      }
      state.categories = [...state.categories];
    });

    builder.addCase(updateCategoryAction.rejected, (state, {payload}) => {});

    // add fields Category
    builder.addCase(addCategoryFieldAction.pending, (state, {payload}) => {
      state.error = null;
    });
    builder.addCase(
      addCategoryFieldAction.fulfilled,
      (state: any, {payload}) => {
        const {id, data} = payload;
        // Check if the fields array exists, if not, create it
        if (!state.categories[id].fields) {
          state.categories[id].fields = [];
        }
        state.categories[id].fields.push(data);
        state.categories = [...state.categories];
      },
    );
    builder.addCase(addCategoryFieldAction.rejected, (state, {payload}) => {});

    // update field Category
    builder.addCase(updateCatFieldAction.pending, (state, {payload}) => {
      state.error = null;
    });
    builder.addCase(updateCatFieldAction.fulfilled, (state: any, {payload}) => {
      const {id, itemId, title, input} = payload;
      if (input) {
        state.categories[id].fields[itemId].title = title;
      } else {
        state.categories[id].fields[itemId].id = title?.id;
        state.categories[id].fields[itemId].type = title?.title;
      }
      state.categories = [...state.categories];
    });
    builder.addCase(updateCatFieldAction.rejected, (state, {payload}) => {});

    // remove field Category
    builder.addCase(removeCategoryFieldAction.pending, (state, {payload}) => {
      state.error = null;
    });
    builder.addCase(
      removeCategoryFieldAction.fulfilled,
      (state: any, {payload}) => {
        const {index, itemIndex} = payload;

        state.categories[index].fields.splice(itemIndex, 1);
        state.categories = [...state.categories];
      },
    );
    builder.addCase(
      removeCategoryFieldAction.rejected,
      (state, {payload}) => {},
    );

    // Get Category Detail
    builder.addCase(getCategoryDetailAction.pending, (state, {payload}) => {
      state.error = null;
    });
    builder.addCase(
      getCategoryDetailAction.fulfilled,
      (state: any, {payload}) => {
        state.category_detail = payload;
      },
    );
    builder.addCase(getCategoryDetailAction.rejected, (state, {payload}) => {});

    // *****************Items****************

    // Add New Item
    builder.addCase(addNewItemAction.pending, (state, {payload}) => {
      state.error = null;
    });
    builder.addCase(addNewItemAction.fulfilled, (state: any, {payload}) => {
      state.items.push(payload);
      state.items = state.items;
    });
    builder.addCase(addNewItemAction.rejected, (state, {payload}) => {});
    // Remove New Item
    builder.addCase(removeItemAction.pending, (state, {payload}) => {
      state.error = null;
    });
    builder.addCase(removeItemAction.fulfilled, (state: any, {payload}) => {
      state.items.splice(payload, 1);
      state.items = state.items;
    });
    builder.addCase(removeItemAction.rejected, (state, {payload}) => {});

    // Update Title
    builder.addCase(updateTitleAction.pending, (state, {payload}) => {
      state.error = null;
    });
    builder.addCase(updateTitleAction.fulfilled, (state: any, {payload}) => {
      const {index, value} = payload;
      state.items[index].title_value = value;
      state.items = [...state.items];
    });
    builder.addCase(updateTitleAction.rejected, (state, {payload}) => {});

    // Update New Item
    builder.addCase(updateItemAction.pending, (state, {payload}) => {
      state.error = null;
    });
    builder.addCase(updateItemAction.fulfilled, (state: any, {payload}) => {
      const {index, id, value} = payload;
      state.items[index].fields[id].value = value;
      state.items = [...state.items];
    });
    builder.addCase(updateItemAction.rejected, (state, {payload}) => {});
  },
});
export default categoriesSlice.reducer;
