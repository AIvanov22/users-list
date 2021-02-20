import { applyMiddleware, createStore as _createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer as reducer } from './reducer';

const composeEnhancers = composeWithDevTools({ trace: true });

const createStore = () => _createStore(
  reducer,
  process.env.NODE_ENV === 'development'
	? composeEnhancers(applyMiddleware(thunk))
	: applyMiddleware(thunk),
);

const store = createStore();

export { store };
