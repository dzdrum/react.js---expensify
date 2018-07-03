import moment from  'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
  //you can find the type using the redux developer tools under action this is initiated
  //whenever there arent values put in
  const state = filtersReducer(undefined, { type:'@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
  //need to make sure that sortBy is set to amount so we can see if it actually changes
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'this is my filter';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text)
});

test('should set startDate filter', () => {
  const date = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate: date
  }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(date);
});

test('should set endDate filter', () => {
  const date = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate: date
  }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(date);
});
