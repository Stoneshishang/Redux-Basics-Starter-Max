const redux =  require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  if(action.type === 'INC_COUNTER'){
    // state.counter++;  this is NOT good, don't mutate the original state
    return {
      ...state, // copy the origin state. 
      counter: state.counter + 1  // over write the counter property in origin state
                                  // and store the counter into new counter property.
    };
  }
  if(action.type === 'ADD_COUNTER'){
    // state.counter++;
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState()); 

// Subscription 
store.subscribe(()=>{
  console.log('[Subscription]', store.getState());
})

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());


