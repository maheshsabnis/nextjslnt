import Link from 'next/link'
import React from 'react'

const EcommNavigation = () => {
  return (
    <div className='container'>
        <table className='table table-bordered table-striped'>
            <tbody>
                <tr>
                    <td>
                        <Link href={'/ecomm'}>Ecommerce</Link>
                    </td>
                    <td>
                        <Link href={'/ecomm/manufacturers'}>Manufacturerds</Link>
                    </td>
                    <td>
                        <Link href={'/ecomm/products'}>Products</Link>
                    </td>
                    <td>
                        <Link href={'/ecomm/bff'}>Product Catalog</Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default EcommNavigation
