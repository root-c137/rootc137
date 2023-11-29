

export const EasyFetch = (Url, Data = null, Method, Token = null) =>
{
    const API_PORT = 8000;
    const BaseURL = "http://localhost:"+API_PORT+"/api/";
    const Body = Data !== null ? JSON.stringify(Data) : null;
    const CurrentUrl = BaseURL+Url;
    let Status = 0;

    const Header = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer '+Token
    }

    let Init = {
        method : Method,
        headers : Header,
        body : Body
    }


    return fetch(CurrentUrl, Init)
        .then(res=>  {
            Status = res.status;
            return res.json();
        })
        .then(res =>  {
            return [res, Status]})
}

