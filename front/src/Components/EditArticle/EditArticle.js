import {HeaderEdit} from "../HeaderEdit/HeaderEdit";
import {useEffect, useState} from "react";
import {EasyFetch} from "../../Utils/EasyFetch";
import {useLocation} from "react-router-dom";

import './EditArticle.scss';
import {EditorMCE} from "../EditorMCE/EditorMCE";

import Image from '../../Images/Articles/Test.jpg';
import {Error} from "../Error/Error";
export const EditArticle = () =>
{
    const Location = useLocation();
    const [id, setID] = useState(null);
    const [article, setArticle] = useState(null);
    const [showTitleEdit, setShowTitleEdit] = useState(false);
    const [showAuthorEdit, setShowAuthorEdit] = useState(false);
    const [showResumeEdit, setShowResumeEdit] = useState(false);
    const [showSectionEdit, setShowSectionEdit] = useState(false);

    const [title, setTitle] = useState(null);
    const [image, setImage] = useState(null);
    const [author, setAuthor] = useState(null);
    const [resume, setResume] = useState(null);
    const [section, setSection] = useState(null);

    const [error, setError] = useState(false);

    const Token = localStorage.getItem('token');


    useEffect(() =>
    {
        setID(Location.pathname.split('/')[3]);
        if(id)
            getArticle();

    }, [id]);

    const getArticle = () =>
    {
        const URL = "article/id/"+id;
        const Method = "GET";

        EasyFetch(URL, null, Method, Token).then(res => {
            if(res[1] === 200)
                setArticle(res[0].data);
        });
    }

    const ShowEdit = (type) =>
    {
        if(type === "title")
            setShowTitleEdit(!showTitleEdit);
        if(type === "author")
            setShowAuthorEdit(!showAuthorEdit);
        if(type === "resume")
            setShowResumeEdit(!showResumeEdit)
        if(type === "section")
            setShowSectionEdit(!showSectionEdit)
    }

    const updateTitle = () =>
    {
        if(title && title !== article?.title && title?.length > 10)
        {
            const URL = "article/"+id+"/title";
            const Method = "PUT";
            const Data = {"title" : title};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setArticle(res[0].data);
                else
                    setError(res[0].message);
            });
        }

        ShowEdit("title");
    }

    const updateResume = () =>
    {
        if(resume === resume !== article?.resume && resume?.length > 20)
        {
            const URL = "article/"+id+"/resume";
            const Method = "PUT";
            const Data = {"resume" : resume};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setArticle(res[0].data);
                else
                    setError(res[0].message);
            });
        }

        ShowEdit('resume');
    }

    const updateAuthor = () =>
    {
        if(author !== null && author !== article?.author && article?.author.length > 3)
        {
            const URL = "article/"+id+"/author";
            const Method = "PUT";
            const Data = {"author" : author};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setArticle(res[0].data);
                else
                    setError(res[0].message);
            });
        }

        ShowEdit('author');
    }

    const updateSection = () =>
    {

    }

    const updateImage = (e) =>
    {

        if(e.target.files)
        {
            console.log('update image...');
            const URL = "article/"+id+"/image";
            const Method = "POST";
            const formData = new FormData();

            if(e.target.files && e.target.files.length > 0)
            {
                formData.append('file', e.target.files[0]);
                EasyFetch(URL, formData, Method, Token, "multipart/form-data").then(res =>
                {
                    if(res[1] === 200)
                    setArticle(res[0].data);
                    else
                        setError(res[0].message);
                });
            }
            else
            setError("fichier vide");
        }
    }

    const updateArticle = (update) =>
    {
        if(article !== null && article !== article?.text)
        {
            const URL = "article/"+id+"/text";
            const Method = "PUT";
            const Data = {"text" : update};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setArticle(res[0].data);
                else
                    setError(res[0].message);
            });
        }

    }

    return (
        <div className="Edit">
            {error && <Error msg={error} />}
            <HeaderEdit title="Article" id={id} returnLink={"/admin/articles"}/>

            <div className="Edit__Infos">

                <div className="Edit__Infos__Part">
                    <div className="Edit__Infos__Group">
                        <label htmlFor="Title">Auteur</label>
                        {
                            !showAuthorEdit ?
                                <span className="Edit__Infos__Group__Value" onClick={() => ShowEdit("author")}>{article?.author}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="Author" id="Author" defaultValue={article?.author}
                                           onChange={e => setAuthor(e.currentTarget.value) }/>
                                   <div>
                                    <button onClick={updateAuthor} className="BEdit_Check"><i className="fa-solid fa-check"></i></button>
                                    <button onClick={() => ShowEdit("author")} className="BEdit_X"><i className="fa-solid fa-xmark"></i></button>
                                   </div>
                                   </div>
                        }
                    </div>
                    <div className="Edit__Infos__Group">
                        <label htmlFor="Section">Section</label>
                        {
                            !showSectionEdit ?
                                <span className="Edit__Infos__Group__Value" onClick={() => ShowEdit("section")}>{article?.section}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="Section" id="Section" defaultValue={article?.section}
                                           onChange={e => setSection(e.currentTarget.value) }/>
                                    <div>
                                        <button onClick={updateSection} className="BEdit_Check"><i className="fa-solid fa-check"></i></button>
                                        <button onClick={() => ShowEdit("section")} className="BEdit_X"><i className="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="Edit__Infos__Part">
                    <div className="Edit__Infos__Group">
                        <label htmlFor="Title">Titre</label>
                        {
                            !showTitleEdit ?
                                <span className="Edit_Infos__Group__Value" onClick={() => ShowEdit("title")}>{article?.title}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="Title" id="Title" defaultValue={article?.title}
                                           onChange={e => setTitle(e.currentTarget.value) }/>
                                    <div>
                                        <button onClick={updateTitle} className="BEdit_Check"><i className="fa-solid fa-check"></i></button>
                                        <button onClick={() => ShowEdit("title")} className="BEdit_X"><i className="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="Edit__Infos__Group">
                        <label htmlFor="Resume">Résumé</label>
                        {
                            !showResumeEdit ?
                                <span className="Edit__Infos__Group__Value" onClick={() => ShowEdit("resume")}>{article?.resume}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="Resume" id="Resume" defaultValue={article?.resume}
                                           onChange={e => setResume(e.currentTarget.value) }/>
                                   <div>
                                    <button onClick={updateResume} className="BEdit_Check"><i className="fa-solid fa-check"></i></button>
                                    <button onClick={() => ShowEdit("resume")} className="BEdit_X"><i className="fa-solid fa-xmark"></i></button>
                                   </div>
                                </div>
                        }
                    </div>
                </div>
            </div>

            <div className="Edit__Banniere">
                <label htmlFor="image">
                    <i className="fa-solid fa-pen-to-square"></i>
                </label>
                <input type="file" name="image" id="image" onChange={updateImage} />
                <div className="Edit__Banniere__Image"
                     style={{
                         backgroundImage : `url(${"http://localhost:8000/uploads/"+article?.image})`,
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'center',
                         backgroundSize: 'cover'
                     }}>
                </div>
            </div>

            <div className="Edit__Text">
                {id && <EditorMCE id={id}  update={updateArticle} defaultTxt={article?.text}/>}
            </div>

        </div>
    )
}

