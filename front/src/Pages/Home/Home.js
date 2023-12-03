

import './Home.scss';
import {Link} from "react-router-dom";

export const Home = () =>
{
    return(
        <div className="Container Home">
            <h1 className="Home__Title">Bienvenue sur mon site !</h1>
            <p className="Home__Subtitle">ici je parlerais librement de tout et de rien et partegerais avec toi mes différentes
            passions.</p>

            <div className="Home__Presentation">
                <div className="Home__Presentation__Item">
                    <i className="fa-solid fa-code"></i>
                    <p>Je crée des sites web, des applications mobiles et des jeux vidéos..</p>
                    <Link to="/rootledev">#rootledev</Link>
                </div>
                <div className="Home__Presentation__Item">
                    <i className="fa-brands fa-youtube"></i>
                    <p>Je crée du contenu pour ma chaine Youtube, Twitch, Tiktok.. etc</p>
                    <Link to="/rootledev">#rootleyoutubeur</Link>
                </div>
                <div className="Home__Presentation__Item">
                    <i className="fa-solid fa-pen-nib"></i>
                    <p>J'écris également des livres pour te faire réver un peu.</p>
                    <Link to="/rootledev">#rootlecrivain</Link>
                </div>
            </div>
        </div>
    )
}

