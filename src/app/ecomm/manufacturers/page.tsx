'use client'
import React, {useEffect, useState} from 'react'
import { Manufacturer } from '../../../../database/models/manufacturer'
import axios from 'axios';
import DataTable from '../../../../datatable';
import EcommNavigation from '../../../../ecommnavigation';

const Page = () => {
  const [manufacturers, setManufacturers] = useState<Array<Manufacturer>>([]); 

  useEffect(()=>{
      axios.get('http://localhost:3000/api/manufacturers')
           .then((response)=>setManufacturers(response.data));     
  });

  return (
    <div className='container'>
        <EcommNavigation/>
        <h1>List of Manufacturers</h1>
        <DataTable dataSource={manufacturers}></DataTable>        
    </div>
  )
}

export default Page
