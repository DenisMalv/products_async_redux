import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { createProductsThunk, deleteProductsThunk, getProductsThunk } from "./thunk";


// --------------------
const handlePending = (state) => {state.isLoading = true;}
const handleFulfilled = (state,action) =>{
    // state.products = action.payload
    state.isLoading = false
    state.error = ''
}
const handleError = (state,action)=>{
    console.log('action error',action)
    state.isLoading = false
    state.error = action.payload || action.error
}

// --------------------
const handleFulfilledGet = (state,action)=>{
    console.log('action get', action)
    state.products = action.payload
}
const handleFulfilledCreate = (state,action)=>{
    state.products.push(action.payload)
}
const handleFulfilledDelete = (state,action)=>{
    state.products = state.products.filter((el)=> el.id !== action.payload.id)
}

// --------------------
const arrThunks = [createProductsThunk, deleteProductsThunk, getProductsThunk]
const thunksFn = (type)=> arrThunks.map(el=>el[type])
const STATUS = {
    PENDING:'pending',
    FULFILLED:'fulfilled',
    REJECTED:'rejected'
}


export const productsSlice = createSlice({
    name:'products',
    initialState:initialState,
    // reducers:{ /* створює екшени зі слайсу, це не для асинхронщини*/},
    extraReducers:(builder)=>{
        builder
            // .addCase(getProductsThunk.pending,handlePending) 
            .addCase(getProductsThunk.fulfilled,handleFulfilledGet) 
            // .addCase(getProductsThunk.rejected,handleError) 

            // .addCase(createProductsThunk.pending,handlePending)
            .addCase(createProductsThunk.fulfilled,handleFulfilledCreate)
            // .addCase(createProductsThunk.rejected,handleError)

            // .addCase(deleteProductsThunk.pending,handlePending)
            .addCase(deleteProductsThunk.fulfilled,handleFulfilledDelete)
            // .addCase(deleteProductsThunk.rejected,handleError)
            .addMatcher(isAnyOf(
                // getProductsThunk.pending,
                // createProductsThunk.pending,
                // deleteProductsThunk.pending,
                ...thunksFn(STATUS.PENDING)
                ),handlePending)
            .addMatcher(isAnyOf(
                // getProductsThunk.rejected,
                // createProductsThunk.rejected,
                // deleteProductsThunk.rejected,
                ...thunksFn(STATUS.REJECTED)
                ),handleError)
            .addMatcher(isAnyOf(
                // getProductsThunk.fulfilled,
                // createProductsThunk.fulfilled,
                // deleteProductsThunk.fulfilled,
                ...thunksFn(STATUS.FULFILLED)
                ),handleFulfilled)

    }
})

export const productsReducer = productsSlice.reducer