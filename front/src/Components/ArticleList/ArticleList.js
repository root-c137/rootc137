

import './ArticleList.scss';
import ImgTest from "../../Images/Articles/Test.jpg";
import {Slugify} from "../../Utils/Slugify";
import {useNavigate} from "react-router-dom";
import {BaseUploadsPath} from "../../Utils/BasePathUpload";
export const ArticleList = ({Articles = []}) =>
{
    const Navigate = useNavigate();

    const getArticle = (article) =>
    {
        Navigate('/rootledev/articles/'+Slugify(article.title), {
            state: {article : article}
        });
    }

    return(
        <div className="ArticleList">

            {
                Articles?.map((article, key) => {
                   return (
                        <div key={key} className="ArticleList__Article" onClick={() => getArticle(article)}>
                            <div
                                className="ArticleList__Article__Image"
                                 style={{
                                     backgroundImage : `url(${BaseUploadsPath()+article.image})`,
                                     backgroundRepeat: 'no-repeat',
                                     backgroundPosition: 'center',
                                     backgroundSize: 'cover'
                                 }}/>
                            <div className="ArticleList__Article__Right">
                                <h3 className="ArticleList__Article__Right__Title">
                                    {article.title}
                                </h3>
                                <p className="ArticleList__Article__Right__Resume">
                                    {article.resume}
                                </p>
                            </div>
                        </div>
                   )
                })
            }

        </div>
    )
}

