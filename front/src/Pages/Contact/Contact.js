
import './Contact.scss';
import {useEffect, useState} from "react";
import {Error} from "../../Components/Error/Error";
import {EasyFetch} from "../../Utils/EasyFetch";

export const Contact = () =>
{
    const [Email, setEmail] = useState(null);
    const [Name, setName] = useState(null);
    const [Section, setSection] = useState(null);
    const [Msg, setMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {

    }, []);
    const sendMessage = (e) =>
    {
        e.preventDefault();
        setErrorMsg(null);

        if(Email && Name && Msg)
        {
            if(Msg.length < 100)
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
                        setErrorMsg(null);
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
                        setName(e.target.value) } />
                    </div>
                    <div className="FormGroup">
                        <label htmlFor="Email">Email</label>
                        <input type="text" name="Email" id="Email" onClick={e =>
                        setEmail(e.target.value) } />
                    </div>
                    <div className="FormGroup">
                        <label htmlFor="Msg">Message</label>
                        <textarea name="Msg" id="Msg" onChange={e => setMsg(e.target.value) }></textarea>
                    </div>

                    <button onClick={sendMessage}>envoyer</button>
                </form>

            </div>
        </div>
    )
}

