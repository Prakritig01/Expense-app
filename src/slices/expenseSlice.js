import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenseNameInSLice",
  initialState: {
    currency: "Rupee",
    list: [
      {
        date: "2024-12-08",
        cost: 550,
        title: "Burger",
        category: "Food",
        id: 0,
      },
      {
        date: "2024-12-08",
        cost: 350,
        title: "Noodles",
        category: "Food",
        id: 1,
      },
      {
        date: "2024-12-08",
        cost: 450,
        title: "Jacket",
        category: "Clothes",
        id: 2,
      },
    ],
  },
  reducers: {
    addExpense: (state, action) => {
      console.log(action.payload);
      const newExpense = {
        ...action.payload,
        id: getNewId(state.list),
      };
      // console.log("newExpense", newExpense);
      state.list.push(newExpense);
    },
    editExpense: (state, action) => {
      const { id, expense } = action.payload;
      console.log("id in editExpense",id);
      console.log("expense in editExpense",expense);
      state.list = state.list.map((ele) => (ele.id === id ? expense : ele));
    },
    deleteExpense: (state, action) => {
      const { id } = action.payload;
      state.list.filter((ele) => ele.id !== id);
    },
  },
});

const getNewId = (expenses) => {
  let newId = -1;
  expenses.forEach((ele) => {
    newId = Math.max(newId, ele.id);
  });
  console.log(newId +1);
  return newId + 1;
};

export const { addExpense, deleteExpense, editExpense } = expenseSlice.actions;

export default expenseSlice.reducer;

export const getExpensesFromList = (state) => state.expenseKeyInStore.list;
export const getCurrencyFromList = (state) => state.expenseKeyInStore.currency;
