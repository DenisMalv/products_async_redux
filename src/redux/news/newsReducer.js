import {  createSlice, isAnyOf } from "@reduxjs/toolkit"
import { initialState } from "./initial"
import { getNewsSearchThunk, getNewsThunk } from "./thunk"


//              old version 
// export const getNewsThunk = ()=>{
//     return async (dispatch) =>{
//         // const data = await fetch()
//         try {
//             dispatch(newsSlice.actions.fetching())
//             const data = await getTopNews()
//             dispatch(newsSlice.actions.fetchSuccess(data))            
//         } catch (error) {
//             dispatch(newsSlice.actions.fetchError(error))
//         }
//     }
// }

const thunksArray = [getNewsThunk,getNewsSearchThunk]
const thunkStatus = (status) => thunksArray.map((el)=>el[status])
const defaultStatus = {
    pending:'pending',
    fulfilled:'fulfilled',
    rejected:'rejected',
}

const handlePending = (state)=>{
    state.isLoading = true
 }
const handleFulfiled = (state,action)=>{
    console.log(action)
    state.isLoading = false
    state.news = action.payload.articles || []
    state.error= ''
}
const handleRejected = (state, action)=>{
    console.log(action)
    state.isLoading = false
    state.error = action.payload || action.error
}

const newsSlice = createSlice({
    name:"news",
    initialState,
    // reducers:{
    //     fetching:(state,action)=>{
    //         state.isLoading = true

    //     },
    //     fetchSuccess:(state,action)=>{
    //         state.isLoading = false
    //         state.news = action.payload.articles
    //         state.error=""
    //     },
    //     fetchError:(state,action)=>{
    //         state.isLoading = false
    //         state.error = action.payload
    //     }
    // },
    //----------------------------
    // extraReducers:{
    //      [getNewsThunk.pending]:(state)=>{
    //         state.isLoading = true
    //      },
    //      [getNewsThunk.fulfilled]:(state,action)=>{
    //         state.isLoading = false
    //         state.news = action.payload.articles
    //         state.error=""
    //      },
    //      [getNewsThunk.rejected]:(state,action)=>{
    //         state.isLoading = false
    //         state.error = action.payload
    //      }
    // }
    //---------------- builder ----------------
    extraReducers:(builder)=>{
        builder
                // .addCase(getNewsThunk.pending, handlePending)
                .addCase(getNewsThunk.fulfilled,handleFulfiled)
                .addCase(getNewsThunk.rejected,handleRejected)

                // .addCase(getNewsSearchThunk.pending,handlePending)
                .addCase(getNewsSearchThunk.fulfilled,handleFulfiled)
                .addCase(getNewsSearchThunk.rejected,handleRejected)

                .addMatcher(isAnyOf(...thunkStatus(defaultStatus.pending),handlePending))
                // .addMatcher(isAnyOf(...thunkStatus(defaultStatus.rejected),handleRejected))
    }

})


export const newsReducer = newsSlice.reducer