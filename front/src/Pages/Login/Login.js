

import './Login.scss';
import {useState} from "react";
import {Error} from "../../Components/Error/Error";
import {EasyFetch} from "../../Utils/EasyFetch";
import {useLocation, useNavigate} from "react-router-dom";

export const Login = () =>
{
    const [Email, setEmail] = useState(null);
    const [Pass, setPass] = useState(null);
    const [error, setError] = useState(null);
    const Navigate = useNavigate();

    const Connexion = (e) =>
    {
        e.preventDefault();
        if(Email && Pass)
        {
            setError(null);
            const URL = "login_check";
            const Method = "POST";
            const Data = {"email" : Email, "password" : Pass};

            EasyFetch(URL, Data, Method).then(res =>
            {
                console.log(res);
                if(res[0].message === "Invalid credentials.")
                    setError("Email et/ou mot de passe inccorect.");
                else
                {
                    localStorage.setItem('token', res[0].token);
                    Navigate('/admin');
                }
            });
        }
        else {
            setError("Veuillez renseigner votre " +
                "adresse email et votre mot de passe.");
        }
    }

    return(
        <main className="Container Login">
            <h3>Connexion</h3>
            <form className="Login__Form">
                {error &&  <Error msg={error} /> }

                <div className="Login__Form__FormGroup">
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="Email" id="Email"
                    onChange={e => setEmail(e.currentTarget.value) }/>
                </div>
                <div className="Login__Form__FormGroup">
                    <label htmlFor="Pass">Mot de passe</label>
                    <input type="password" name="Pass" id="Pass"
                    onChange={e => setPass(e.currentTarget.value) }/>
                </div>

                <button className="Login__Form__Button"
                onClick={Connexion}>connexion</button>
            </form>

        </main>
    )
}

