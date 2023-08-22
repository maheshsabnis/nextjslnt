'use client'
import React, {useEffect, useState} from 'react'
import { Product } from '../../../../database/models/products'
import axios from 'axios';
import DataTable from '../../../../datatable';
import EcommNavigation from '../../../../ecommnavigation';

const Page = () => {
  const [products, setProducts] = useState<Array<Product>>([]); 

  useEffect(()=>{
      axios.get('http://localhost:3000/api/products')
           .then((response)=>setProducts(response.data));     
  });

  return (
    <div className='container'>
          <EcommNavigation/>
        <h1>List of Products</h1>
        <DataTable dataSource={products}></DataTable>        
    </div>
  )
}

export default Page
