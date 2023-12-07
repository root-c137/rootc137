
import "./Footer.scss";
import {Link} from "react-router-dom";

export const Footer = ({refreshMenu}) =>
{
    return(
        <footer className="Footer">
            <Link to="/mentions-legales" onClick={refreshMenu}>mentions légales</Link>
        </footer>
    )
}