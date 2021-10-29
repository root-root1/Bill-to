import { combineReducers } from "redux";
import customers from '../reducers/customer';
import activeSelectedUserReducer from './reducerActiveUser';
import products from "./product";
import activeProductReducer from "./activeProductReducer";

const rootReducer = combineReducers({
    customers,
    activeSelectedUserReducer,
    products,
    activeProductReducer
})

export default rootReducer;
