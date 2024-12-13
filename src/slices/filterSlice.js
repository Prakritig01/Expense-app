import { createSlice } from "@reduxjs/toolkit";
import { getExpensesFromList } from "./expenseSlice";

const filterSlice = createSlice({
    name : "filterNameInSlice",
    initialState: {
        selectedCategory: "All", // Top-level property
        sortParameter : ""
        
      },
    reducers: {
        setCategory : (state, action) => {
            // console.log(action.payload);
            const newCategory  = action.payload;
            state.selectedCategory = newCategory;
        },
        setSortType : (state,action) => {
            state.sortParameter = action.payload;
        }
    }
});


export const {setCategory,setSortType} = filterSlice.actions;

export default filterSlice.reducer;

export const getCategoryFromList = (state) => state.filterKeyInStore.selectedCategory;

export  const getSortParameterFromList = (state) => state.filterKeyInStore.sortParameter;

export const getFilteredExpensesFromList = (selectedCategory) => (state) => {
   
    const expenses = getExpensesFromList(state);
    if(selectedCategory === 'All') return expenses;
    return expenses.filter(expense => expense.category === selectedCategory);
}

export const getFilteredAndSortedExpensesFromList = (selectedCategory,selectedSortParameter) => (state) =>{
    const filteredExpenses = getFilteredExpensesFromList(selectedCategory)(state);

    if(!selectedSortParameter){
        console.log("Here");
        console.log("filteredExpenses in function",filteredExpenses);
        return filteredExpenses;
    }

    const sortedExpenses = [...filteredExpenses].sort((a, b) => {
        if (selectedSortParameter === "Date") {
            return new Date(a.date) - new Date(b.date); 
        }
        if (selectedSortParameter === "Cost") {
            return a.cost - b.cost; 
        }
        if (selectedSortParameter === "Title") {
            return a.title.localeCompare(b.title); 
        }
        return 0; 
    });

    return sortedExpenses; 

}