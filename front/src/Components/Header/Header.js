

import './Header.scss';
import {Link} from "react-router-dom";
import {Footer} from "../Footer/Footer";

export const Header = () =>
{
    return(
        <header className="Header">
            <h1 className="Header__Title"><Link to="/">rootc137</Link></h1>
            <h2 className="Header__Subtitle">chômeur légendaire</h2>

            <nav className="Header__Menu">
                <ul className="Header__Menu__List">
                    <li className="Header__Menu__List__Item">
                        <Link to="#">#rootledev</Link>
                    </li>
                    <li className="Header__Menu__List__Item">
                        <Link to="#">#rootleyoutubeur</Link>
                    </li>
                    <li className="Header__Menu__List__Item">
                        <Link to="#">#rootlestreameur</Link>
                    </li>
                    <li className="Header__Menu__List__Item">
                        <Link to="#">#rootlecrivain</Link>
                    </li>
                </ul>
            </nav>

            <div className="Header__Social">
                <p>pour me suivre</p>
                <div className="Header__Social__List">
                    <Link to="#"><i className="fa-brands fa-x-twitter"></i></Link>
                    <Link to="#"><i className="fa-brands fa-youtube"></i></Link>
                    <Link to="#"><i className="fa-brands fa-twitch"></i></Link>
                    <Link to="#"><i className="fa-brands fa-tiktok"></i></Link>
                </div>

                <Footer />
            </div>

        </header>
    )
}

