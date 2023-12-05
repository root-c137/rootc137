import {HeaderEdit} from "../HeaderEdit/HeaderEdit";
import {useEffect, useState} from "react";
import {EasyFetch} from "../../Utils/EasyFetch";
import {useLocation} from "react-router-dom";

import './EditArticle.scss';
export const EditArticle = () =>
{
    const Location = useLocation();
    const [id, setID] = useState(null);
    const [article, setArticle] = useState(null);

    useEffect(() =>
    {
        console.log(id);
        setID(Location.pathname.split('/')[3]);
        if(id)
            getArticle();

    }, [id]);

    const getArticle = () =>
    {
        const URL = "article/id/"+id;
        const Method = "GET";
        const Token = localStorage.getItem('token');

        EasyFetch(URL, null, Method, Token).then(res => {
            if(res[1] === 200)
            {
                console.log(res);
                setArticle(res[0].data);
            }
        });
    }

    return (
        <div className="EditArticle">
            <HeaderEdit title="Article" id={id} returnLink={"/admin/articles"}/>

            <div className="EditArticle__Group">
                <label htmlFor="Title">Titre</label>
                <input type="text" name="text" id="text" defaultValue={article?.title}/>
            </div>
            <div className="EditArticle__Group">
                <label htmlFor="Resume">Résumé</label>
                <input type="text" name="text" id="text" defaultValue={article?.resume}/>
            </div>
            <div className="EditArticle__Group">
                <label htmlFor="Resume">Résumé</label>
                <textarea name="text" id="text">
                    {article?.resume}
                </textarea>
            </div>
            <div className="EditArticle__Group">
                <label htmlFor="Author">Author</label>
                <input type="text" name="Author" id="Author" defaultValue={article?.author}/>
            </div>
        </div>
    )
}

