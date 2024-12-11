import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name : "filterNameInSlice",
    initialState: {
        selectedCategory: "All", // Top-level property
      },
    reducers: {
        setCategory : (state, action) => {
            // console.log(action.payload);
            const newCategory  = action.payload;
            state.selectedCategory = newCategory;
        }
    }
});

export const {setCategory} = filterSlice.actions;

export default filterSlice.reducer;

export const getCategoryFromList = (state) => state.filterKeyInStore.selectedCategory;