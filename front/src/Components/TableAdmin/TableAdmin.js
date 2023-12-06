import {Link} from "react-router-dom";
import './TableAdmin.scss';
import {useEffect} from "react";

export const TableAdmin = ({data, thead, path}) =>
{
    useEffect(() => {

    }, []);

    return(
        <table className="TableAdmin">
            <thead>
            <tr>
                <th className="TD_ID">id</th>
                {
                    thead?.map((th, k) => {
                        return(
                            <th key={k} className={th === "resume" ? "TD_Resume" : ''}>{th}</th>
                        )
                    })
                }
                <th>CreatedAt</th>
                <th>UpdatedAt</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                data?.map((d, key) => {
                    return(
                        <tr key={key}>
                            <td className="TD_ID">{d.id}</td>
                            {
                                thead?.map((th, k) => {
                                   return <td key={k} className={th === "resume" ? "TD_Resume" : ''} >{d[th]}</td>
                                })
                            }
                            <td>{d.createdAt}</td>
                            <td>{d.updatedAt}</td>
                            <td>
                                <Link to={path+d.id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                <button><i className="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}