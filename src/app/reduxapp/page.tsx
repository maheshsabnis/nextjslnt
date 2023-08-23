'use client'

import React from 'react'

/* The cusom hook for dispatch and the subscription to store */
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

import { useGetProductsQuery } from '@/redux/services'
import { ProductState } from '@/redux/state'

import { getProductsReducer, getProductByProductRowId, postProductReducer } from '@/redux/features'
import { ProductInfo } from '../../../database/models/productinfo'


const Page = () => {
  const products = useAppSelector((state)=>state.productReducer.products);
  const dispatch = useAppDispatch();

  /* Directly use the useGetProductsQuery to get the data */

 
  
  const {isLoading, isFetching,data,error} = useGetProductsQuery(null);
  
  return (
    <div className='container'>
        {
            error?(
                <strong>No data</strong>
            ):isLoading || isFetching ? (
                <strong>
                    Loading
                </strong>
            ):data ? (
                JSON.stringify(data)
            ):null
        }
    </div>
  )
}

export default Page
