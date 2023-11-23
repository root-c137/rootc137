
import "./Footer.scss";
import {Link} from "react-router-dom";

export const Footer = () =>
{
    return(
        <footer className="Footer">
            <Link to="#">mentions légales</Link>
            <Link to="#">contact</Link>
        </footer>
    )
}