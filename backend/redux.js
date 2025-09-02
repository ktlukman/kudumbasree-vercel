const redux = require('redux');
import { configureStore, createSlice } from '@reduxjs/toolkit';

const cakeSlice = createSlice({
  name: 'cake',
  initialState: { numOfCakes: 10 },
  reducers: {
    orderCake(state) {
      state.numOfCakes -= 1;
    },
  },
});

export const { orderCake } = cakeSlice.actions;

const store = configureStore({
  reducer: cakeSlice.reducer,
});

console.log('Initial state:', store.getState());

const unsubscribe = store.subscribe(() =>
  console.log('Update state:', store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();



