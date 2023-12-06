
import parse from 'html-react-parser';

import './Article.scss';
import ImgTest from "../../../Images/Articles/Test.jpg";
import {BaseUploadsPath} from "../../../Utils/BasePathUpload";
import {useEffect, useState} from "react";
import {EasyFetch} from "../../../Utils/EasyFetch";
import {useLocation} from "react-router-dom";
import {Slugify} from "../../../Utils/Slugify";
export const Article = () =>
{
    const [slug, setSlug] = useState(null);
    const [article, setArticle] = useState(null);
    const Location = useLocation();
    useEffect(() =>
    {
        setSlug(Location.pathname.split('/')[3] );
        if(slug)
            getArticle();

    }, [slug]);

    const getArticle = () =>
    {
        const URL = "article/"+slug;
        const Method = "GET";

        EasyFetch(URL, null, Method, null, null, "/").then(res =>
        {
            if(res[1] === 200)
                setArticle(res[0].data);
        });
    }

    return(
        article ?
                <div className="RootLeDev__Article">
                    <h3>{article?.title}</h3>
                    <div className="RootLeDev__Realisation__Banniere"
                         style={{
                             backgroundImage : `url(${BaseUploadsPath()+article?.image})`,
                             backgroundRepeat: 'no-repeat',
                             backgroundPosition: 'center',
                             backgroundSize: 'cover'
                         }}/>

                    <section className="RootLeDev__Article__Presentation">
                        {parse(article?.text) }
                    </section>
                </div>
    : ''

    )
}

