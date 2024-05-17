import { compose, applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import counterReducer from "./features/Counter/reducer";

let rootReducer = combineReducers({
  value: counterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
