/* use createApi() function, that will encapsulate the REST API calls and will provide the endpoints those will provide the data by accessing REST APIs  */

/*
  fetchBaseQuery(): Encapsulate the URL for REST API
*/

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { ProductInfo } from '../../../database/models/productinfo';

export const productApi = createApi({
    reducerPath: "productApi",
    refetchOnFocus:true,
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:3000/api/"
    }),
    /* bulilder: EndpointBuilde, this provides following methods
      query<T,U>: Used to Read the data by accessing REST API, this is the Http-GET request
      mutation<T,U>: Ussed to perform Write Operation
      The 'U' is the arguments those are to be passed to the REST APIs
    */
    endpoints:(bulilder)=>({
         /* useGetProductsQuery */
        getProducts: bulilder.query<ProductInfo[],null>({
          query:()=> "productinfo" /* the baseUrl/productinfo */
        }),
         /* usegetProductByProductRowIdQuery */
        getProductByProductRowId: bulilder.query<ProductInfo, {id:number}>({
          query:({id})=>`productinfo?id=${id}`
        }),
        /* usePostProductMutation */
        postProduct: bulilder.mutation<ProductInfo, {product:ProductInfo}>({
          query:(product)=>({
             url:"productinfo",
             method: "POST",
             body:product
          }),
        }),
    }),
});

/* Export the Reducer Hooks from the createAPI */

export const {useGetProductsQuery, useGetProductByProductRowIdQuery,usePostProductMutation} = productApi;
