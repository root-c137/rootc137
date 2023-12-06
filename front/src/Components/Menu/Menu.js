import {Link} from "react-router-dom";
import './Menu.scss';
import {Title} from "../Title/Title";
import {Footer} from "../Footer/Footer";
import {SocialMenu} from "../SocialMenu/SocialMenu";

export const Menu = ({refreshMenu}) =>
{
    return(
        <div className="Menu">
        {window.innerWidth < 1200 && <Title refreshMenu={refreshMenu}/>}
            <nav>
                <ul className="Menu__List">
                    <li className="Menu__List__Item">
                        <Link to="/rootledev" onClick={refreshMenu}>#rootledev</Link>
                    </li>
                    <li className="Menu__List__Item">
                        <Link to="/rootleyoutubeur" onClick={refreshMenu}>#rootleyoutubeur</Link>
                    </li>
                    <li className="Menu__List__Item">
                        <Link to="/rootlecrivain" onClick={refreshMenu}>#rootlecrivain</Link>
                    </li>
                </ul>
            </nav>

            {window.innerWidth < 1200 && <><SocialMenu /><Footer refreshMenu={refreshMenu}/></>}

        </div>

    )
}