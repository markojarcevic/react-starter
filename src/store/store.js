import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'store/rootReducer';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    enhancer,
  );
}

export default configureStore;
