import React from 'react';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    //dispatch the action to edit the expense
                    //redirect to the dashboard
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/');
                }}
            />
            <button 
            onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');
            }}
            >
            Remove</button>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);