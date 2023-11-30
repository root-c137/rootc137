

import './Realisations.scss';
import {Filter} from "../../../Components/Filter/Filter";
import {useEffect, useState} from "react";
import {EasyFetch} from "../../../Utils/EasyFetch";

import ImgTest from "../../../Images/Articles/Test.jpg";
import {useLocation, useNavigate} from "react-router-dom";
import {Slugify} from "../../../Utils/Slugify";
export const Realisations = () =>
{
    const Navigate = useNavigate();
    const [currentCat, setCurrentCat] = useState("tout");
    const [realisationsFiltered, setRealisationsFiltered] = useState([]);
    const [Realisations, setRealisations] = useState([
        {
            "id" : 0,
            "Title": "mycrushacademia",
            "Image": ImgTest,
            "Resume": "resumé de la réalisation....",
            "Category": ['web']
        },
        {
            "id" : 1,
            "Title": "my crush academia",
            "Image": ImgTest,
            "Resume": "resumé de la réalisation....",
            "Category": ['web', 'app']
        },
        {
            "id" : 2,
            "Title": "my crush academia",
            "Image": ImgTest,
            "Resume": "resumé de la réalisation....",
            "Category": ['app']
        },
        {
            "id" : 3,
            "Title": "my crush academia",
            "Image": ImgTest,
            "Resume": "resumé de la réalisation....",
            "Category": ['autres']
        },
        {
            "id" : 4,
            "Title": "my crush academia",
            "Image": ImgTest,
            "Resume": "resumé de la réalisation....",
            "Category": ['web']
        }
        ]);

    useEffect(() => {

        let RealisationsF = Realisations.filter(r => r.Category.includes(currentCat) );
        if(currentCat === "tout")
            RealisationsF = Realisations;

        setRealisationsFiltered(RealisationsF);
    }, [currentCat]);


    const getRealisations = () =>
    {
        const URL = "api/dev/realisations/"+currentCat;
        const Method = "POST";

        console.log("getrealisations...");
    }

    const getRealisation = (id, title) =>
    {
        console.log('get realisation id : '+id);
        const URL = "api/dev/realisation/"+id;
        const Method = "GET";

        Navigate('/rootledev/realisations/'+Slugify(title), {
            state: {realisation : Realisations[0]}
        });
    }

    return(
        <div className="RootLeDev__Realisations">

            <Filter cat={currentCat} updateCat={(cat) => setCurrentCat(cat)}/>
            <div className="RootLeDev__Realisations__List">
                {
                    realisationsFiltered && realisationsFiltered.map((realisation, key) =>
                    {
                        return (
                            <div key={key} className="RootLeDev__Realisations__List__Item"
                            onClick={() => getRealisation(realisation.id, realisation.Title)}>
                                <img src={realisation.Image} alt="image article"/>
                                <h3>{realisation.Title}</h3>
                                <div className="RootLeDev__Realisations__List__Item__Cat">
                                {realisation.Category.map((cat, key) => <span key={key}>{cat}</span>)}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

