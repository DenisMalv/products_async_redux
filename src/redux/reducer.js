// import { counterReducer } from "./counter/counterReducer";
import { contactsReducer, } from "./contacts/contactsSlice";
import { counterReducer } from "./counter/counterSlice";
import { newsReducer } from "./news/newsReducer";
import { todoReducer } from "./todo/todoReducer";

import { combineReducers } from "redux";






export const rootReducer = combineReducers({
    // counter:counterReducer,
    counter:counterReducer,
    todo:todoReducer,
    contacts:contactsReducer,
    news:newsReducer,
})
