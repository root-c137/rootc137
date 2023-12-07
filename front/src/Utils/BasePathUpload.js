import {BaseUploasPath} from "../index";


export const BaseUploadsPath = () =>
{
    const API_PORT = 8000;
    let BaseURL = "http://localhost:"+API_PORT+"/uploads/";
    if(window.location.origin !== "http://localhost:3000")
        BaseURL = "https://rootc137.com/rootc137/back/public/uploads/";

    return BaseURL;
}


