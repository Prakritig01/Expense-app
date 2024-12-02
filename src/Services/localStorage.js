const EXPENSE_DATA_KEY = "expense_data_key";
const sleep = ms => new Promise(r => setTimeout(r,ms));

export async function getExpensesFromBackend(){
    const expenseDataString = localStorage.getItem(EXPENSE_DATA_KEY) || "[]";
    const expenses = JSON.parse(expenseDataString);
    await sleep(1000);
    return expenses;
}

export async function setExpensesInBackend(expenses){
    await sleep(1000);
    const updatedExpenseDataString = JSON.stringify(expenses);
    localStorage.setItem(EXPENSE_DATA_KEY, updatedExpenseDataString);
}