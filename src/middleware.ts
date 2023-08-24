/* A Standard NAme to the file is 'middleware.ts' */
/* the file MUST be present on the application root (recommended)
 optionally its can also be present in the 'src' folder instead of root
*/

import { NextRequest, NextResponse } from "next/server";

/* Create a Middleware for checking the Authorization header with basic Authentication */

/* Configure the the Edge Runtime for making sure that the Middleware will be included in each request */
/* This will map itself with nextconfig.js file because the current file name is 'middleware.ts' */
export const config = {
     runtime: 'experimental-edge'
};

/* create a function named 'middleware' */

export function middleware(request: NextRequest){
   console.log('Middleware is invoked Entered');

   /* Check for authorization Header */
   /*
     authorization: 'Basic [UserName]:[Password]'
     authorization: `Token [TOKEN-VALUE]`
   */ 
   const basicAuth = request.headers.get('authorization');
   if(basicAuth) {
     /* read auth values */
     const auth = basicAuth.split(' ')[1]; //UserName]:[Password]
     console.log(`Received values ${JSON.stringify(auth)}`);
    /* Extract UserName and Password */
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');
    /* Check the credentials */
    /* You may have a database call to verify the credentials */
    if(user === 'mahesh' && pwd === "mahesh007") {
        /* Move to the actual requested resource */
        return NextResponse.next();
    } else {
        return new Response('Authorization Header is required', {
            status:401,
            headers:{
                'WWW-Authenticate': 'Basic realm="Secure Area"'
            }
           });
        // const url = request.nextUrl.clone()
        // url.pathname = '/error';
        // return NextResponse.rewrite(url);
    }
   }

   /* If the authorization header is not present then generate error response */

   return new Response('Authorization Header is required', {
    status:401,
    headers:{
        'WWW-Authenticate': 'Basic realm="Secure Area"'
    }
   })

   
}