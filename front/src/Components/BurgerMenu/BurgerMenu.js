
import './BurgerMenu.scss';
import {useEffect, useState} from "react";
import {Menu} from "../Menu/Menu";
export const BurgerMenu = () =>
{
    const [showMenu, setShowMenu] = useState(false);
    const [check, setCheck] = useState(false);

    useEffect(() => {
        if(showMenu)
            document.body.style.overflow = "hidden"

    }, [showMenu]);

    const refreshMenu = () =>
    {
        setCheck(!check);
        setShowMenu(false);
    }

    return(
        <div className="BurgerMenu">


            <input type="checkbox" className="MenuCheckBox" id="MenuCheckBox"
            onClick={() => setShowMenu(!showMenu)}
                   onChange={() => setCheck(!check)}
                   checked={check}
            />
            <label htmlFor="MenuCheckBox">
                <div></div>
                <div></div>
                <div></div>
            </label>

            {showMenu &&
                <div className="BurgerMenu__Menu">
                    <Menu refreshMenu={refreshMenu}/>
                </div>
            }


        </div>
    )
}