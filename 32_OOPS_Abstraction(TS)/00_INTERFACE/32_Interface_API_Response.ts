// How interface is used in API testing 
// in GET - "body" and "header" are 'optional'
// in PUT - "body" and "header" are 'Important'
// interface. used in API Testing

interface APIReponse{
    statusCode: number;
    body?: string; // ? means optional ref. regex
    headers?: object;
    responseTime:number;
}

const responseDataGET: APIReponse = 
{
    statusCode:200, 
    responseTime: 200
    // body and header are optional in case of GET 
}

const responseDataPOST: APIReponse = 
{
    statusCode:200,
    body : "{'name':'pramod'}",
    responseTime: 200,
    headers : {}
    //body and header are important+mandatory  in case of POST 
}
