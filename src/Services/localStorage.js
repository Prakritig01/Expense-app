const EXPENSE_DATA_KEY = "expense_data_key_2";
const sleep = ms => new Promise(r => setTimeout(r,ms));
const DELAY = 1000;
export async function getExpensesFromBackend(){
    const expenseDataString = localStorage.getItem(EXPENSE_DATA_KEY) || "[]";
    const expenses = JSON.parse(expenseDataString);
    await sleep(DELAY);
    return expenses;
}

export async function setExpensesInBackend(expenses){
    await sleep(DELAY);
    const updatedExpenseDataString = JSON.stringify(expenses);
    localStorage.setItem(EXPENSE_DATA_KEY, updatedExpenseDataString);
    return;
}