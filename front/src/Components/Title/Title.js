import {Link} from "react-router-dom";
import './Title.scss';

export const Title = ({refreshMenu}) =>
{
    return(
        <div className="TitleAndSubtitle">
            <h1 className="TitleAndSubtitle__Title"><Link to="/" onClick={refreshMenu}>rootc137</Link></h1>
            <h2 className="TitleAndSubtitle__Subtitle">chômeur légendaire</h2>
        </div>
    )
}
