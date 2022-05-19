import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducer/rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}

export default configureStore;
