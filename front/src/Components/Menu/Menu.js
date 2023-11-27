import {Link} from "react-router-dom";
import './Menu.scss';

export const Menu = ({refreshMenu}) =>
{
    return(
        <nav className="Menu">
            <ul className="Menu__List">
                <li className="Menu__List__Item">
                    <Link to="/rootledev" onClick={refreshMenu}>#rootledev</Link>
                </li>
                <li className="Menu__List__Item">
                    <Link to="#" onClick={refreshMenu}>#rootleyoutubeur</Link>
                </li>
                <li className="Menu__List__Item">
                    <Link to="#" onClick={refreshMenu}>#rootlestreameur</Link>
                </li>
                <li className="Menu__List__Item">
                    <Link to="#" onClick={refreshMenu}>#rootlecrivain</Link>
                </li>
            </ul>
        </nav>
    )
}