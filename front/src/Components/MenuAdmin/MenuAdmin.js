


import './MenuAdmin.scss';
import {Link} from "react-router-dom";
export const MenuAdmin = () =>
{
    return(
        <div className="MenuAdmin">
            <Link to="/admin/users" className="MenuAdmin__Item">
                    <div>
                        <i className="fa-solid fa-users"></i>
                        <h2>Utilisateurs</h2>
                    </div>
                    <p>Gérer les utilisateurs</p>
            </Link>
            <Link to="/admin/articles" className="MenuAdmin__Item" >
                <div>
                    <i className="fa-solid fa-newspaper"></i>
                    <h2>Articles</h2>
                </div>
                <p>Gérer les articles</p>
            </Link>
            <div className="MenuAdmin__Item">
                <div>
                    <i className="fa-solid fa-newspaper"></i>
                    <h2>Sections</h2>
                </div>
                <p>Gérer les sections</p>
            </div>
            <div className="MenuAdmin__Item">
                <div>
                    <i className="fa-solid fa-newspaper"></i>
                    <h2>Categories</h2>
                </div>
                <p>Gérer les catégories</p>
            </div>
            <div className="MenuAdmin__Item">
                <div>
                    <i className="fa-solid fa-briefcase"></i>
                    <h2>Projets</h2>
                </div>
                <p>Gérer les projets</p>
            </div>
        </div>
    )
}