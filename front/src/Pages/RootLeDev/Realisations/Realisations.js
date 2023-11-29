

import './Realisations.scss';
import {Filter} from "../../../Components/Filter/Filter";
import {useEffect, useState} from "react";
import {EasyFetch} from "../../../Utils/EasyFetch";

import ImgTest from "../../../Images/Articles/Test.jpg";
export const Realisations = () =>
{
    const [currentCat, setCurrentCat] = useState("tout");
    const [realisationsFiltered, setRealisationsFiltered] = useState([]);
    const [Realisations, setRealisations] = useState([
        {
            "Title": "my crush academia",
            "Image": ImgTest,
            "Resume": "resumé de la réalisation....",
            "Category": ['web']
        },
        {
            "Title": "my crush academia",
            "Image": ImgTest,
            "Resume": "resumé de la réalisation....",
            "Category": ['web', 'app']
        },
        {
            "Title": "my crush academia",
            "Image": ImgTest,
            "Resume": "resumé de la réalisation....",
            "Category": ['app']
        },
        {
            "Title": "my crush academia",
            "Image": ImgTest,
            "Resume": "resumé de la réalisation....",
            "Category": ['autres']
        },
        {
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

    return(
        <div className="RootLeDev__Realisations">

            <Filter cat={currentCat} updateCat={(cat) => setCurrentCat(cat)}/>
            <div className="RootLeDev__Realisations__List">

                {
                    realisationsFiltered && realisationsFiltered.map((realisation, key) =>
                    {
                        return (
                            <div key={key} className="RootLeDev__Realisations__List__Item">
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

