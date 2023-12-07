

import './ModaleDelete.scss';
export const ModaleDelete = ({data, type}) =>
{
    return(
        <div className="ModaleDelete">
            <h3>Attention</h3>
            <p>Vous êtes sur le point de supprimer un {type}</p>
            <p></p>
        </div>
    )
}

