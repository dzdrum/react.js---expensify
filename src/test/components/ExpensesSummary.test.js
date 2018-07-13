import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import React from 'react';

test('should render expensesSummary correctly with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={1094}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render expensesSummary correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={10943344}/>);
  expect(wrapper).toMatchSnapshot();
});
