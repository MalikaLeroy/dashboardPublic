
import '../assets/css/login.css';
import React, { useState } from 'react';
import Logo from '../assets/img/logo-malikaLeroy-clear.svg';
import ErrorRed from '../assets/img/icon-cancelRed.svg';


export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regexPassword = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    const [loginAnimate, setLoginAnimate] = useState("")
    const [messageTotalError, setMessageTotalError] = useState("")

    return (
        <>
            <div id="login" className={loginAnimate}>
                <div>
                    <img src={Logo} alt="Logo Malika Leroy" />
                    <h1 className="header">S'identifier</h1>
                    <form name="login" action="" onSubmit={(event) => {
                        event.preventDefault()
                        const scriptURL = 'https://script.google.com/macros/s/AKfycbzUaCA0x1lIbFpGzCZdFGBiZ0GCW-XUWiEMwGQcwMSa7LPxZpgqrF4M/exec'
                        const myRequest = new Request(scriptURL);
                        const form = document.forms['login']
                        fetch(myRequest, { method: 'POST', body: new FormData(form) })
                            .then(
                                function (response) {
                                    response.json().then(function (data) {
                                        let dataResult = data
                                        if (dataResult.result === true) {
                                            setLoginAnimate('js-logged')
                                            setMessageTotalError('')
                                            setTimeout(function () {
                                                props.setLogin('logged')
                                            }, 400);
                                        }
                                        else {
                                            setMessageTotalError('error')
                                        }
                                    });
                                }
                            )
                    }
                    }>
                        <label htmlFor="email">Adresse email</label>
                        <input type="email" name="email" id="email" required className=
                            {
                                regexEmail.test(email) ? 'js-regexValid' : ''
                            }
                            onChange={(e) => { setEmail(e.target.value); setMessageTotalError('') }} />
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" name="password" id="password" required className=
                            {
                                password.length > 0 && !regexPassword.test(password) ? 'js-regexInfo' :
                                    password.length > 0 && regexPassword.test(password) ? 'js-regexValid' : ''
                            }
                            onChange={(e) => { setPassword(e.target.value); setMessageTotalError('') }} />
                        <div>Votre mot de passe doit contenir :
                            <ul>
                                <li>au <strong>minimum six caractères</strong></li>
                                <li>un <strong>chiffre</strong></li>
                                <li>un des <strong>caractères spéciaux suivants : @ $ ! % * ? &</strong></li>
                            </ul>
                        </div>
                        <div className="informationVpublic">Saisir ces informations de connexion pour voir la version publique du dashboard : <span>test@email.com</span> et <span>@test1234</span></div>
                        {messageTotalError === "error" ? <div className="errorMessage">
                            <img src={ErrorRed} alt="erreur" />
                            Vos identifiants sont incorrects</div> : ""}
                        <button action="" method="" type="submit">Se connecter<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 30 22.813"><g transform="translate(30 65.112) rotate(180)"><path d="M4.761,111.973H20.916a1.394,1.394,0,1,0,0-2.789H4.761l1.8-1.8a1.394,1.394,0,1,0-1.972-1.972L.409,109.592c-.032.032-.063.066-.092.1l-.02.027c-.021.027-.042.054-.061.083l-.016.026c-.019.03-.038.06-.055.092l-.009.019c-.018.034-.034.069-.049.1l0,.013c-.015.038-.029.076-.041.115,0,0,0,.01,0,.015-.011.038-.022.077-.029.117,0,.012,0,.024-.005.036-.006.033-.012.066-.015.1a1.375,1.375,0,0,0,0,.278c0,.034.009.067.015.1,0,.012,0,.023.005.035.008.04.018.079.03.118l0,.014c.012.039.026.078.041.116l0,.013c.015.036.032.071.05.105l.009.018c.017.032.036.062.055.092l.015.025c.019.029.04.056.062.083l.02.026c.029.035.06.069.092.1l4.183,4.183a1.394,1.394,0,1,0,1.972-1.972Z" transform="translate(0 -56.873)" fill="#ffffff"></path><path d="M112.244,42.3a10.941,10.941,0,0,0-9.169,5.051,1.423,1.423,0,0,0,.367,1.935,1.323,1.323,0,0,0,1.873-.38,8.268,8.268,0,0,1,6.929-3.818,8.622,8.622,0,0,1,0,17.235,8.27,8.27,0,0,1-6.917-3.8,1.323,1.323,0,0,0-1.874-.375,1.423,1.423,0,0,0-.363,1.936,10.943,10.943,0,0,0,9.154,5.028,11.413,11.413,0,0,0,0-22.813Z" transform="translate(-93.284 0)" fill="#ffffff"></path></g></svg></button>
                    </form>
                </div>
            </div>
        </>
    )
}