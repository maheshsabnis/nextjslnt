/* define a store */

import { configureStore } from "@reduxjs/toolkit";

/* Listeners those will be used by store to diretly set an action dispatcher so that when a component dispatches an action, the reducer will listen it and help the store to get mutated   */

import { setupListeners } from "@reduxjs/toolkit/dist/query";

/* import reducer
  Since the reducer is created using createSlice, the 'name' of the slice and the 'Reducer' word will be the name of the reducer exported by createSlice() refer index.ts from 'features' folder
*/
import productReducer from './../features'
import { productApi } from "../services";
 

/* import the service created using 'createApi()' refer index.ts from 'services' folder */

export const store = configureStore({
    /* the reducer */
    reducer:{
        productReducer,
        [productApi.reducerPath]: productApi.reducer /* exported from createApi() */
    },
    devTools: process.env.NODE_ENV !== "production",
    /* concat all the middlewares together so that for any action that is dispatched
      the async and async operations will be executed and the response will be mutated in the same store. This is an array of Middlewares, default is Thunk
    */
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({}).concat([productApi.middleware])
});

/* enable listener */
setupListeners(store.dispatch);

/* export the root state and also the dispatch that is configured in the store */
/* return the default state for the component that is subscribing to the store */
export type RootState = ReturnType<typeof store.getState>;
/* The dispatch, used by the component */
export type AppDispatch = typeof store.dispatch;



