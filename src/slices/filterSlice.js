import { createSlice } from "@reduxjs/toolkit";
import { getExpensesFromList } from "./expenseSlice";

const filterSlice = createSlice({
  name: "filterNameInSlice",
  initialState: {
    selectedCategory: "All", // Top-level property
    sortParameter: "",
  },
  reducers: {
    setCategory: (state, action) => {
      // console.log(action.payload);
      const newCategory = action.payload;
      state.selectedCategory = newCategory;
    },
    setSortType: (state, action) => {
      state.sortParameter = action.payload;
    },
  },
});

const sortLogic = {
  Date: (a, b) => new Date(a.date) - new Date(b.date),
  Cost: (a, b) => a.cost - b.cost,
  Title: (a, b) => a.title.localeCompare(b.title),
  Category : (a,b) => a.category.localeCompare(b.category) 
};

export const sortOptions = Object.keys(sortLogic);

export const { setCategory, setSortType } = filterSlice.actions;

export default filterSlice.reducer;



export const getCategoryFromList = (state) =>
  state.filterKeyInStore.selectedCategory;

export const getSortParameterFromList = (state) =>
  state.filterKeyInStore.sortParameter;

export const getFilteredExpensesFromList = (selectedCategory) => (state) => {
  const expenses = getExpensesFromList(state);
  if (selectedCategory === "All") return expenses;
  return expenses.filter((expense) => expense.category === selectedCategory);
};

export const getFilteredAndSortedExpensesFromList =
  (selectedCategory, selectedSortParameter) => (state) => {
    const filteredExpenses =
      getFilteredExpensesFromList(selectedCategory)(state);

    if (!selectedSortParameter) {
      console.log("Here");
      console.log("filteredExpenses in function", filteredExpenses);
      return filteredExpenses;
    }
    
    const sortFunction = sortLogic[selectedSortParameter];
    
    if (!sortFunction) {
        console.log("Invalid sorting parameter");
        return filteredExpenses;
      }

    const sortedExpenses = [...filteredExpenses].sort(sortFunction);

    return sortedExpenses;
  };
