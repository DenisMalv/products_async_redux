import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

// Step 1 create initState in store
const initialState = [
    {
        id: nanoid(3),
        name: 'First Contact',
        number: '+420122770',
    },
]

//Step 2 create nameSlice 
export const contactsSlice = createSlice({
    name:"contacts",                        //2.1 name key in Store
    initialState:initialState,              //2.2 use init state in store
    reducers:{                              //2.3 create sync reducers

      //nameAction:(state,action)=>{       //increment:(state,action)=>{
      //state = action.payload             //    state.total += action.payload
      //}                                  //},
      
      addContact:(state,action)=>{state.push(action.payload)},
      deleteContact:(state,action)=>state=action.payload,

      },

    extraReducers:{                         //2.4 create async reducers

    }
})

//Step 3 create reducer from contantSlice 
export const contactsReducer = contactsSlice.reducer

//Step 4 destruct actions from contactSlice
export const { /*actions */ addContact,deleteContact} = contactsSlice.actions

//Step 5 selectors 