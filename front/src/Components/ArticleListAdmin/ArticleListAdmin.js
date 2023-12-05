import {EasyFetch} from "../../Utils/EasyFetch";
import {TableAdmin} from "../TableAdmin/TableAdmin";
import {useEffect, useState} from "react";

import './ArticlesListAdmin.scss';

export const ArticleListAdmin = () =>
{
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        getArticles();
    }, []);
    const getArticles = () =>
    {
        const URL = "articles";
        const Method = "GET";
        const Token = localStorage.getItem("token");

        EasyFetch(URL, null, Method, Token).then(res =>
        {
            if(res[1] === 200)
                setArticles(res[0].data);

            console.log(res);
        });
    }

    return(
        <div className="ArticleListAdmin">
            <h2>Articles</h2>
            <TableAdmin data={articles} thead={["section","title", "resume", "author", "image"]}
            path={"/admin/articles/"}/>
        </div>
    )
}
