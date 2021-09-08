import { createStore,applyMiddleware } from "redux";
//import BallReducer from "../balls/ballReducer";
import rootReducer from "../reducers/rootReducers";
import thunk from 'redux-thunk'
const store=createStore(rootReducer,applyMiddleware(thunk));

export default store;
 