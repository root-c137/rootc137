
import './Contact.scss';
import {useEffect, useState} from "react";
import {Error} from "../../Components/Error/Error";

export const Contact = () =>
{
    const [Email, setEmail] = useState(null);
    const [Name, setName] = useState(null);
    const [Section, setSection] = useState(null);
    const [Msg, setMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        console.log('Email : '+Email);
        console.log('Name : '+Name);
        console.log('Section : '+Section);
        console.log('Msg : '+Msg);

    }, [Section]);
    const sendMessage = (e) =>
    {
        e.preventDefault();
        if(Email && Name && Section && Msg)
        {
            if(Msg.length < 100)
                setErrorMsg("Le message doit contenir au moins 100 caractères.");
            else
            {
                const URL = "api/message";
                const Method = "POST";
                const Data = {
                    "Name" : Name,
                    "Email": Email,
                    "Sectione": Section,
                    "Msg": Msg
                };

                console.log('envoie...');
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
                <p>Tu peux me contacter en utilisant ce formulaire</p>
                <form>
                    <div className="FormGroup">
                        <label htmlFor="Name">Nom</label>
                        <input type="text" name="Name" id="Name" onChange={e =>
                        setName(e.currentTarget.value) } />
                    </div>
                    <div className="FormGroup">
                        <label htmlFor="Email">Email</label>
                        <input type="text" name="Email" id="Email" onClick={e =>
                        setEmail(e.currentTarget.value) } />
                    </div>
                    <div className="FormGroup">
                        <label htmlFor="Section">Section concernée</label>
                        <select name="Section" id="Section" onChange={e =>
                        setSection(e.currentTarget.value) }>
                            <option value="null"></option>
                            <option value="rootledev">#Rootledev</option>
                            <option value="rootledev">#Rootledev</option>
                            <option value="rootledev">#Rootledev</option>
                            <option value="aucune">aucune</option>
                        </select>
                    </div>
                    <div className="FormGroup">
                        <label htmlFor="Msg">Message</label>
                        <textarea name="Msg" id="Msg" onChange={e => setMsg(e.currentTarget.value) }></textarea>
                    </div>

                    <button onClick={sendMessage}>envoyer</button>
                </form>

            </div>
        </div>
    )
}

