


import './Users.scss';
import {UsersList} from "../../../Components/UsersList/UsersList";
import {useEffect, useState} from "react";
import {EditUser} from "../../../Components/EditUser/EditUser";
export const Users = () =>
{
    const [edit, setEdit] = useState(false);

    useEffect(() =>
    {
        console.log('...');
    },[]);
    const showEdit = (id) =>
    {
        console.log(id);
        setEdit(!edit);
    }

    return(
        <div className="Users">
            <h2>Utilisateurs</h2>
            <UsersList showEdit={showEdit}/>
        </div>
    )
}

