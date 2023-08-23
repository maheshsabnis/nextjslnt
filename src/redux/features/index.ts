/* Use createSlice() to create an ActionCreators and the Reducers */
/*
  This function accepts an object with following 3 parameters
  1. name: The name of the slice
  2. initial State
  3. reducers: {COMPLEX-OBJECT}
        - This has action+reducers together

  Properties
  - actions: Returns actions from the slice
  - reducer: Return action creator as reducers        
 */

 /* PayloadAction: This is the object that defines the return value from action i.e. type (THE ACTION THAT IS DISPATCHED) and payload  (INPUT and OUTPUT parameter from the action)*/ 
 import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 

 import { initialState } from "../state";

 import { ProductInfo } from "../../../database/models/productinfo";

 export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        reset:()=>initialState,
        getProductsReducer:(state,action:PayloadAction<Array<ProductInfo>>)=>{
            state.products = action.payload;
        },
        getProductByProductRowId:(state, action:PayloadAction<ProductInfo>)=>{
            state.product = action.payload;
        },
        postProductReducer:(state,action:PayloadAction<ProductInfo>)=>{
            state.products.push(action.payload);
        }
    }
 });
 /* Let's Export actions and reducers */
 /* These are used by component for dispatch */
 export const {reset, getProductsReducer,getProductByProductRowId,postProductReducer} = productSlice.actions;

 /* export all reducers */
 /* This is used by Next.js app to mutate the state in tyhe store for each action that is dispatched */
 export default productSlice.reducer;

