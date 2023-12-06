

import './Realisations.scss';
import {Filter} from "../../../Components/Filter/Filter";
import {useEffect, useState} from "react";
import {EasyFetch} from "../../../Utils/EasyFetch";

import ImgTest from "../../../Images/Articles/Test.jpg";
import {useLocation, useNavigate} from "react-router-dom";
import {Slugify} from "../../../Utils/Slugify";
import {getElementError} from "@testing-library/react";
import {BaseUploadsPath} from "../../../Utils/BasePathUpload";
export const Realisations = () =>
{
    const Navigate = useNavigate();
    const [currentCat, setCurrentCat] = useState("tout");
    const [realisationsFiltered, setRealisationsFiltered] = useState([]);
    const [Realisations, setRealisations] = useState(null);

    useEffect(() =>
    {
        if(!Realisations)
        getRealisations();

        if(currentCat === "tout") {
            setRealisationsFiltered(Realisations);
        }
        else
            setRealisationsFiltered(Realisations.filter(r => r.category.includes(currentCat) ) );


    }, [currentCat]);

    const getRealisations = () =>
    {
        if(!Realisations)
        {
            const URL = "projects/"
            const Method = "GET";

            EasyFetch(URL, null, Method, null, null, "/").then(res => {
                console.log(res);
                if (res[1] === 200) {
                    setRealisations(res[0].data);
                    setRealisationsFiltered(res[0].data);
                }
            });

            console.log("getrealisations...");
        }
    }

    const filterRealisations = (data) =>
    {
        setRealisationsFiltered(data.filter(r => r.category.includes(currentCat) ) );
    }

    const getRealisation = (realisation) =>
    {
        const URL = "realisation/"+realisation.id;
        const Method = "GET";

        Navigate('/rootledev/realisations/'+Slugify(realisation.title), {
            state: {realisation : realisation}
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
                            onClick={() => getRealisation(realisation)}>
                                <img
                                    style={{
                                        backgroundImage : `url(${BaseUploadsPath()+realisation.image})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover'
                                    }}/>
                                <h3>{realisation?.title}</h3>
                                <div className="RootLeDev__Realisations__List__Item__Cat">
                                {realisation?.category.split(',').map((cat, key) => <span key={key}>{cat}</span>)}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

