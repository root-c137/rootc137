import React from "react";
import parse from 'html-react-parser';


import './Home.scss';

export const Home = ({presentation}) =>
{
    return(
        <div className="RootLeDev__Home">
            {presentation ? parse(presentation) : ''}
            <ul>
                <li>coucou</li>
                <li>coucou</li>
                <li>coucou</li>

            </ul>
        </div>
    )
}
