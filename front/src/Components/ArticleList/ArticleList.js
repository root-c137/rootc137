

import './ArticleList.scss';
import ImgTest from "../../Images/Articles/Test.jpg";
export const ArticleList = ({Articles = []}) =>
{
    return(
        <div className="ArticleList">

            {
                Articles.map((article, key) => {
                   return (
                        <div key={key} className="ArticleList__Article">
                            <div
                                className="ArticleList__Article__Image"
                                 style={{
                                     backgroundImage : `url(${article.Image})`,
                                     backgroundRepeat: 'no-repeat',
                                     backgroundPosition: 'center',
                                     backgroundSize: 'cover'
                                 }}/>
                            <div className="ArticleList__Article__Right">
                                <h3 className="ArticleList__Article__Right__Title">
                                    {article.Title}
                                </h3>
                                <p className="ArticleList__Article__Right__Resume">
                                    {article.Resume}
                                </p>
                            </div>
                        </div>
                   )
                })
            }

        </div>
    )
}

