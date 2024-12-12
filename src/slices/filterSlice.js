import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name : "filterNameInSlice",
    initialState : "All",
    reducers: {
        setCategory : (state,action) => {
            return action.payload;
        }
    }
});

export const {setCategory} = filterSlice.actions;

export default filterSlice.reducer;

export const getCategoryFromList = (state) => state.filterKeyInStore;