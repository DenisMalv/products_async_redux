import { createReducer } from "@reduxjs/toolkit"
import { todoInitialState } from "./todoInitialState"
import { createTodo } from "./actions"


export const todoReducer = createReducer(todoInitialState,{
                       [createTodo]:(state,action)=>(
                        // {...state,
                        // todo:[...state.todo,{...action.payload}]
                        // }
                        state.todo.push(action.payload)
                    )
                })


// export const todoReducer = (state=todoInitialState,action) =>{
//     switch (action.type){
//         case CREATETODO: 
//             return {
//                 ...state,
//                 todo:[...state.todo,{...action.payload}]
//             }

//         default:
//             return state
//     }
// }

