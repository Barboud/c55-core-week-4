// This is the entrypoint for your application.
// node app.js

import {
  addTransaction,
  getTotalIncome,
  getTotalExpenses,
  getBalance,
  getTransactionsByCategory,
  getLargestExpense,
  printAllTransactions,
  printSummary,
} from './finance.js';

console.log(`Total Income: ${getTotalIncome()}`);
console.log(`Total Expenses: ${getTotalExpenses()}`);
console.log(`Current Balance: ${getBalance()}`);

console.log(getTransactionsByCategory('freelance'));
