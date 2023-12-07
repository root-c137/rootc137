

import './EditSections.scss';
import {Error} from "../Error/Error";
import {HeaderEdit} from "../HeaderEdit/HeaderEdit";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {EasyFetch} from "../../Utils/EasyFetch";
import {EditorMCE} from "../EditorMCE/EditorMCE";
export const EditSections = () =>
{
    const [id, setID] = useState(null);
    const [section, setSection] = useState(null);
    const [error, setError] = useState(null);
    const [showNameEdit, setShowNameEdit] = useState(null);
    const [showResumeEdit, setShowResumeEdit] = useState(null);
    const [showPresentationEdit, setShowPresentationEdit] = useState(null);
    const [name, setName] = useState(null);
    const [resume, setResume] = useState(null);
    const [presentation, setPresentation] = useState(null);
    const Location = useLocation();
    const Token = localStorage.getItem('token');

    useEffect(() =>
    {
        setID(Location.pathname.split('/')[3]);
        if(id)
            getSection();

    }, [id]);
    const getSection = () =>
    {
        const URL = "section/"+id;
        const Method = "GET";

        EasyFetch(URL, null, Method, Token).then(res =>
        {
            console.log(res);
            if(res[1] === 200)
                setSection(res[0].data);
            else
                setError(res[0].message);
        })
    }

    const ShowEdit = (type) =>
    {
        setError(null);
        if(type === "name")
            setShowNameEdit(!showNameEdit);
        if(type === "resume")
            setShowResumeEdit(!showResumeEdit);
        if(type === "presentation")
            setShowPresentationEdit(!showPresentationEdit)
    }

    const updateName = () =>
    {

        if(name !== null && name !== section?.name)
        {
            const URL = "section/"+id+"/name";
            const Method = "PUT";
            const Data = {"name" : name};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setSection(res[0].data);
                else
                    setError(res[0].message);
            });

        }
        ShowEdit('name');
    }
    const updateResume = () =>
    {
        if(resume !== null && resume !== section?.resume)
        {
            const URL = "section/"+id+"/resume";
            const Method = "PUT";
            const Data = {"resume" : resume};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setSection(res[0].data);
                else
                    setError(res[0].message);
            });
        }

        ShowEdit('resume');
    }
    const updatePresentation = (update) =>
    {
        if(update !== null && update !== section?.presentation)
        {
            const URL = "section/"+id+"/presentation";
            const Method = "PUT";
            const Data = {"presentation" : update};

            EasyFetch(URL, Data, Method, Token).then(res =>
            {
                if(res[1] === 200)
                    setSection(res[0].data);
                else
                    setError(res[0].message);
            });
        }

        ShowEdit('presentation');
    }

    return(
        <div className="Edit">
            {error && <Error msg={error} />}
            <HeaderEdit title="Sections" id={id} returnLink={"/admin/sections"}/>

            <div className="Edit__Infos">

                <div className="Edit__Infos__Part">
                    <div className="Edit__Infos__Group">
                        <label htmlFor="Name">Name</label>
                        {
                            !showNameEdit ?
                                <span className="Edit__Infos__Group__Value" onClick={() => ShowEdit("name")}>{section?.name}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="Name" id="Name" defaultValue={section?.name}
                                           onChange={e => setName(e.currentTarget.value) }/>
                                    <div>
                                        <button onClick={updateName} className="BEdit_Check"><i className="fa-solid fa-check"></i></button>
                                        <button onClick={() => ShowEdit("name")} className="BEdit_X"><i className="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="Edit__Infos__Part">
                    <div className="Edit__Infos__Group">
                        <label htmlFor="Resume">Resume</label>
                        {
                            !showResumeEdit ?
                                <span className="Edit__Infos__Group__Value" onClick={() => ShowEdit("resume")}>{section?.resume}</span>
                                :
                                <div className="Edit__Infos__Group__Edit">
                                    <input type="text" name="Resume" id="Resume" defaultValue={section?.resume}
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

            <div className="Edit__Text">
                {id && <EditorMCE id={id}
                                  update={updatePresentation}
                                  defaultTxt={section?.presentation}/>}
            </div>

        </div>
    )
}