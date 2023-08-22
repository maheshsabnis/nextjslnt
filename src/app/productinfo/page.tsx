import React from 'react'
import NavigationLink from '../navigation';

import ExecuteQuery from '../../../dataaccess/db';
/* The Server-Side Component */
const page = async() => {
  const response = await ExecuteQuery('select * from Category');  

   if(response === undefined) {
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
      {
        <strong>
            Data Receiced from Server {JSON.stringify(response)}
        </strong>
      }
    </div>
  )
}

export default page
