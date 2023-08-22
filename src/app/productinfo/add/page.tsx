'use client'
import React,{useState} from 'react'
import './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ProductInfo } from '../../../../database/models/productinfo';
import NavigationLink from '@/app/navigation';
import Link from 'next/link';

const Page = () => {
  const [product,setProduct] = useState<ProductInfo>(new ProductInfo(0,'','','','','',0));

  const clear=()=>{
    setProduct(new ProductInfo(0,'','','','','',0));
  }
  const save=async()=>{
      let response = await fetch('http://localhost:3000/api/productinfo', {
        method:'POST',
        body:JSON.stringify(product),
        headers:{
            'content-type':'application/json'
        }
      });  
  };


  return (
    <div className='container'>
        <NavigationLink/>
        <div className='form-group'>
            <label htmlFor="">Product Id</label>
            <input type="text" placeholder='Enter Product Id'
              value={product.ProductId} className='form-control'
              onChange={(evt)=>setProduct({...product, ProductId:evt.target.value})}  
            />
        </div>
        <div className='form-group'>
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder='Enter Product Name'
              value={product.ProductName} className='form-control'
              onChange={(evt)=>setProduct({...product, ProductName:evt.target.value})}  
            />
        </div>
        <div className='form-group'>
            <label htmlFor="">Category Name</label>
            <input type="text" placeholder='Enter Category Name'
              value={product.CategoryName} className='form-control'
              onChange={(evt)=>setProduct({...product, CategoryName:evt.target.value})}  
            />
        </div>
        <div className='form-group'>
            <label htmlFor="">Manufacturer</label>
            <input type="text" placeholder='Enter Manufacturer'
              value={product.Manufacturer} className='form-control'
              onChange={(evt)=>setProduct({...product, Manufacturer:evt.target.value})}  
            />
        </div>
        <div className='form-group'>
            <label htmlFor="">Description</label>
            <input type="text" placeholder='Enter Descreiption'
              value={product.Description} className='form-control'
              onChange={(evt)=>setProduct({...product, Description:evt.target.value})}  
            />
        </div>
        <div className='form-group'>
            <label htmlFor="">Base Price</label>
            <input type="text" placeholder='Enter Base Price'
              value={product.BasePrice} className='form-control'
              onChange={(evt)=>setProduct({...product, BasePrice:parseInt(evt.target.value)})}  
            />
        </div>
        <div className='btn-group-lg'>
            <button className="btn btn-warning"
              onClick={clear}
            >Clear</button>
            <button className='btn btn-success'
              onClick={save}
            >Save</button>
        </div>
        <hr/>
        <div className='form-group'>
            <Link href={'/productinfo'}>Back to list</Link>
        </div>
    </div>
  )
}

export default Page
