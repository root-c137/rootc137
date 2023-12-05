

import './Admin.scss';
import {useEffect, useState} from "react";
import {Users} from "./Users/Users";
import {MenuAdmin} from "../../Components/MenuAdmin/MenuAdmin";
import {useLocation} from "react-router-dom";
import {EditUser} from "../../Components/EditUser/EditUser";
import {ArticleListAdmin} from "../../Components/ArticleListAdmin/ArticleListAdmin";
import {EditArticle} from "../../Components/EditArticle/EditArticle";
export const Admin = () =>
{
    const Location = useLocation();
    const [location, setLocation] = useState("");

    useEffect(() => {

        const currentLocation = Location.pathname.split('/');

        if(currentLocation[currentLocation.length - 1] === "admin")
            setLocation("home");
        else
        {
            if(currentLocation.length > 3 &&
                currentLocation[currentLocation.length - 1].length > 0)
            {
                setLocation(currentLocation[currentLocation.length - 2] + "/" +
                    currentLocation[currentLocation.length - 1]);
            }
            else if(currentLocation[currentLocation.length - 1].length === 0)
                setLocation(currentLocation[currentLocation.length - 2]);
            else
                setLocation(currentLocation[currentLocation.length - 1]);
        }

        console.log(currentLocation);
    }, [Location.pathname]);


    const updatePath = (path) =>
    {
        console.log(path);
    }

    return(
        <div className="Admin Container">
            <h1>#admin</h1>
            <i className="fa-solid fa-house" onClick={(updatePath)}></i>
            <MenuAdmin/>

            <main className="Admin__Main">
                {location === "users" && <Users />}
                {location === "articles" && <ArticleListAdmin />}

                {location.includes("users/") && location.length >= 7
                    ? <EditUser /> : ''}
                {location.includes("articles/") && location.length >= 10
                    ? <EditArticle /> : ''}
            </main>
        </div>
    )
}


