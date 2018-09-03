import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, startEditExpense, history, startRemoveExpense;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage
    startEditExpense={startEditExpense}
    history={history}
    startRemoveExpense={startRemoveExpense}
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
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('shoud handle removeExpense', () => {
  wrapper.find('button').prop('onClick')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});
