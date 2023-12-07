

import './RootLeDev.scss';
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Home} from "./Home/Home";
import {Articles} from "./Articles/Articles";
import {Realisations} from "./Realisations/Realisations";
import {Tutos} from "./Tutos/Tutos";
import {Realisation} from "./Realisation/Realisation";
import {EasyFetch} from "../../Utils/EasyFetch";
import {ProjectsListAdmin} from "../../Components/ProjectsListAdmin/ProjectsListAdmin";
import {Article} from "./Article/Article";

export const RootLeDev = () =>
{
    const Location = useLocation();
    const [location, setLocation] = useState("");
    const [resume, setResume] = useState(null);
    const [presentation, setPresentation] = useState(null);

    useEffect(() => {

        const currentLocation = Location.pathname.split('/');

        if(currentLocation[currentLocation.length - 1] === "rootledev")
        {
            setLocation("home");
            getSection("rootledev");
        }
        else
        {
               if(currentLocation.length > 3 &&
               currentLocation[currentLocation.length - 1].length > 0)
               {
                   setLocation(currentLocation[currentLocation.length - 2] + "/" +
                       currentLocation[currentLocation.length - 1]);
               }
               else if(currentLocation[currentLocation.length - 1].length === 0)
                   setLocation(currentLocation[currentLocation.length - 2]);
               else
                   setLocation(currentLocation[currentLocation.length - 1]);
        }

    }, [Location.pathname, location]);

    const getSection = (name) =>
    {
        const URL = "section/byname/"+name;
        const Method = "GET";


        EasyFetch(URL, null, Method, null, null, "/").then(res => {
            if(res[1] === 200)
            {
                setResume(res[0].data.resume);
                setPresentation(res[0].data.presentation);
            }
        });
    }


    return(
        <div className="Container RootLeDev">
            <h3 className="RootLeDev__Title">#rootledev</h3>
            <div className="RootLeDev__Presentation">
                {resume ? <p>{resume}</p> : ''}
            </div>
            <section className="RootLeDev__Menu">
                <nav>
                    <ul>
                        <li><Link to="/rootledev"><i className="fa-solid fa-house"></i></Link></li>
                        <li id="LinkRealisations" className={location === "realisations" ? "currentCat" : ""}>
                            <Link to="/rootledev/realisations">réalisations</Link>
                        </li>
                        <li id="LinkArticles" className={location === "articles" ? "currentCat" : ""}>
                            <Link to="/rootledev/articles">articles</Link>
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


            {location === "home" && <Home presentation={presentation} />}
            {location === "articles" && <Articles />}
            {location === "realisations" && <Realisations />}
            {location === "tutos" && <Tutos />}
            {location.includes("realisations/") && location.length >= 15
            ? <Realisation /> : ''}
            {location.includes("articles/") && location.length >= 10
                ? <Article  /> : ''}

        </div>
    )
}


