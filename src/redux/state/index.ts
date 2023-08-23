
/* The state interface type*/

import { ProductInfo } from "../../../database/models/productinfo";

export type ProductState = {
    products:Array<ProductInfo>,
    product:ProductInfo
};

/* Define an initial state */

export const initialState = {
      products:new Array<ProductInfo>,
      product:new ProductInfo(0,'','','','','',0)  
} as ProductState;