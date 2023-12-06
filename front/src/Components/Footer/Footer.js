
import "./Footer.scss";
import {Link} from "react-router-dom";

export const Footer = ({refreshMenu}) =>
{
    return(
        <footer className="Footer">
            <Link to="#" onClick={refreshMenu}>mentions légales</Link>
            <Link to="/contact" onClick={refreshMenu}>contact</Link>
        </footer>
    )
}