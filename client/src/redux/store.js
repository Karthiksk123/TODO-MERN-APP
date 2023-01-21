import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { tabReducers } from "./reducers/tabReducers.js";
import {todosReducers} from './reducers/todosReducers.js'

const reducer = combineReducers({
  todos: todosReducers,
  currenTab:tabReducers
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;