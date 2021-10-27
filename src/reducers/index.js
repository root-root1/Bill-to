import { combineReducers } from "redux";
import customers from '../reducers/customer';
import activeSelectedUserReducer from './reducerActiveUser';
import products from "./product";

const rootReducer = combineReducers({
    customers,
    activeSelectedUserReducer,
    products,
})

export default rootReducer;
