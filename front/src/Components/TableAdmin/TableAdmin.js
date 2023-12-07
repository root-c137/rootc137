import {Link} from "react-router-dom";
import './TableAdmin.scss';
import {useEffect, useState} from "react";
import {EasyFetch} from "../../Utils/EasyFetch";

export const TableAdmin = ({data, thead, path, delPath, refreshData}) =>
{
    const [showDeleteMenu, setShowDeleteMenu] = useState([]);
    const [currentData, setCurrentData] = useState(data);

    useEffect(() => {

        if(data)
        {
            let newArray = [];
            for(let i=0; i<data.length; i++)
            newArray.push(false);

            setShowDeleteMenu([...showDeleteMenu, newArray]);
        }

    }, []);


    const Delete = (id) =>
    {
        const URL = delPath+"/"+id;
        const Method = "DELETE";
        const Token = localStorage.getItem("token");


        EasyFetch(URL, null, Method, Token).then(res => {
            if(res[1] === 200)
                refreshData()
        });

    }

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

                                { showDeleteMenu[key] ?
                                    <div className="DeleteMenu">
                                        <p>Sûr ?</p>
                                        <span>OUI</span>
                                        <span>annuler</span>
                                    </div> :
                                    <>
                                        <Link to={path+d.id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() => Delete(d.id)}><i className="fa-solid fa-trash"></i></button>
                                    </>
                                }
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}