import {TableAdmin} from "../TableAdmin/TableAdmin";

import './SectionsListAdmin.scss';
import {EasyFetch} from "../../Utils/EasyFetch";
import {useEffect, useState} from "react";
import {Error} from "../Error/Error";
import {Link} from "react-router-dom";

export const SectionsListAdmin = () =>
{
    const [sections, setSections] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getSections();

    }, []);
    const getSections = () =>
    {
        const URL = "sections";
        const Method = "GET";
        const Token = localStorage.getItem("token");

        EasyFetch(URL, null, Method, Token).then(res =>
        {
            if(res[1] === 200)
                setSections(res[0].data);
            else
                setError(res[0].message);

            console.log(res);
        });
    }

    return(
        <div className="SectionsListAdmin">
            <h2>Sections</h2>
            <Link className="SectionsListAdmin__AddLink" to={"/admin/sections/add"}>ajouter une section</Link>

            {error && <Error msg={error}/>}
            <TableAdmin data={sections} thead={["name", "resume"]}
                        path={"/admin/sections/"}/>
        </div>
    )
}


