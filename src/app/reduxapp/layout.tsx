import { Providers } from "@/redux/providers";

export const metadata ={
    title: 'Redux App with Next.js',
    description: "Using Redux un Next.js app"
}

/* HoC 
  This will render the page (page.tsx) component of the current folder
  The 'children' represents the 'page' component and all of its children as well as all page components in its sub-folder 
*/
export default function RootLayout({
    children,
}:{
    children:React.ReactNode
}) {
    return (
         <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
         </html>   
    )
}