import { NavLink } from "react-router-dom";
import './../assets/css/nav.css';
import Logo from '../assets/img/logo-malikaLeroy.svg';
export const Nav = (props) => {
    return (

        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeClassName="active">
                        <img src={Logo} alt="Accueil" /><p className="title">Dashboard</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/favoris" activeClassName="active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32.708" viewBox="0 0 30 32.708"><g transform="translate(-0.039 0)"><g transform="translate(0.039 10.514)"><g transform="translate(0)"><path d="M19.993,166.848a7.42,7.42,0,0,0-1.281-1.03,7.632,7.632,0,0,0-9.511,1.03l-6.933,6.938a7.631,7.631,0,0,0,10.786,10.8l5.723-5.723a.545.545,0,0,0-.387-.932h-.218a9.174,9.174,0,0,1-3.488-.676.545.545,0,0,0-.594.12l-4.115,4.12a3.272,3.272,0,0,1-4.627-4.627l6.96-6.955a3.27,3.27,0,0,1,4.622,0,2.235,2.235,0,0,0,3.063,0,2.159,2.159,0,0,0,0-3.063Z" transform="translate(-0.039 -164.614)" fill="#879eaf" /></g></g><g transform="translate(9.437 0)"><g transform="translate(0 0)"><path d="M207.868,2.235a7.631,7.631,0,0,0-10.792,0l-5.717,5.712a.547.547,0,0,0,.4.932h.2a9.156,9.156,0,0,1,3.483.681.545.545,0,0,0,.594-.12l4.1-4.1a3.272,3.272,0,1,1,4.627,4.627l-5.112,5.107-.044.049L197.823,16.9a3.27,3.27,0,0,1-4.622,0,2.235,2.235,0,0,0-3.063,0,2.173,2.173,0,0,0,0,3.074,7.565,7.565,0,0,0,2.18,1.526c.114.054.229.1.343.147s.234.087.349.131.234.082.349.114l.322.087c.218.054.436.1.659.136a7.587,7.587,0,0,0,.812.076h.414l.327-.038c.12-.005.245-.033.387-.033h.185l.376-.054.174-.033.316-.065h.06a7.63,7.63,0,0,0,3.537-2.006l6.938-6.938A7.631,7.631,0,0,0,207.868,2.235Z" transform="translate(-189.502 0)" fill="#879eaf" /></g></g></g></svg>
                        <span>Favoris</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/articles" activeClassName="active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30.076" viewBox="0 0 30 30.076"><g transform="translate(-0.373 -0.001)"><path d="M139.3,14.429a2.5,2.5,0,0,1,2.893.455l1.013-1.013a7.137,7.137,0,0,0,9.409-7.883.65.65,0,0,0-1.1-.356l-1.5,1.5A3.137,3.137,0,0,1,145.577,2.7l1.5-1.5a.65.65,0,0,0-.356-1.1,7.136,7.136,0,0,0-7.841,9.52l-2.2,2.2Z" transform="translate(-122.34 0)" fill="#879eaf" /><path d="M12.982,156.518l-2.607-2.607-9.114,9.114a3.035,3.035,0,0,0,4.292,4.292l7.857-7.857A2.5,2.5,0,0,1,12.982,156.518Z" transform="translate(0 -138.128)" fill="#879eaf" /><path d="M19.015,31.99a.954.954,0,0,0-1.349,0l-.544.544L7.438,22.849,7.89,22.4a.954.954,0,0,0-.109-1.443L3.83,18.044a.954.954,0,0,0-1.24.094L.912,19.815a.954.954,0,0,0-.094,1.24l2.91,3.951a.954.954,0,0,0,1.443.109l.453-.453,9.685,9.685-.582.582a.954.954,0,0,0,0,1.349l8.934,8.934a3.032,3.032,0,0,0,4.288-4.288Z" transform="translate(-0.234 -16.023)" fill="#879eaf" /></g></svg>
                        <span>Articles</span>
                    </NavLink>
                </li>
                {/*
            <li>
                <NavLink to="/news" activeClassName="active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29.976" viewBox="0 0 30 29.976"><g transform="translate(0 -0.05)"><circle cx="4.516" cy="4.516" r="4.516" transform="translate(0.068 20.948)" fill="#879eaf"/><path d="M15.129,54.337a2.258,2.258,0,0,0,4.516,0A17.409,17.409,0,0,0,2.258,36.95a2.258,2.258,0,1,0,0,4.516A12.88,12.88,0,0,1,15.129,54.337Z" transform="translate(0 -26.569)" fill="#879eaf"/><path d="M27.658,30.026a2.427,2.427,0,0,0,2.419-2.419A27.59,27.59,0,0,0,2.519.05a2.419,2.419,0,1,0,0,4.839A22.737,22.737,0,0,1,25.238,27.606,2.411,2.411,0,0,0,27.658,30.026Z" transform="translate(-0.077)" fill="#879eaf"/></g></svg>
                    <span>News</span>
                </NavLink>
            </li>
            */}

                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://statcounter.com/p12359072/visitor/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29.994" viewBox="0 0 30 29.994"><g transform="translate(0 -0.05)"><g transform="translate(0 11.477)"><path d="M7.646,187.75H1.094A1.1,1.1,0,0,0,0,188.844v16.379a1.094,1.094,0,0,0,1.094,1.094H7.646a1.094,1.094,0,0,0,1.094-1.094V188.844A1.094,1.094,0,0,0,7.646,187.75Z" transform="translate(0 -187.75)" fill="#879eaf" /></g><g transform="translate(10.63 0.05)"><g transform="translate(0 0)"><path d="M178.346.05h-6.551A1.082,1.082,0,0,0,170.7,1.117V28.971a1.083,1.083,0,0,0,1.094,1.073h6.551a1.083,1.083,0,0,0,1.094-1.073V1.123A1.083,1.083,0,0,0,178.346.05Z" transform="translate(-170.7 -0.05)" fill="#879eaf" /></g></g><g transform="translate(21.26 8.201)"><path d="M349.046,136.55h-6.551a1.09,1.09,0,0,0-1.094,1.094V157.3a1.094,1.094,0,0,0,1.094,1.094h6.551a1.094,1.094,0,0,0,1.094-1.094V137.644A1.094,1.094,0,0,0,349.046,136.55Z" transform="translate(-341.4 -136.55)" fill="#879eaf" /></g></g></svg>
                        <span>Stats</span>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22.852" viewBox="0 0 30 22.852"><g transform="translate(0 -61)"><g transform="translate(1.519 61)"><g transform="translate(0 0)"><path d="M51.555,61H26.85a2.586,2.586,0,0,0-1.129.266L39.144,74.8l3.008-2.916h0L52.684,61.267A2.586,2.586,0,0,0,51.555,61Z" transform="translate(-25.721 -61)" fill="#879eaf" /></g></g><g transform="translate(19.739 62.519)"><g transform="translate(0 0)"><path d="M348.208,86.728l-10,9.907,9.995,9.907a2.585,2.585,0,0,0,.266-1.128V87.856A2.585,2.585,0,0,0,348.208,86.728Z" transform="translate(-338.213 -86.728)" fill="#879eaf" /></g></g><g transform="translate(0 62.519)"><g transform="translate(0 0)"><path d="M.266,86.721A2.584,2.584,0,0,0,0,87.849v17.558a2.585,2.585,0,0,0,.266,1.128l10-9.907Z" transform="translate(0 -86.721)" fill="#879eaf" /></g></g><g transform="translate(1.518 73.59)"><g transform="translate(0 0)"><path d="M42.767,277.211l-3.009,2.916a.872.872,0,0,1-1.242,0l-2.892-2.917-9.911,9.995a2.586,2.586,0,0,0,1.129.267H51.548a2.586,2.586,0,0,0,1.129-.266Z" transform="translate(-25.714 -277.211)" fill="#879eaf" /></g></g></g></svg>
                        <span>e-mail</span>
                    </a>
                </li>

                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="37.517" viewBox="0 0 30 37.517"><g transform="translate(-47.949 0)"><g transform="translate(47.949 0)"><path d="M77.7,15.732a21.487,21.487,0,0,0,.248-2.93A9.911,9.911,0,0,0,75.29,5.745c.63-3.519-.1-5.119-.446-5.667-1.26-.447-4.383,1.154-6.089,2.281-2.782-.814-8.661-.735-10.866.211C53.821-.344,51.669.1,51.669.1A8.584,8.584,0,0,0,51.3,6.244c-1.338,1.706-2.336,2.912-2.336,6.11a18.889,18.889,0,0,0,.128,2.186c1.153,6.061,5.955,8.675,10.672,9.126a4.247,4.247,0,0,0-1.68,2.743A5.478,5.478,0,0,1,54,26.738c-1.955-.618-2.7-4.489-5.631-3.937-.633.119-.508.536.041.893a5.757,5.757,0,0,1,2.379,2.836,4.8,4.8,0,0,0,4.85,3.291,14.83,14.83,0,0,0,2.232-.155s.025,3.011.025,4.185c0,1.351-1.824,1.731-1.824,2.379,0,.258.6.282,1.089.282.959,0,2.953-.8,2.953-2.2,0-1.116.018-4.866.018-5.523a2.12,2.12,0,0,1,.769-1.892s.094,7.661-.185,8.688c-.327,1.208-.921,1.036-.921,1.574,0,.8,2.4.2,3.193-1.56.615-1.371.34-8.884.34-8.884l.641-.014s.007,3.441-.015,5.012c-.023,1.628-.191,3.686.776,4.658.635.639,2.579,1.76,2.579.735,0-.594-1.362-1.084-1.362-2.693V27c.827,0,1,2.436,1,2.436l.3,4.525a2.309,2.309,0,0,0,1.784,2.34c.7.245,2.2.312,2.266-.1s-1.8-1.022-1.82-2.3c-.01-.778.035-1.234.035-4.62s-.455-4.636-2.039-5.633C72.07,23.178,76.841,21.127,77.7,15.732Z" transform="translate(-47.949 0)" fill="#879eaf" /></g></g></svg>
                        <span>Github</span>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/login/fr?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M28.2,28.451H28.2V17.262c0-5.473-1.178-9.688-7.576-9.688a6.642,6.642,0,0,0-5.982,3.288h-.089V8.085H8.489V28.449h6.317V18.366c0-2.655.5-5.222,3.791-5.222,3.24,0,3.288,3.03,3.288,5.393v9.915Z" transform="translate(1.797 1.549)" fill="#879eaf" /><path d="M.4,7.977H6.72V28.341H.4Z" transform="translate(0.107 1.659)" fill="#879eaf" /><path d="M3.663,0A3.68,3.68,0,1,0,7.326,3.663,3.664,3.664,0,0,0,3.663,0Z" fill="#879eaf" /></svg>
                        <span>Linkedin</span>
                    </a>
                </li>
                <li>
                    <NavLink to="/login" activeClassName="active" onClick={() => { props.setLogin('unlogged') }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22.813" viewBox="0 0 30 22.813"><g transform="translate(30 65.112) rotate(180)"><path d="M4.761,111.973H20.916a1.394,1.394,0,1,0,0-2.789H4.761l1.8-1.8a1.394,1.394,0,1,0-1.972-1.972L.409,109.592c-.032.032-.063.066-.092.1l-.02.027c-.021.027-.042.054-.061.083l-.016.026c-.019.03-.038.06-.055.092l-.009.019c-.018.034-.034.069-.049.1l0,.013c-.015.038-.029.076-.041.115,0,0,0,.01,0,.015-.011.038-.022.077-.029.117,0,.012,0,.024-.005.036-.006.033-.012.066-.015.1a1.375,1.375,0,0,0,0,.278c0,.034.009.067.015.1,0,.012,0,.023.005.035.008.04.018.079.03.118l0,.014c.012.039.026.078.041.116l0,.013c.015.036.032.071.05.105l.009.018c.017.032.036.062.055.092l.015.025c.019.029.04.056.062.083l.02.026c.029.035.06.069.092.1l4.183,4.183a1.394,1.394,0,1,0,1.972-1.972Z" transform="translate(0 -56.873)" fill="#879eaf" /><path d="M112.244,42.3a10.941,10.941,0,0,0-9.169,5.051,1.423,1.423,0,0,0,.367,1.935,1.323,1.323,0,0,0,1.873-.38,8.268,8.268,0,0,1,6.929-3.818,8.622,8.622,0,0,1,0,17.235,8.27,8.27,0,0,1-6.917-3.8,1.323,1.323,0,0,0-1.874-.375,1.423,1.423,0,0,0-.363,1.936,10.943,10.943,0,0,0,9.154,5.028,11.413,11.413,0,0,0,0-22.813Z" transform="translate(-93.284 0)" fill="#879eaf" /></g></svg>
                        <span>D??connexion</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
