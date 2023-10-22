import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

//persist 
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:'root',
    storage,
}

// const customMiddle = state =>{
//     return (next)=>{
//         return (action)=>{
//             if (typeof action === 'function') {
//                 action(state.dispatch)
//                 return
//             }
//             return next(action)
//         }
//     }
// }

const persistedReducer = persistReducer(persistConfig,rootReducer)


export const store = configureStore({
    reducer:persistedReducer,
    // middleware: [customMiddle],
})
export const persistor = persistStore(store)
