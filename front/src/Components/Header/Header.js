

import './Header.scss';
import {Link} from "react-router-dom";
import {Footer} from "../Footer/Footer";
import {Menu} from "../Menu/Menu";
import {SocialMenu} from "../SocialMenu/SocialMenu";
import {useEffect, useState} from "react";
import {Title} from "../Title/Title";
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";

export const Header = () =>
{
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {

        ShowHeader();
        window.addEventListener('resize', (e) => {
           ShowHeader();
        });
    });

    const ShowHeader = () =>
    {
        if(window.innerWidth >= 1000)
            setShowHeader(true);
        else
            setShowHeader(false);
    }


    return(
        <>
            {
                 showHeader ?
                    <header className="Header">
                        <Title />
                        <Menu />
                        <SocialMenu />
                    </header>
                    :
                    <>
                        <Title />
                        <BurgerMenu />
                    </>
            }
        </>

    )
}

