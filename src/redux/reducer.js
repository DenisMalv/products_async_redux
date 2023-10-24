// import { counterReducer } from "./counter/counterReducer";
import { contactsReducer, } from "./contacts/contactsSlice";
import { counterReducer } from "./counter/counterSlice";
import { newsReducer } from "./news/newsReducer";
import { productsReducer } from "./products/productsSlice";
import { todoReducer } from "./todo/todoReducer";

import { combineReducers } from "redux";






export const rootReducer = combineReducers({
    // counter:counterReducer,
    products:productsReducer,
    todo:todoReducer,
    contacts:contactsReducer,
    news:newsReducer,
})
