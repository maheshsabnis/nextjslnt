The 'src' directorty
    - Folder Based Routing aka AppRouting

    - The 'app' folder
        - Each Folder for UI MUST have the 'page.tsx'
            - This is the server-side component (by default)
            - Use 'use client' for the client-side Rendreed Component    
        - The 'api' folder that contains the APIs
    - next/image
        - Size Optimization
            - used to serve the correct-size image for each device
                - Web Image Formats
                    - AVIF and WebP
            - VIsual Stability
                - Manage the Layout shift while the image is been downloaded
            - Help in Faster Page loads, using the ViewPort with lazy loading
    - next/link
        - Routing
            - Smooth navigation across component
                - CLient-Side
                - Server-Side
            - The 'Link' object, with 'href' props that is used for navigation
- Next.js 13 Experimental Features
    - appDir
        - The 'app' as fixed name
            - The 'api' folder for All REST APIs aka APIs for Server-Side Code
                - Database access
            - The 'api' folder will have other folder used for 'API' seggrigation with each folder containing 'route.tsx'        

````javascript
const nextConfig = {
    experimental: {
        appDir: true,
      },
}
````

# Working With Next13.js

- Using API Routes with Next.Js request and Response Object Model
    - HTTP Methods
        - Only API ROutes with Node.js (Default)
        - Edge Runtime with Fetch API
    - 'handler' functions upto next 12
        - Request/Response
            - switch..case
                - request.method
                    - GET, POST, PUT, DELETE
    - The 'route.tsx'
        - Present in 'api' folder, conatining the 'sub-folder' for each REST API
            - src/app/api/[Sub-Folder]/route.tsx                
            - The 'next/server' module containing
                - NextRequest
                    - The 'url' object
                        - The 'searchParams' and 'pathname'
                            - USes properties are used for the URL Parameters aka querystring parameters
                        - the 'seacrhParams.get('PARAMETER-NAME')' to read the value
                - NextResponse
            - next/server module is capable of reading the HTTP Request Message
                - New Generation API Routes for GET/POST/PUT/DELETE methods for REST APIs    
             

- Server-Side Components for
    - async component for Direct Server-Side Resource Access
        - NO State Code
    - Dynamic Routes for Increamental Static Regeneration (ISR)                       
- Middlewares
    - Managing REquest and Response
- Redux Integration
    - Most Same as the React-Redux with toolkit
- BFF for Managing Application Complexity with pattern
    - Internal and External Service availabilty to the Front-End Components
    - The Server-Side MUST modify the design (use a pattern) to make sure that the Endpoint MUST be exposed to the Front-end based on the functional requirement 
        - Decouple the FE from BE
- Internationalization             

