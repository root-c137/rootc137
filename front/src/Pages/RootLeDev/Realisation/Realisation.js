

import './Realisation.scss';
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import ImgTest from '../../../Images/Articles/Test.jpg';
import {EasyFetch} from "../../../Utils/EasyFetch";
import parse from "html-react-parser";
import {BaseUploadsPath} from "../../../Utils/BasePathUpload";

export const Realisation = () =>
{
    const Location = useLocation();
    const [slug, setSlug] = useState(null);
    const [realisation, setRealisation] = useState(null);
    const Navigate = useNavigate();

    useEffect(() => {
        setSlug(Location.pathname.split('/')[3]);
        if(slug)
            getRealisation();

    }, [slug]);

    const getRealisation = () =>
    {
        const URL = "project/"+slug;
        const Method = "GET";

        EasyFetch(URL, null, Method, null, null, "/").then(res => {
            console.log(res);
            if(res[1] === 200)
                setRealisation(res[0].data);
        });
    }

    return(
        <div className="RootLeDev__Realisation">
            <h3>{realisation?.title}</h3>
            <div className="RootLeDev__Realisation__Banniere"
                 style={{
                     backgroundImage : `url(${BaseUploadsPath()+realisation?.image})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center',
                     backgroundSize: 'cover'
                 }}/>

            <div className="RootLeDev__Realisation__Infos">

                <div className="RootLeDev__Realisation__Infos__Left">
                    <table>
                        <tbody>
                            <tr>
                                <td className="Table_Title">status</td>
                                <td>{realisation?.status}</td>
                            </tr>
                            <tr>
                                <td className="Table_Title">front</td>
                                <td>{realisation?.front}</td>
                            </tr>
                            <tr>
                                <td className="Table_Title">back</td>
                                <td>{realisation?.back}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="RootLeDev__Realisation__Infos__Right">
                    {realisation?.web && <a href={realisation?.web}><i className="fa-solid fa-globe"></i></a>}
                    {realisation?.android && <a href={realisation?.android}><i className="fa-brands fa-google-play"></i></a>}
                    {realisation?.ios && <><a href={realisation?.ios}><i className="fa-brands fa-apple"></i></a></>}
                    {realisation?.github && <a href={realisation?.github}><i className="fa-brands fa-github"></i></a>}
                </div>
            </div>

            <section className="RootLeDev__Realisation__Presentation">
                <h4>Présentation</h4>
                {realisation && parse(realisation?.presentation)}
            </section>

        </div>
    );
}
