


import './MenuAdmin.scss';
import {Link} from "react-router-dom";
export const MenuAdmin = () =>
{
    return(
        <div className="MenuAdmin">
            <Link to="/admin/articles" className="MenuAdmin__Item" >
                <div>
                    <i className="fa-solid fa-newspaper"></i>
                    <h2>Articles</h2>
                </div>
                <p>Gérer les articles</p>
            </Link>
            <Link to="/admin/sections" className="MenuAdmin__Item" >
                <div>
                    <i className="fa-solid fa-newspaper"></i>
                    <h2>Sections</h2>
                </div>
                <p>Gérer les sections</p>
            </Link>
            <Link to="/admin/projects" className="MenuAdmin__Item" >
                <div>
                    <i className="fa-solid fa-newspaper"></i>
                    <h2>Projets</h2>
                </div>
                <p>Gérer les projets</p>
            </Link>
            <Link to="/admin/messages" className="MenuAdmin__Item" >
                <div>
                    <i className="fa-solid fa-envelope"></i>
                    <h2>Messages</h2>
                </div>
                <p>Gérer les messages</p>
            </Link>
        </div>
    )
}

