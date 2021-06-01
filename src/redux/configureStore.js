import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxInmutableStateInvariant from "redux-inmutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Add suport for redux dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxInmutableStateInvariant()))
  );
}
