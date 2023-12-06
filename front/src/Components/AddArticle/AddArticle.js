import {HeaderEdit} from "../HeaderEdit/HeaderEdit";

import './AddArticle.scss';
import {EditorMCE} from "../EditorMCE/EditorMCE";
import {useEffect, useState} from "react";
import {EasyFetch} from "../../Utils/EasyFetch";
import {Error} from "../Error/Error";
import {useNavigate, useSearchParams} from "react-router-dom";
export const AddArticle = () =>
{
    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [resume, setResume] = useState(null);
    const [text, setText] = useState(null);
    const [error, setError] = useState(null);
    const [section, setSection] = useState(null);
    const [sections, setSections] = useState(null);
    const Navigate = useNavigate();
    const Token = localStorage.getItem('token');

    useEffect(() => {
        getSections();
    }, []);

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
    const addArticle = (content) =>
    {
        if(title !== null && author !== null && resume !== null
            && content !== null)
        {
            setError(null);
            const URL = "article";
            const Method = "POST";
            const Data = {
                "Title" : title,
                "Author" : author,
                "Resume" : resume,
                "Text" : content,
                "Section": section,
                "Image" : "ddd"
            };

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    Navigate('/admin/articles');
                else
                    setError(res[0].message);
            });
        }
        else
            setError("remplissez bien tous les champs.");
    }

    return(
        <div className="Edit AddArticle">
            <HeaderEdit title="ajouter un article" returnLink="/admin/articles"/>
            {error && <Error msg={error} /> }

            <div className="AddArticle__Top">
                <div className="AddArticle__Top__Group">
                    <label htmlFor="Title">Titre</label>
                    <input type="text" name="Title" id="Titre"
                    onChange={e => setTitle(e.currentTarget.value) }/>
                </div>
                <div className="AddArticle__Top__Group">
                    <label htmlFor="Author">Auteur</label>
                    <input type="text" name="Author" id="Author"
                    onChange={e => setAuthor(e.currentTarget.value) }/>
                </div>
                <div className="AddArticle__Top__Group">
                    <label htmlFor="Resume">Résumé</label>
                    <input type="text" name="Resume" id="Resume"
                    onChange={e => setResume(e.currentTarget.value)}/>
                </div>
                <div className="AddArticle__Top__Group">
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
            </div>

            <div className="AddArticle__Bottom">
                <div className="AddArticle__Top__Group">
                    <label htmlFor="Resume">Texte</label>
                    <EditorMCE update={addArticle}/>
                </div>
            </div>
        </div>
    )
}
