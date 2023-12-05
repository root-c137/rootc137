import {Navigate} from "react-router";
import {useEffect, useState} from "react";
import {EasyFetch} from "../../Utils/EasyFetch";
import {useNavigate} from "react-router-dom";


export const Protected = ({children}) =>
{
    const [isOK, setisOK] = useState(true);

    useEffect(() =>
    {
        const checkToken = () =>
        {
            const URL = "testtoken";
            const Method = "GET";

            EasyFetch(URL, null, Method, localStorage.getItem('token')).then
            (res =>
            {
                if(res[0].message === "OK")
                    setisOK(true);
                else
                    setisOK(true);
            });
        }

    }, []);

    if(isOK === null)
        return <></>
    else
    return (isOK ? children : <Navigate to='/' replace />)
}
