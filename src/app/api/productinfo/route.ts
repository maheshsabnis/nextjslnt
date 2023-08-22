import { NextRequest, NextResponse } from "next/server";
import ExecuteQuery from "../../../../dataaccess/db";
import { ProductInfo } from "../../../../database/models/productinfo";
export async function GET(request:NextRequest) {
    /* This method will be used for getall as well as getbyid */

    let {searchParams} = new URL(request.url);
    /* read the URL parameter if any */
    const id = searchParams.get('id');
    if(id === null || id===undefined) {
        /* read all */
        const data = await ExecuteQuery('Select * from ProductInfo');
        return NextResponse.json(data);
    } 
    /* read based on id */
    const data = await ExecuteQuery(`Select * from ProductInfo where ProductRowId=${parseInt(id)}`);
    return NextResponse.json(data);
}


export async function POST(request:NextRequest) {
    /* Read Body */
    const body = await request.json();
    const prd:ProductInfo = new ProductInfo(
        0, body.ProductId, body.ProductName,
        body.CategoryName, body.Manufacturer,
        body.Description, parseInt(body.BasePrice)
    ); 

    const query:string = `
      Insert into ProductInfo (ProductId, ProductName, CategoryName, Manufacturer, Description, BasePrice) values (
        '${prd.ProductId}', '${prd.ProductName}', '${prd.CategoryName}', '${prd.Manufacturer}', '${prd.Description}', ${prd.BasePrice}
      )
    `; 
    const data = await ExecuteQuery(query);
    return NextResponse.json(data);
}
