

import "./AddProject.scss";
import {HeaderEdit} from "../HeaderEdit/HeaderEdit";
import {Error} from "../Error/Error";
import {EditorMCE} from "../EditorMCE/EditorMCE";
import {useEffect, useState} from "react";
import {EasyFetch} from "../../Utils/EasyFetch";
import {useNavigate} from "react-router-dom";
export const AddProject = () =>
{
    const [title, setTitle] = useState(null);
    const [image, setImage] = useState(null);
    const [front, setFront] = useState(null);
    const [back, setBack] = useState(null);
    const [section, setSection] = useState(null);
    const [status, setStatus] = useState(null);
    const [links, setLinks] = useState(null);
    const [presentation, setPresentation] = useState(null);
    const [error, setError] = useState(false);
    const [sections, setSections] = useState(null);
    const [category, setCategory] = useState(null);
    const [project, setProject] = useState(null);
    const [github, setGithub] = useState(null);
    const [ios, setIOS] = useState(null);
    const [android, setAndroid] = useState(null);
    const [web, setWeb] = useState(null);

    const Navigate = useNavigate();

    const Token = localStorage.getItem('token');

    useEffect(() =>
    {
        getSections();
    }, [])

    const getSections = () =>
    {
        const URL = "sections";
        const Method = "GET";

        EasyFetch(URL, null, Method, Token).then(res =>
        {
            if(res[1] === 200) {
                setSections(res[0].data);
                setSection(res[0].data[0].name);
            }
            else
                setError(res[0].message);
        });
    }

    const addProject = (content) =>
    {
        if(title !== null && front !== null && back !== null
            && section !== null && links !== null
            && status !== null && image !== null && content !== null && category !== null)
        {
            setError(null);
            const URL = "project";
            const Method = "POST";
            const Form = new FormData();
            Form.append("Title", title);
            Form.append("Front", front);
            Form.append("Back", back);
            Form.append("Links", links);
            Form.append("Section", section);
            Form.append("Status", status);
            Form.append("File", image);
            Form.append("Category", category);
            Form.append("Presentation", presentation);

            EasyFetch(URL, Form, Method, Token, "multipart/form-data").then(res =>
            {
                if(res[1] === 200)
                    Navigate('/admin/projects');
                else
                    setError(res[0].message);
            });
        }
        else
            setError("remplissez bien tous les champs.");
    }

    const changeImage = (e) =>
    {
        if(e.target.files)
            setImage(e.target.files[0]);
    }

    return(
        <div className="Edit AddProject">
            <HeaderEdit title="ajouter un projet" returnLink="/admin/projects"/>
            {error && <Error msg={error} /> }

            <div className="AddProject__Top">
                <div className="AddProject__Top__Group">
                    <label htmlFor="Title">Titre</label>
                    <input type="text" name="Title" id="Titre"
                           onChange={e => setTitle(e.currentTarget.value) }/>
                </div>
                <div className="AddProject__Top__Group">
                    <label htmlFor="Status">Status</label>
                    <input type="text" name="Status" id="Status"
                           onChange={e => setStatus(e.currentTarget.value) }/>
                </div>
                <div className="AddProject__Top__Group">
                    <label htmlFor="Section">Section</label>
                    <select name="Section" id="Section"
                            onChange={e => setSection(e.currentTarget.value)}>
                        {
                            sections?.map((s,k) => {
                                return <option key={k} value={s.name}>{s.name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="AddProject__Top__Group">
                    <label htmlFor="Links">Liens</label>
                    <input type="text" name="Links" id="Links"
                           onChange={e => setLinks(e.currentTarget.value) }/>
                </div>
                <div className="AddProject__Top__Group">
                    <label htmlFor="Back">Back</label>
                    <input type="text" name="Back" id="Back"
                           onChange={e => setBack(e.currentTarget.value) }/>
                </div>
                <div className="AddProject__Top__Group">
                    <label htmlFor="Front">Front</label>
                    <input type="text" name="Front" id="Front"
                           onChange={e => setFront(e.currentTarget.value) }/>
                </div>
                <div className="AddProject__Top__Group">
                    <label htmlFor="Category">Categorie</label>
                    <input type="text" name="Category" id="Category"
                           onChange={e => setCategory(e.currentTarget.value) }/>
                </div>
                <div className="AddProject__Top__Group">
                    <label htmlFor="Image">Image</label>
                    <input type="file" name="Image" id="Image"
                           onChange={changeImage}/>
                </div>
                <div className="AddProject__Top__Group">
                    <label htmlFor="Github">Github</label>
                    <input type="text" name="text" id="text" />
                </div>
                <div className="AddProject__Top__Group">
                    <label htmlFor="Web">Web</label>
                    <input type="text" name="Web" id="Web"/>
                </div>
                <div className="AddProject__Top__Group">
                    <label htmlFor="Android">Android</label>
                    <input type="text" name="Android" id="Android"/>
                </div>
            </div>

            <div className="AddProject__Bottom">
                <div className="AddProject__Top__Group">
                    <label htmlFor="Resume">Texte</label>
                    <EditorMCE update={addProject} />
                </div>
            </div>
        </div>
    )
}

