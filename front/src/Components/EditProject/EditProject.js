import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {EasyFetch} from "../../Utils/EasyFetch";
import {Error} from "../Error/Error";
import {HeaderEdit} from "../HeaderEdit/HeaderEdit";
import {EditorMCE} from "../EditorMCE/EditorMCE";
import {BaseUploadsPath} from "../../Utils/BasePathUpload";


export const EditProject = () =>
{

    const Location = useLocation();
    const [id, setID] = useState(null);
    const [project, setProject] = useState(null);
    const [showTitleEdit, setShowTitleEdit] = useState(false);
    const [showFrontEdit, setShowFrontEdit] = useState(false);
    const [showBackEdit, setShowBackEdit] = useState(false);
    const [showSectionEdit, setShowSectionEdit] = useState(false);
    const [showPresentationEdit, setShowPresentation] = useState(false);
    const [showStatusEdit, setShowStatusEdit] = useState(false);
    const [showLinksEdit, setShowLinksEdit] = useState(false);
    const [showGithubEdit, setShowGithubEdit] = useState(false);
    const [showiOSEdit, setShowiOSEdit] = useState(false);
    const [showAndroidEdit, setShowAndroidEdit] = useState(false);
    const [showWebEdit, setShowWebEdit] = useState(false);

    const [title, setTitle] = useState(null);
    const [image, setImage] = useState(null);
    const [front, setFront] = useState(null);
    const [back, setBack] = useState(null);
    const [section, setSection] = useState(null);
    const [status, setStatus] = useState(null);
    const [links, setLinks] = useState(null);
    const [github, setGithub] = useState(null);
    const [ios, setIos] = useState(null);
    const [android, setAndroid] = useState(null);
    const [web, setWeb] = useState(null);
    const [presentation, setPresentation] = useState(null);
    const [error, setError] = useState(false);

    const Token = localStorage.getItem('token');


    useEffect(() =>
    {
        setID(Location.pathname.split('/')[3]);
        if(id)
            getProject();

    }, [id]);

    const getProject = () =>
    {
        const URL = "project/"+id;
        const Method = "GET";

        EasyFetch(URL, null, Method, Token).then(res => {
            if(res[1] === 200)
                setProject(res[0].data);
            else
                setError(res[0].message);
        });
    }

    const ShowEdit = (type) =>
    {
        if(type === "title")
            setShowTitleEdit(!showTitleEdit);
        if(type === "front")
            setShowFrontEdit(!showFrontEdit);
        if(type === "back")
            setShowBackEdit(!showBackEdit)
        if(type === "section")
            setShowSectionEdit(!showSectionEdit)
        if(type === "status")
            setShowStatusEdit(!showStatusEdit)
        if(type === "links")
            setShowLinksEdit(!showLinksEdit)
        if(type === "github")
            setShowGithubEdit(!showGithubEdit)
        if(type === "ios")
            setShowiOSEdit(!showiOSEdit)
        if(type === "android")
            setShowAndroidEdit(!showAndroidEdit)
        if(type === "web")
            setShowWebEdit(!showWebEdit)
    }

    const updateTitle = () =>
    {
        if(title && title !== project?.title)
        {
            const URL = "project/"+id+"/title";
            const Method = "PUT";
            const Data = {"title" : title};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setProject(res[0].data);
                else
                    setError(res[0].message);
            });
        }

        ShowEdit("title");
    }


    const updateFront = () =>
    {
        if(front !== null && front !== project?.front)
        {
            const URL = "project/"+id+"/front";
            const Method = "PUT";
            const Data = {"front" : front};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setProject(res[0].data);
                else
                    setError(res[0].message);
            });
        }

        ShowEdit('front');
    }

    const updateBack = () =>
    {
        if(back !== null && back !== project?.back)
        {
            const URL = "project/"+id+"/back";
            const Method = "PUT";
            const Data = {"back" : back};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setProject(res[0].data);
                else
                    setError(res[0].message);
            });
        }

        ShowEdit('back');
    }

    const updateSection = () =>
    {
        if(section !== null && section !== project?.section)
        {
            const URL = "project/"+id+"/section";
            const Method = "PUT";
            const Data = {"section" : section};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setProject(res[0].data);
                else
                    setError(res[0].message);
            });
        }

        ShowEdit('section');
    }
    const updateStatus = () =>
    {
        if(status !== null && status !== project?.status)
        {
            const URL = "project/"+id+"/status";
            const Method = "PUT";
            const Data = {"status" : status};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setProject(res[0].data);
                else
                    setError(res[0].message);
            });
        }

        ShowEdit('status');
    }
    const updateLinks = () =>
    {
        if(links !== null && links !== project?.links)
        {
            const URL = "project/"+id+"/links";
            const Method = "PUT";
            const Data = {"links" : links};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setProject(res[0].data);
                else
                    setError(res[0].message);
            });
        }

        ShowEdit('links');
    }

    const updateGithub = () =>
    {
        if(github !== null && github !== project?.github)
        {
            const URL = "project/"+id+"/github";
            const Method = "PUT";
            const Data = {"github" : github};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setProject(res[0].data);
                else
                    setError(res[0].message);
            });
        }

        ShowEdit('github');
    }

    const updateWeb = () =>
    {
        if(web !== null && web !== project?.web)
        {
            const URL = "project/"+id+"/web";
            const Method = "PUT";
            const Data = {"web" : web};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setProject(res[0].data);
                else
                    setError(res[0].message);
            });
        }

        ShowEdit('web');
    }

    const updateiOS = () =>
    {
        if(ios !== null && ios !== project?.ios)
        {
            const URL = "project/"+id+"/ios";
            const Method = "PUT";
            const Data = {"ios" : ios};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setProject(res[0].data);
                else
                    setError(res[0].message);
            });
        }

        ShowEdit('ios');
    }

    const updateAndroid = () =>
    {
        if(android !== null && android !== project?.android)
        {
            const URL = "project/"+id+"/android";
            const Method = "PUT";
            const Data = {"android" : android};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setProject(res[0].data);
                else
                    setError(res[0].message);
            });
        }

        ShowEdit('android');
    }


    const updateImage = (e) =>
    {

        if(e.target.files)
        {
            const URL = "project/"+id+"/image";
            const Method = "POST";
            const formData = new FormData();

            if(e.target.files && e.target.files.length > 0)
            {
                formData.append('file', e.target.files[0]);
                EasyFetch(URL, formData, Method, Token, "multipart/form-data").then(res =>
                {
                    if(res[1] === 200)
                        setProject(res[0].data);
                    else
                        setError(res[0].message);
                });
            }
            else
                setError("fichier vide");
        }
    }


    const updatePresentation = (update) =>
    {
        if(project !== null && project !== project?.presentation)
        {
            const URL = "project/"+id+"/presentation";
            const Method = "PUT";
            const Data = {"presentation" : update};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setProject(res[0].data);
                else
                    setError(res[0].message);
            });
        }
    }

    return (
        <div className="Edit">
            {error && <Error msg={error} />}
            <HeaderEdit title="Projet" id={id} returnLink={"/admin/projects"}/>

            <div className="Edit__Infos">

                <div className="Edit__Infos__Part">
                    <div className="Edit__Infos__Group">
                        <label htmlFor="Title">Titre</label>
                        {
                            !showTitleEdit ?
                                <span className="Edit__Infos__Group__Value" onClick={() => ShowEdit("title")}>{project?.title}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="Title" id="Title" defaultValue={project?.title}
                                           onChange={e => setTitle(e.currentTarget.value) }/>
                                    <div>
                                        <button onClick={updateTitle} className="BEdit_Check"><i className="fa-solid fa-check"></i></button>
                                        <button onClick={() => ShowEdit("title")} className="BEdit_X"><i className="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="Edit__Infos__Group">
                        <label htmlFor="Section">Section</label>
                        {
                            !showSectionEdit ?
                                <span className="Edit__Infos__Group__Value" onClick={() => ShowEdit("section")}>{project?.section}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="Section" id="Section" defaultValue={project?.section}
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
                        <label htmlFor="Front">front</label>
                        {
                            !showFrontEdit ?
                                <span className="Edit_Infos__Group__Value" onClick={() => ShowEdit("front")}>{project?.front}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="Front" id="Front" defaultValue={project?.front}
                                           onChange={e => setFront(e.currentTarget.value) }/>
                                    <div>
                                        <button onClick={updateFront} className="BEdit_Check"><i className="fa-solid fa-check"></i></button>
                                        <button onClick={() => ShowEdit("front")} className="BEdit_X"><i className="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="Edit__Infos__Group">
                        <label htmlFor="Back">Back</label>
                        {
                            !showBackEdit ?
                                <span className="Edit__Infos__Group__Value" onClick={() => ShowEdit("back")}>{project?.back}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="Back" id="Back" defaultValue={project?.back}
                                           onChange={e => setBack(e.currentTarget.value) }/>
                                    <div>
                                        <button onClick={updateBack} className="BEdit_Check"><i className="fa-solid fa-check"></i></button>
                                        <button onClick={() => ShowEdit("back")} className="BEdit_X"><i className="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="Edit__Infos__Group">
                        <label htmlFor="Links">iOS</label>
                        {
                            !showiOSEdit ?
                                <span className="Edit__Infos__Group__Value" onClick={() => ShowEdit("ios")}>{project?.ios}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="ios" id="ios" defaultValue={project?.ios}
                                           onChange={e => setIos(e.currentTarget.value) }/>
                                    <div>
                                        <button onClick={updateiOS} className="BEdit_Check"><i className="fa-solid fa-check"></i></button>
                                        <button onClick={() => ShowEdit("ios")} className="BEdit_X"><i className="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="Edit__Infos__Group">
                        <label htmlFor="Links">Android</label>
                        {
                            !showAndroidEdit ?
                                <span className="Edit__Infos__Group__Value" onClick={() => ShowEdit("android")}>{project?.android}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="android" id="android" defaultValue={project?.android}
                                           onChange={e => setAndroid(e.currentTarget.value) }/>
                                    <div>
                                        <button onClick={updateAndroid} className="BEdit_Check"><i className="fa-solid fa-check"></i></button>
                                        <button onClick={() => ShowEdit("android")} className="BEdit_X"><i className="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="Edit__Infos__Part">
                    <div className="Edit__Infos__Group">
                        <label htmlFor="Status">Status</label>
                        {
                            !showStatusEdit ?
                                <span className="Edit_Infos__Group__Value" onClick={() => ShowEdit("status")}>{project?.status}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="Status" id="Status" defaultValue={project?.status}
                                           onChange={e => setStatus(e.currentTarget.value) }/>
                                    <div>
                                        <button onClick={updateStatus} className="BEdit_Check"><i className="fa-solid fa-check"></i></button>
                                        <button onClick={() => ShowEdit("Status")} className="BEdit_X"><i className="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="Edit__Infos__Group">
                        <label htmlFor="Links">Liens</label>
                        {
                            !showLinksEdit ?
                                <span className="Edit__Infos__Group__Value" onClick={() => ShowEdit("links")}>{project?.links}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="Links" id="Links" defaultValue={project?.links}
                                           onChange={e => setLinks(e.currentTarget.value) }/>
                                    <div>
                                        <button onClick={updateLinks} className="BEdit_Check"><i className="fa-solid fa-check"></i></button>
                                        <button onClick={() => ShowEdit("links")} className="BEdit_X"><i className="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="Edit__Infos__Group">
                        <label htmlFor="Links">Github</label>
                        {
                            !showGithubEdit ?
                                <span className="Edit__Infos__Group__Value" onClick={() => ShowEdit("github")}>{project?.github}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="github" id="github" defaultValue={project?.github}
                                           onChange={e => setGithub(e.currentTarget.value) }/>
                                    <div>
                                        <button onClick={updateGithub} className="BEdit_Check"><i className="fa-solid fa-check"></i></button>
                                        <button onClick={() => ShowEdit("github")} className="BEdit_X"><i className="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="Edit__Infos__Group">
                        <label htmlFor="Links">Web</label>
                        {
                            !showWebEdit ?
                                <span className="Edit__Infos__Group__Value" onClick={() => ShowEdit("web")}>{project?.web}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="web" id="web" defaultValue={project?.web}
                                           onChange={e => setWeb(e.currentTarget.value) }/>
                                    <div>
                                        <button onClick={updateWeb} className="BEdit_Check"><i className="fa-solid fa-check"></i></button>
                                        <button onClick={() => ShowEdit("web")} className="BEdit_X"><i className="fa-solid fa-xmark"></i></button>
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
                         backgroundImage : `url(${BaseUploadsPath()+project?.image})`,
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'center',
                         backgroundSize: 'cover'
                     }}>
                </div>
            </div>

            <div className="Edit__Text">
                {id ? <EditorMCE id={id}  update={updatePresentation} defaultTxt={project?.presentation}/> : ''}
            </div>

        </div>
    )
}