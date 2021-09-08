import { createStore } from "redux";
//import BallReducer from "../balls/ballReducer";
import rootReducer from "../reducers/rootReducers";
const store=createStore(rootReducer);
export default store;
