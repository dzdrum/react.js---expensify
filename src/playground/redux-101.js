import {createStore} from 'redux'


const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setcount = ({countValue = 0} = {}) => ({
    type: 'SET',
    countValue
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducers
//1. Reducers are pure functions (output is only determined by input)
//2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.countValue
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setcount({countValue:5}));
