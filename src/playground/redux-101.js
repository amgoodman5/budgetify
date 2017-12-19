import { createStore } from 'redux';
console.log('running')
const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());

// Actions - object that gets sent to a store
//walk, stop walking, sit, work stope working
//increment
//decrement
//reset
store.dispatch(
  {
    type: 'INCREMENT'
  }
);

// I'd like to increment the count
// I'd like to reset the count to zero
