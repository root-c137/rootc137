import {Link} from "react-router-dom";
import {Footer} from "../Footer/Footer";

import './SocialMenu.scss';

export const SocialMenu = () =>
{
    return(
        <div className="Social">
            <div className="Social__List">
                <a href="https://www.youtube.com/@rootc137" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                <a href="https://www.twitch.tv/rootc137" target="_blank"><i className="fa-brands fa-twitch"></i></a>
                <a href="https://www.tiktok.com/@rootc137" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
            </div>

            {window.innerWidth >= 1200 && <Footer />}
        </div>
    )
}
