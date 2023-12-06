import {EasyFetch} from "../../Utils/EasyFetch";
import {TableAdmin} from "../TableAdmin/TableAdmin";
import {useEffect, useState} from "react";

import './ArticlesListAdmin.scss';
import {Link} from "react-router-dom";

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

        EasyFetch(URL, null, Method, Token, null, "/").then(res =>
        {
            if(res[1] === 200)
                setArticles(res[0].data);
        });
    }

    return(
        <div className="ArticleListAdmin">
            <h2>Articles</h2>
            <Link className="ArticleListAdmin__AddLink" to={"/admin/articles/add"}>ajouter un article</Link>

            <TableAdmin data={articles} thead={["section","title", "resume", "author", "image"]}
            path={"/admin/articles/"}/>
        </div>
    )
}
