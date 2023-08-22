import React from 'react'
import NavigationLink from '../navigation';
import { ProductInfo } from '../../../database/models/productinfo';
import DataTable from '../../../datatable';
import Link from 'next/link';

/* A Helper Method */

async function getData():Promise<Array<ProductInfo>>{
  let products:Array<ProductInfo> = new Array<ProductInfo>();
 /* Incremental Static Regention (ISR) */
  let response = await fetch('http://localhost:3000/api/productinfo', {
    next: {revalidate:10}
  } );
  products = await response.json();

  return products;
}

/* The Server-Side Component */
const page = async() => {
   
  const products = await getData();

  const getSelectedProduct=(prd:ProductInfo)=>{
      alert(JSON.stringify(prd)); 
  }
   
   if(products === undefined) {
        return (
            <div className='alert alert-danger'>
                No Data to Show
            </div>
        );
   }
  return (
    <div className='container'>
       <NavigationLink/> 
      <h1>Hello Server-Side React.js</h1>
       <button>
          <Link href={'/productinfo/add'} className='btn btn-danger'>
              Add New Product
          </Link>
       </button>
        <strong>
             <DataTable dataSource={products}
              ></DataTable>
        </strong>
    </div>
  )
}

export default page
