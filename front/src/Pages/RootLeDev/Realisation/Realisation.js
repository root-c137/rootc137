

import './Realisation.scss';
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import ImgTest from '../../../Images/Articles/Test.jpg';

export const Realisation = () =>
{
    const Location = useLocation();
    const [slug, setSlug] = useState(null);

    useEffect(() => {

        setSlug(Location.pathname.split('/')[3]);
        console.log(Location.pathname.split('/')[3]);

    }, []);

    return(
        <div className="RootLeDev__Realisation">
            <h3>My crush academia</h3>
            <div className="RootLeDev__Realisation__Banniere"
                 style={{
                     backgroundImage : `url(${ImgTest})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center',
                     backgroundSize: 'cover'
                 }}/>

            <div className="RootLeDev__Realisation__Infos">

                <div className="RootLeDev__Realisation__Infos__Left">
                    <table>
                        <tbody>
                            <tr>
                                <td className="Table_Title">statut</td>
                                <td>en cours</td>
                            </tr>
                            <tr>
                                <td className="Table_Title">front</td>
                                <td>react, sass</td>
                            </tr>
                            <tr>
                                <td className="Table_Title">back</td>
                                <td>express, mariadb</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="RootLeDev__Realisation__Infos__Right">
                    <i className="fa-solid fa-globe"></i>
                    <i className="fa-brands fa-google-play"></i>
                    <i className="fa-brands fa-apple"></i>
                    <i className="fa-brands fa-github"></i>
                </div>
            </div>

            <section className="RootLeDev__Realisation__Presentation">
                <h4>Présentation</h4>
                <p>
                    Lorem Ipsum a commencé comme un latin brouillé, absurde dérivé de Cicero du 1er
                    siècle BC texte De Finibus Bonorum et Malorum. Gravure de Marcus
                    Tullius Cicero ...<br/>

                    Lorem Ipsum a commencé comme un latin brouillé, absurde dérivé de Cicero du 1er
                    siècle BC texte De Finibus Bonorum et Malorum. Gravure de Marcus
                    Tullius Cicero ...<br/><br/>

                    Lorem Ipsum a commencé comme un latin brouillé, absurde dérivé de Cicero du 1er
                    siècle BC texte De Finibus Bonorum et Malorum. Gravure de Marcus
                    Tullius Cicero ...
                </p>
            </section>

        </div>
    );
}
