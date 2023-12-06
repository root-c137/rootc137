import {Link} from "react-router-dom";
import {TableAdmin} from "../TableAdmin/TableAdmin";
import {useEffect, useState} from "react";
import {EasyFetch} from "../../Utils/EasyFetch";

import './ProjectsListAdmin.scss';
export const ProjectsListAdmin = () =>
{
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        getProjects();
    }, []);
    const getProjects = () =>
    {
        const URL = "projects";
        const Method = "GET";
        const Token = localStorage.getItem("token");

        EasyFetch(URL, null, Method, Token, null, "/").then(res =>
        {
            if(res[1] === 200)
                setProjects(res[0].data);

            console.log(res);
        });
    }

    return(
        <div className="ProjectsListAdmin">
            <h2>Projets</h2>
            <Link className="ProjectsListAdmin__AddLink" to={"/admin/projects/add"}>ajouter un projet</Link>

            <TableAdmin data={projects} thead={["section","category", "title", "front", "back",
            'status', 'image']} path={"/admin/projects/"}/>
        </div>
    )
}