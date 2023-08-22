/* The Edge Runtime */
export async function GET(request: Request){
    return new Response('Hello Next.js!!!');
}

export async function POST(request: Request) {
      return new Response( JSON.stringify(await request.json()));  
}