

import './RootLeDev.scss';
import React, {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";

export const RootLeDev = () =>
{
    const Location = useLocation();

    useEffect(() => {

        switch(Location.pathname)
        {
            case "/rootledev":
            {

            }
        }
        console.log(Location.pathname);
    }, []);


    return(
        <div className="Container RootLeDev">
            <h3 className="RootLeDev__Title">#rootledev</h3>
            <div className="RootLeDev__Presentation">
                <p>L'une de mes passions, la programmation !</p>
                <p>Je partagerais ici mes différentes créations et je parlerais
                    de tout ce qui est en rapport avec le code, l’IA, l'informatique
                    et la technologie en générale.</p>
            </div>
            <section className="RootLeDev__Menu">
                <nav>
                    <ul>
                        <li><Link to="/rootledev"><i className="fa-solid fa-house"></i></Link></li>
                        <li id="LinkArticles"><Link to="/rootledev/articles">articles</Link></li>
                        <li id="LinkRealisations"><Link to="/">réalisations</Link></li>
                        <li id="LinkTutos"><Link to="/">tutos</Link></li>
                    </ul>
                </nav>
            </section>

            <div className="RootLeDev__CurrentPath">
                #rootledev/home
            </div>
            <main className="RootLeDev__Main">
                <h4>T'es qui ?</h4>
                <p>
                    Le Lorem Ipsum est simplement du faux texte employé
                    dans la composition et la mise en page avant impression.
                    Le Lorem Ipsum est le faux texte standard de l'imprimerie
                    depuis les années 1500, quand un imprimeur anonyme assembla
                    ensemble des morceaux de texte pour réaliser un livre spécimen de polices de
                    texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à
                    la bureautique informatique, sans que son contenu n'en soit modifié. Il a été
                    popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant
                    des passages du Lorem Ipsum, et, plus récemment,
                    par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
                </p>

            </main>
        </div>
    )
}