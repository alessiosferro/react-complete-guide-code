import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const CURRENT_YEAR = new Date().getFullYear().toString();

const Expenses = ({ items }) => {
  const [yearFilter, setYearFilter] = useState(CURRENT_YEAR);

  return (
    <Card className="expenses">
      <ExpensesFilter yearFilter={yearFilter} setYearFilter={setYearFilter} />
      {items
        .filter(({ date }) => date.getFullYear() === +yearFilter)
        .map(item => <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}/>
        )}
    </Card>
  );
}

export default Expenses;
