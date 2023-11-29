
import './Filter.scss';

export const Filter = ({cat = "all", updateCat}) =>
{

    const handleClick = (e) =>
    {
        e.preventDefault();
        let Cat = e.target.innerHTML;

        updateCat(Cat);
    }

    return(
        <div className="Filter">
            <ul>
            <li className={cat === "tout" ? "currentCat" : ""} onClick={handleClick}>tout</li>
                <li className={cat === "web" ? "currentCat" : ""} onClick={handleClick}>web</li>
                <li className={cat === "app" ? "currentCat" : ""} onClick={handleClick}>app</li>
                <li className={cat === "autres" ? "currentCat" : ""} onClick={handleClick}>autres</li>
            </ul>
        </div>
    )
}