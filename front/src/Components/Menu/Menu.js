import {Link} from "react-router-dom";
import './Menu.scss';
import {Title} from "../Title/Title";
import {Footer} from "../Footer/Footer";

export const Menu = ({refreshMenu}) =>
{
    return(
        <>
        {window.innerWidth < 1200 && <Title refreshMenu={refreshMenu}/>}
            <nav className="Menu">
                <ul className="Menu__List">
                    <li className="Menu__List__Item">
                        <Link to="/rootledev" onClick={refreshMenu}>#rootledev</Link>
                    </li>
                    <li className="Menu__List__Item">
                        <Link to="#" onClick={refreshMenu}>#rootleyoutubeur</Link>
                    </li>
                    <li className="Menu__List__Item">
                        <Link to="#" onClick={refreshMenu}>#rootlecrivain</Link>
                    </li>
                </ul>
            </nav>
            {window.innerWidth < 1200 && <Footer />}
        </>

    )
}