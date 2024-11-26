const EXPENSE_DATA_KEY = "expense_data_key";

export function getExpense(){
    const expenseDataString = localStorage.getItem(EXPENSE_DATA_KEY) || "[]";
    const expenses = JSON.parse(expenseDataString);
    return expenses;
}

export function setExpense(expenses){
    const updatedExpenseDataString = JSON.stringify(expenses);
    localStorage.setItem(EXPENSE_DATA_KEY, updatedExpenseDataString);
}