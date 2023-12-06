

import './AddSection.scss';
import {HeaderEdit} from "../HeaderEdit/HeaderEdit";
import {EditorMCE} from "../EditorMCE/EditorMCE";
import {useState} from "react";
import {Error} from "../Error/Error";
import {EasyFetch} from "../../Utils/EasyFetch";
import {useNavigate} from "react-router-dom";
export const AddSection = () =>
{
    const [Name, setName] = useState(null);
    const [Resume, setResume] = useState(null);
    const [error, setError] = useState(null);
    const Token = localStorage.getItem('token');
    const Navigate = useNavigate();

    const addSection = (presentation) =>
    {
        setError(null);

        if(Name !== null && Resume !== null && presentation !== null)
        {
            const URL = "section";
            const Method = "POST";
            const Data = {
                "name" : Name,
                "resume" : Resume,
                "presentation" : presentation
            };

            EasyFetch(URL, Data, Method, Token).then(res => {
                console.log(res);
                if(res[1] === 200)
                    Navigate('/admin/sections');
                else
                    setError(res[0].message);
            });
        }
        else
        setError("Remplissez bien tous les champs.");
    }
    return(
        <div className="Edit AddSection">
            <HeaderEdit title="ajouter une section" returnLink={"/admin/sections"}/>
            {error && <Error msg={error}/>}

            <div className="AddSection__Top">
                <div className="AddSection__Top__Group">
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="Name" id="Name"
                    onChange={e => setName(e.currentTarget.value) }/>
                </div>
                <div className="AddSection__Top__Group">
                    <label htmlFor="Resume">Résumé</label>
                    <input type="text" name="Resume" id="Resume"
                    onChange={e => setResume(e.currentTarget.value) }/>
                </div>
            </div>
            <div className="AddSection__Bottom">
                <div className="AddSection__Top__Group">
                    <label htmlFor="Resume">Presentation</label>
                    <EditorMCE update={addSection}/>
                </div>
            </div>
        </div>
    )
}

