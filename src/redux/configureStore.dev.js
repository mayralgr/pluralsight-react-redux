import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxInmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Add suport for redux dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxInmutableStateInvariant())) // here goes the middlewares
  );
}
