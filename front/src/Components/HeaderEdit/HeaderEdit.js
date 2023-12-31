import {Link} from "react-router-dom";

import './HeaderEdit.scss';

export const HeaderEdit = ({title, id = null, returnLink}) =>
{
    return(
        <div className="HeaderEdit">
            <Link className="HeaderEdit__Return" to={returnLink}><i className="fa-solid fa-arrow-left"></i></Link>
            <h2>{title}  {id && <span>: id.{id}</span>}</h2>
        </div>
    )
}