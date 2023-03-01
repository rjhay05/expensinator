import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [ userInput, setUserInput ] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const enteredTitleHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            }
        })
    }

    const enteredAmountHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            }
        })
    }

    const enteredDateHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                date: event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.title,
            amount: +userInput.amount,
            date: new Date(userInput.date)
        }

        props.onSaveData(expenseData);

        setUserInput({
            title: '',
            amount: '',
            date: ''
        })
    }



    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={enteredTitleHandler} required value={userInput.title} />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' required onChange={enteredAmountHandler} value={userInput.amount} />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max='2022-12-31' required onChange={enteredDateHandler} value={userInput.date} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onHideForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>

    )
}

export default ExpenseForm;