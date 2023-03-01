import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';


function Expenses(props) {
    const [year, setYear] = useState('2019');

    const selectedYearHandler = (selectedYear) => {
        setYear(selectedYear);
    }

    const filteredExpense = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
    })

    return (
        
            <Card className='expenses'>
                <ExpensesFilter default={year} onSelectedYear={selectedYearHandler}/>
                <ExpenseChart expenses={filteredExpense}/>
                <ExpensesList items={filteredExpense} />
            </Card>
        



    )
}

export default Expenses;