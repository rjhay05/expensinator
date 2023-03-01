import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {

    const [isFormHidden, setIsFormHidden] = useState(false);
    
    const savedDataHandler = (savedData) => {
        const expenseData = {
            ...savedData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);

        setIsFormHidden(false);

    }

    const showFormHandler = () => {
        setIsFormHidden(true);
    }

    const hideFormHandler = () => {
        setIsFormHidden(false);
    }

    

    return(
        <div className='new-expense'>
            {isFormHidden && <ExpenseForm onHideForm={hideFormHandler} onSaveData={savedDataHandler}/>}
            {!isFormHidden && <button onClick={showFormHandler}>Add New Expense</button>}
        </div>
    )
}

export default NewExpense;