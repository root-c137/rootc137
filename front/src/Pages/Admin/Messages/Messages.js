import {TableAdmin} from "../../../Components/TableAdmin/TableAdmin";
import {EasyFetch} from "../../../Utils/EasyFetch";
import {useEffect, useState} from "react";

import "./Messages.scss";
export const Messages = () =>
{
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        getMessages();
    }, []);

    const getMessages = () =>
    {
        const URL = "messages";
        const Method = "GET";

        EasyFetch(URL, null, Method, localStorage.getItem('token')).then(res => {
            if(res[1] === 200)
            setMessages(res[0].data);

            console.log(res);
        });
    }

    return(
        <div className="Messages">
            <h2>Messages</h2>
            <TableAdmin data={messages} thead={["id","name", "email", "ip", "txt", "createdAt"]}
                        path={"/admin/messages/"} delPath={"messages"} refreshData={getMessages}/>
        </div>
    )
}