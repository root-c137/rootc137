



import './UsersList.scss';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {EasyFetch} from "../../Utils/EasyFetch";
import {TableAdmin} from "../TableAdmin/TableAdmin";
export const UsersList = () =>
{
    const [users, setUsers] = useState(null);
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () =>
    {
        const URL = "users";
        const Method = "GET";

        EasyFetch(URL, null, Method, localStorage.getItem('token')).then(
            res => {
                if(res[1] === 200)
                    setUsers(res[0].data);

            console.log(res);
        });
    }

    return(
       <TableAdmin data={users} thead={["email", "username", "roles"]}
       path={"/admin/users/"}/>
    )
}

