import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, editExpense, history, removeExpense;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage
    editExpense={editExpense}
    history={history}
    removeExpense={removeExpense}
    expense={expenses[2]}
    />
  );
})


test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit/editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('shoud handle removeExpense', () => {
  wrapper.find('button').prop('onClick')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});
