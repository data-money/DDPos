import { createStore, combineReducers } from 'redux';

import todos from './services/todos/reducer';
import purchase from './services/purchase/reducer';

const reducer = combineReducers({
  todos: todos,
  purchase: purchase,
})

export default createStore(reducer);
