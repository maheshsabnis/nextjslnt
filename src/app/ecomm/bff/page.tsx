'use client'
import React,{useState} from 'react'
import DataTable from '../../../../datatable'
import EcommNavigation from '../../../../ecommnavigation'
import { ProductCatalog } from '../../../../database/models/productcatalog'
import axios from 'axios'

const Page = () => {
  const [manufacturer,setManufacturer] = useState('');
  const [catalog,setCatalog] = useState<Array<ProductCatalog>>([]);

  const getCatalog=()=>{
      axios.get(`http://localhost:3000/api/bff?manufacturerName=${manufacturer}`)
           .then((response)=>{
            setCatalog(response.data);
           });
  };
  return (
    <div className='container'>
        <EcommNavigation/>
        <div className='form-group'>
            <label htmlFor="ManufacturerName">Enter Manufacturer Name</label>
            <input placeholder='Enter Name' className='form-control'
              value={manufacturer}
              onChange={(evt)=>setManufacturer(evt.target.value)}
            />
            <button className='btn btn-warning'
              onClick={getCatalog}
            >Get Catalog</button>
        </div>
        <hr/>
        <DataTable dataSource={catalog}></DataTable>
    </div>
  )
}

export default Page
