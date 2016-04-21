import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Add middleware to createStore
var createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

// App Reducers
import MessageReducer from 'reducers/message';
import UserReducer from 'reducers/user';

// Combine Reducers
var reducers = combineReducers({
  messageReducer: MessageReducer,
  userReducer: UserReducer
  // more...
});

// Create Store
var store = createStoreWithMiddleware(reducers);

export default store;
