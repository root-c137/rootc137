import {Link} from "react-router-dom";

import './Page404.scss';
export const Page404 = () =>
{
    return(
        <div className="Container Page404">
            <h1>404</h1>
            <p>Il n'y a rien ici 😕</p>
            <Link to="/">retourner à l'accueil</Link>
        </div>
    )
}
