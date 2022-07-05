import RootReducer from './reducers/combinereducers';
import { createStore ,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store;