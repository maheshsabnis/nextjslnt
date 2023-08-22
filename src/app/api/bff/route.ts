import { NextRequest, NextResponse } from "next/server";
import { Manufacturer } from "../../../../database/models/manufacturer";
import { Product } from "../../../../database/models/products";
import axios from "axios";
import { ProductCatalog } from "../../../../database/models/productcatalog";

export async function GET(request:NextRequest){

    /* Read ManufacturerName from URL */
    let {searchParams} = new URL(request.url);
    const manufacturerName = searchParams.get('manufacturerName');

    if(manufacturerName?.length === 0){
        return NextResponse.json('No Data to show becuase ManufacturerName is not passed to service');
    } 


    /* Define Collections */
    let manufacturers:Array<Manufacturer>;
    let products:Array<Product>;
    let productCatalog:Array<ProductCatalog> = new Array<ProductCatalog>();

    /* Get All Manufacturers */

    const manResponse = await axios.get('http://localhost:3000/api/manufacturers');
    manufacturers = manResponse.data;

    /* check if the Manufacturer is presenty based on name */

    let mans = manufacturers.filter((m,i)=>{
        return m.ManufacturerName.trim() === manufacturerName?.trim();
    });
    if(mans.length === 0){
        return NextResponse.json('Invalid Manufacturere Name, please check in the list');
    }

    /* get all products */
    let prdResponse = await axios.get('http://localhost:3000/api/products');
    products = prdResponse.data;

    /* Get the Products bassed on the ManufacturerId */

    let filteredProducts = products.filter((p,i)=>{
        return p.ManufacturerId === mans[0].ManufacturerId;
    });

    /* Send the ProductCatalog as demended by the Front-End */

    for(let p of filteredProducts){
        let tax = p.Price * 0.2;
        let totalPrice = p.Price + tax;

        productCatalog.push(new ProductCatalog(
            p.ProductName,
            mans[0].ManufacturerName,
            p.Price,
            tax,
            totalPrice
        ));
    }
    return NextResponse.json(productCatalog); 
}