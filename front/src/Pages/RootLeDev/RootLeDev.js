

import './RootLeDev.scss';
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Home} from "./Home/Home";
import {Articles} from "./Articles/Articles";
import {Realisations} from "./Realisations/Realisations";
import {Tutos} from "./Tutos/Tutos";

export const RootLeDev = () =>
{
    const Location = useLocation();
    const [location, setLocation] = useState("");

    useEffect(() => {

        const currentLocation = Location.pathname.split('/');

        if(currentLocation[currentLocation.length - 1] === "rootledev")
            setLocation("home");
        else
        setLocation(currentLocation[currentLocation.length - 1] );

        console.log(currentLocation);
    }, [Location.pathname]);


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
                        <li id="LinkArticles" className={location === "articles" ? "currentCat" : ""}>
                            <Link to="/rootledev/articles">articles</Link>
                        </li>
                        <li id="LinkRealisations" className={location === "realisations" ? "currentCat" : ""}>
                            <Link to="/rootledev/realisations">réalisations</Link>
                        </li>
                        <li id="LinkTutos"  className={location === "tutos" ? "currentCat" : ""}>
                            <Link to="/rootledev/tutos">tutos</Link>
                        </li>
                    </ul>
                </nav>

                <div className="RootLeDev__Menu__CurrentPath">
                    {"#rootledev/"+location}
                </div>
            </section>


            {Location.pathname === "/rootledev" && <Home />}
            {Location.pathname === "/rootledev/articles" && <Articles />}
            {Location.pathname === "/rootledev/realisations" && <Realisations />}
            {Location.pathname === "/rootledev/tutos" && <Tutos />}

        </div>
    )
}


