
import '../../Pages/Admin/Edit.scss';
import './Admin.scss';
import {useEffect, useState} from "react";
import {Users} from "./Users/Users";
import {MenuAdmin} from "../../Components/MenuAdmin/MenuAdmin";
import {Link, useLocation} from "react-router-dom";
import {EditUser} from "../../Components/EditUser/EditUser";
import {ArticleListAdmin} from "../../Components/ArticleListAdmin/ArticleListAdmin";
import {EditArticle} from "../../Components/EditArticle/EditArticle";
import {EditSections} from "../../Components/EditSections/EditSections";
import {SectionsListAdmin} from "../../Components/SectionsListAdmin/SectionsListAdmin";
import {AddSection} from "../../Components/AddSection/AddSection";
import {AddArticle} from "../../Components/AddArticle/AddArticle";
import {ProjectsListAdmin} from "../../Components/ProjectsListAdmin/ProjectsListAdmin";
import {EditProject} from "../../Components/EditProject/EditProject";
import {AddProject} from "../../Components/AddProject/AddProject";
import {Messages} from "./Messages/Messages";
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
    }, [Location.pathname]);


    const updatePath = (path) =>
    {
        console.log(path);
    }

    return(
        <div className="Admin Container">
            <h1>#admin</h1>
            <Link to="/admin"><i className="fa-solid fa-house" onClick={(updatePath)}></i></Link>
            <MenuAdmin/>

            <main className="Admin__Main">
                {location === "users" && <Users />}
                {location === "articles" && <ArticleListAdmin />}
                {location === "sections" && <SectionsListAdmin />}
                {location === "projects" && <ProjectsListAdmin />}
                {location === "messages" && <Messages />}


                {location.includes("users/") && location.length >= 7
                    ? <EditUser /> : ''}
                {location.includes("articles/") && location.length >= 10 &&
                location !== "articles/add"
                    ? <EditArticle /> : ''}
                {location.includes("sections/") && location.length >= 10 &&
                    location !== "sections/add"
                    ? <EditSections /> : ''}
                {location.includes("projects/") && location.length >= 10 &&
                location !== "projects/add"
                    ? <EditProject /> : ''}

                {location === "sections/add" && <AddSection />}
                {location === "articles/add" && <AddArticle />}
                {location === "projects/add" && <AddProject />}

            </main>
        </div>
    )
}


