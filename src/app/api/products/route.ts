import { NextRequest, NextResponse } from "next/server";
import { Database } from "../../../../database/db/database";
import { Product } from "../../../../database/models/products";

export function GET(request:NextRequest){
    const db = new Database();
    const products:Array<Product> = db.getProducts();
    return NextResponse.json(products);
}