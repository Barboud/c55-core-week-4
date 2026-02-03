import { transactions } from './data.js';
import chalk from 'chalk';

export function addTransaction(transaction) {
  if (!transaction[0].id) {
    transaction[0].id = transactions.length + 1;
  }
  transactions.push(...transaction);
  return transactions;
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
  return getTotalIncome() - getTotalExpenses();
}

export function getTransactionsByCategory(category) {
  let filteredTransactions = [];
  for (const transaction of transactions) {
    if (transaction.category === category) {
      filteredTransactions.push(transaction);
    }
  }
  return filteredTransactions;
}

export function getLargestExpense() {
  const filteredTransactions = getTransactionsByType('expense');
  let largestTransaction = [];
  let largestExpense = null;
  for (const filteredTransaction of filteredTransactions) {
    if (filteredTransaction.amount > largestExpense) {
      largestExpense = filteredTransaction.amount;
      largestTransaction.pop(filteredTransaction);
      largestTransaction.push(filteredTransaction);
    }
  }
  return largestTransaction;
}

export function printAllTransactions() {
  console.log('All Transactions:');
  let id = 1;
  for (const transaction of transactions) {
    const { type, category, amount, description } = transaction;

    // To determine the income or expense, and to set a proper color for display
    let amountColor = null;
    if (transaction.type === 'income') {
      amountColor = chalk.green(`€${amount}`);
    } else {
      amountColor = chalk.red(`€${amount}`);
    }

    console.log(
      `${id}. [${type.toUpperCase()}] ${chalk.yellow(category)} - ${amountColor} (${description})`,
    );
    id++;
  }

  console.log('\n');
}

export function printSummary() {
  console.log(chalk.bold('FINANCIAL SUMMARY'));
  console.log(chalk.green(`Total Income: €${getTotalIncome()}`));
  console.log(chalk.red(`Total Expenses: €${getTotalExpenses()}`));
  if (getBalance() >= 0) {
    console.log(chalk.cyan(`Current Balance: €${getBalance()}`));
  } else {
    console.log(chalk.red(`Current Balance: €${getBalance()}`));
  }
}

export function getTransactionsByType(type) {
  let filteredTransactions = [];
  for (const transaction of transactions) {
    if (transaction.type === type) {
      filteredTransactions.push(transaction);
    }
  }
  return filteredTransactions;
}

export function getTotalTransactions() {
  return transactions.length;
}
