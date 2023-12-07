
import './Contact.scss';
import {useEffect, useState} from "react";
import {Error} from "../../Components/Error/Error";
import {EasyFetch} from "../../Utils/EasyFetch";

export const Contact = () =>
{
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Msg, setMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState(null);
    const [success, setSuccess] = useState(null);

    const sendMessage = (e) =>
    {
        e.preventDefault();
        setErrorMsg(null);

        if(Email.length > 0 && Name.length && Msg.length > 50)
        {
            if(Msg.length < 50)
                setErrorMsg("Le message doit contenir au moins 50 caractères.");
            else
            {
                const URL = "message";
                const Method = "POST";
                const Data = {
                    "Name" : Name,
                    "Email": Email,
                    "Msg": Msg
                };

                EasyFetch(URL, Data, Method, null, null, "/").then(res => {
                    if(res[1] === 200)
                    {
                        setErrorMsg("");
                        setEmail("");
                        setName("");
                        setMsg("");
                        setSuccess("Votre message a bien été envoyé. 🤙");
                    }
                    else
                        setErrorMsg(res[0].message);
                });
            }
        }
        else
            setErrorMsg("Tous les champs sont nécessaires.");
    }

    return(
        <div className="Container">

            <div className="Contact">
                <div className="Contact__Title">
                    <span>contact</span>
                    <i className="fa-solid fa-envelope"></i>
                </div>

                {errorMsg && <Error msg={errorMsg}/>}
                {success ? <p>{success}</p> : <p>Tu peux me contacter en utilisant ce formulaire</p>}
                <form>
                    <div className="FormGroup">
                        <label htmlFor="Name">Nom</label>
                        <input type="text" name="Name" id="Name" onChange={e =>
                        setName(e.currentTarget.value) }
                        value={Name}/>
                    </div>
                    <div className="FormGroup">
                        <label htmlFor="Email">Email</label>
                        <input type="text" name="Email" id="Email" onChange={e => setEmail(e.currentTarget.value)}
                               value={Email}/>
                    </div>
                    <div className="FormGroup">
                        <label htmlFor="Msg">Message</label>
                        <textarea name="Msg" id="Msg" onChange={e => e.currentTarget.value !== Msg && setMsg(e.currentTarget.value)}
                        value={Msg}></textarea>
                    </div>

                    <button onClick={sendMessage}>envoyer</button>
                </form>
            </div>
        </div>
    )
}

