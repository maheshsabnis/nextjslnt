import sql from 'mssql';
/* DB COnfiguration */
const  config = {
    user: 'sa',
    password: 'MyPass@word',
    server:'127.0.0.1',
    database: 'eShoppingCodi',
    port:1433,
    options:{
        instancename:'127.0.0.1',
        trustedconection:true,
        trustServerCertificate:true
    }
};


export default async function ExecuteQuery(query:string){
    try{
      let connectionPool = await sql.connect(config);  
      let response = await connectionPool.request().query(query);
      return response.recordset;
    }catch(error:any){
        console.log(error);
    }
}

