import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {EasyFetch} from "../../Utils/EasyFetch";

import './EditUser.scss';
import {HeaderEdit} from "../HeaderEdit/HeaderEdit";
export const EditUser = () =>
{
    const Location = useLocation();
    const [id, setID] = useState(null);
    const [user, setUser] = useState(null);
    const [Email, setEmail] = useState(null);
    const [Username, setUsername] = useState(null);
    const [Roles, setRoles] = useState(null);
    const [Pass, setPass] = useState(null);

    useEffect(() =>
    {
        setID(Location.pathname.split('/')[3]);
        if(id)
        getUser();

    }, [id]);

    const getUser = () =>
    {
        const URL = "user/"+id;
        const Method = "GET";

        EasyFetch(URL, null, Method, localStorage.getItem('token'))
            .then(res => {
                if(res[1] === 200)
                    setUser(res[0].data)
            });
    }

    const update = () => {
        const checkEmail = Email !== null && Email !== user.email;
        const checkPass = Pass !== null && Pass.length > 0;
        const checkUsername = Username !== null && Username !== user.Username;
        const checkRoles = Roles !== null && Roles !== user.roles.toString();

        if(checkEmail || checkPass || checkUsername || checkRoles)
        {
            const URL = "user";
            const Method = "PUT";
            const Data = {
                "id": user.id,
                "Email" : Email || user.email,
                "Username": Username || user.Username,
                "Roles": Roles || user.roles.toString(),
                "Pass": Pass
            };

            const Token = localStorage.getItem('token');
            EasyFetch(URL, Data, Method, Token).then(res => {
                console.log(res);
            });
        }
        else
        {
            console.log('non');
        }
    }

    return(
        user ?
        <div className="EditUser">
            <HeaderEdit title="Utilisateur" id={user?.id} returnLink={"/admin/users"}/>

            <div className="EditUser__Group">
                <label htmlFor="Email">Email</label>
                <input type="text" name="Email" id="Email" defaultValue={user?.email}
                onChange={e => setEmail(e.currentTarget.value) }/>
            </div>
            <div className="EditUser__Group">
                <label htmlFor="Email">Username</label>
                <input type="text" name="Username" id="Username" defaultValue={user?.Username}
                       onChange={e => setUsername(e.currentTarget.value) }/>
            </div>
            <div className="EditUser__Group">
                <label htmlFor="Roles">Rôles</label>
                <input type="text" name="Roles" id="Roles" defaultValue={user?.roles.toString()}
                       onChange={e => setRoles(e.currentTarget.value) }/>
            </div>
            <div className="EditUser__Group">
                <label htmlFor="Pass">Password</label>
                <input type="password" name="Pass" id="Pass" placeholder="nouveau mot de passe.."
                       onChange={e => setPass(e.currentTarget.value) }/>
                <span>(laisser vide pour garder le mot de passe actuel)</span>
            </div>

            <button onClick={update}>modifier</button>
        </div>
            : ''
    )
}
