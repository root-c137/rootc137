

import './ArticleList.scss';
export const ArticleList = ({Articles = []}) =>
{
    return(
        <div className="ArticleList">

            {
                Articles.map((article, key) => {
                   return (
                        <div key={key} className="ArticleList__Article">
                            <img src={article.Image} />
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

