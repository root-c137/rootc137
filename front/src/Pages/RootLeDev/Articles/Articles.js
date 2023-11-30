import {ArticleList} from "../../../Components/ArticleList/ArticleList";
import './Articles.scss';

import ImgTest from "../../../Images/Articles/Test.jpg";

export const Articles = () =>
{
    const Articles = [
        {
            "Title": "Titre1",
            "Image": ImgTest,
            "Resume": "Résumé de l'article 1 blablkablezvesaezvaqzefazefé  azba .........",
            "Author": "rootc137",
            "CreatedAt": "29/11/2023",
            "UpdatedAt": null
        },
        {
            "Title": "Titre2",
            "Image": ImgTest,
            "Resume": "Résumé de l'articleedkdsiddkdkdkdkdkdkdkdkdkdlslslsmsmsmsmsmsmslslssl 2 blablkablba .........",
            "Author": "rootc137",
            "CreatedAt": "29/11/2023",
            "UpdatedAt": null
        },
        {
            "Title": "Titre3",
            "Image": ImgTest,
            "Resume": "Résumé de l'article 3 blablkablba .........",
            "Author": "rootc137",
            "CreatedAt": "29/11/2023",
            "UpdatedAt": null
        },
        {
            "Title": "Titre4",
            "Image": ImgTest,
            "Resume": "Résumé de l'article 4 blablkablba .........",
            "Author": "rootc137",
            "CreatedAt": "29/11/2023",
            "UpdatedAt": null
        }

    ];

    return(
        <div className="RootLeDev__Articles">
            <ArticleList Articles={Articles} />
        </div>
    )
}

