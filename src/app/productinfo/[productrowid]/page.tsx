import NavigationLink from '@/app/navigation'
import React from 'react'
/* WHen using the Dynamic Route, Next.js needs the 
  route-parameter access
*/

/* declare the parameter */
interface pageProps {
    params:{
        /* MUST match with the Dynamic Route folder */
        productrowid:number
    }
}

const page = ({params}:pageProps) => {
  return (
    <div>
       <h1>The Select Product Details</h1>
       <NavigationLink/>
       <strong>
          Received Parameter : {params.productrowid}
       </strong>
    </div>
  )
}

export default page
 