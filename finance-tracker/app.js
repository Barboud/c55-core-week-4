import {
  addTransaction,
  getLargestExpense,
  printAllTransactions,
  printSummary,
  getTotalTransactions,
} from './finance.js';

import chalk from 'chalk';

console.log(chalk.bold(' PERSONAL FINANCE TRACKER \n'));

const transaction = {
  type: 'expense',
  category: 'Personal Care',
  amount: 20,
  description: 'baber shop',
  date: '2025-01-30',
};

addTransaction(transaction);

printAllTransactions();
printSummary();

const largestExpense = getLargestExpense();
console.log(
  chalk.bold(
    `\nLargest Expense: ${largestExpense.category} (€${largestExpense.amount})`,
  ),
);

console.log(chalk.bold(`Total Transactions: ${getTotalTransactions()}`));
