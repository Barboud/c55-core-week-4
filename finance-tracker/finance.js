import { transactions } from './data.js';

export function addTransaction(transaction) {
  // TODO: Implement this function
}

export function getTotalIncome() {
  let totalIncome = 0;
  for (const transaction of transactions) {
    if (transaction.type === 'income') {
      totalIncome += transaction.amount;
    }
  }
  return totalIncome;
}

export function getTotalExpenses() {
  let totalExpenses = 0;
  for (const transaction of transactions) {
    if (transaction.type === 'expense') {
      totalExpenses += transaction.amount;
    }
  }
  return totalExpenses;
}

export function getBalance() {
  return getTotalIncome(transactions) - getTotalExpenses(transactions);
}

export function getTransactionsByCategory(category) {
  let result = [];
  for (const transaction of transactions) {
    if (transaction.category === category) {
      result.push(transaction);
    }
  }
  return result;
}

export function getLargestExpense() {
  // TODO: Implement this function
}

export function printAllTransactions() {
  // TODO: Implement this function
}

export function printSummary() {
  
}
