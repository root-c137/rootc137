import {Link} from "react-router-dom";
import {Footer} from "../Footer/Footer";

import './SocialMenu.scss';

export const SocialMenu = () =>
{
    return(
        <div className="Social">
            <div className="Social__List">
                <Link to="#"><i className="fa-brands fa-x-twitter"></i></Link>
                <Link to="#"><i className="fa-brands fa-youtube"></i></Link>
                <Link to="#"><i className="fa-brands fa-twitch"></i></Link>
                <Link to="#"><i className="fa-brands fa-tiktok"></i></Link>
            </div>

            <Footer />
        </div>
    )
}
