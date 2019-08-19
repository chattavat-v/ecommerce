import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import ProductReducer from './ProductReducer';
import OrderReducer from './OrderReducer';
import ContactReducer from './ContactReducer';

const rootReducer = combineReducers({
    orders : OrderReducer,
    products : ProductReducer,
    contact : ContactReducer,
    form : reduxForm
})

export default rootReducer;