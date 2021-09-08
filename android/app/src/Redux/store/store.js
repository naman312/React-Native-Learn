import { createStore } from "redux";
import BallReducer from "../balls/ballReducer";
const store=createStore(BallReducer);
export default store;