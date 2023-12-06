import {ArticleList} from "../../../Components/ArticleList/ArticleList";
import './Articles.scss';

import ImgTest from "../../../Images/Articles/Test.jpg";
import {useEffect, useState} from "react";
import {EasyFetch} from "../../../Utils/EasyFetch";

export const Articles = () =>
{
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        getArticles();
    }, []);

    const getArticles = () =>
    {
        const URL = "articles";
        const Method = "GET";

        EasyFetch(URL, null, Method, null, null, "/").then(res => {
            if(res[1] === 200)
                setArticles(res[0].data);
        });
    }

    return(
        <div className="RootLeDev__Articles">
            <ArticleList Articles={articles} />
        </div>
    )
}

