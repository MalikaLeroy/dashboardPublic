import '../assets/css/searchBar.css';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Loader from '../assets/img/loader.svg';
export const SearchBar = (props) => {
    const [popAddBookmark, setPopAddBookmark] = useState(false)
    const [messageSubmit, setMessageSubmit] = useState("")
    const [displayAddBookmark, setDisplayAddBookmark] = useState("hidden")
    const [popAddRessources, setPopAddRessources] = useState(false)
    const [displayAddRessources, setDisplayAddRessources] = useState("hidden")
    const location = useLocation();
    const [titleUrlRewriting, setTitleUrlRewriting] = useState("")



    return (
        <div id="searchBarEdit" className={props.fixedElement}>
            <form onSubmit={(event) => {
                event.preventDefault()
            }}>
                <input placeholder={location.pathname === "/favoris" ? "Rechercher un favori" : "Rechercher un article"} type="search" onChange={(e) => { props.setFilterSearch(e.target.value.toLowerCase()) }} />
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30.238" height="30.239" viewBox="0 0 30.238 30.239"><g transform="translate(-0.001 0)"><path d="M20.194,3.46a11.833,11.833,0,1,0-1.618,18.075,2.491,2.491,0,0,0,.676,1.254l6.718,6.718a2.5,2.5,0,0,0,3.535-3.535l-6.718-6.72a2.5,2.5,0,0,0-1.253-.674A11.845,11.845,0,0,0,20.194,3.46ZM18.073,18.074a8.833,8.833,0,1,1,0-12.492A8.843,8.843,0,0,1,18.073,18.074Z" /></g></svg>
                </button>
                <span></span>
            </form>
            {location.pathname === "/articles" || location.pathname === "/" ? <button className="favorite styled" type="button" onClick={(e) => { setPopAddRessources(true); setDisplayAddRessources("open") }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30.076" viewBox="0 0 30 30.076"><g transform="translate(-0.373 -0.001)"><path d="M139.3,14.429a2.5,2.5,0,0,1,2.893.455l1.013-1.013a7.137,7.137,0,0,0,9.409-7.883.65.65,0,0,0-1.1-.356l-1.5,1.5A3.137,3.137,0,0,1,145.577,2.7l1.5-1.5a.65.65,0,0,0-.356-1.1,7.136,7.136,0,0,0-7.841,9.52l-2.2,2.2Z" transform="translate(-122.34 0)" fill="#879eaf" /><path d="M12.982,156.518l-2.607-2.607-9.114,9.114a3.035,3.035,0,0,0,4.292,4.292l7.857-7.857A2.5,2.5,0,0,1,12.982,156.518Z" transform="translate(0 -138.128)" fill="#879eaf" /><path d="M19.015,31.99a.954.954,0,0,0-1.349,0l-.544.544L7.438,22.849,7.89,22.4a.954.954,0,0,0-.109-1.443L3.83,18.044a.954.954,0,0,0-1.24.094L.912,19.815a.954.954,0,0,0-.094,1.24l2.91,3.951a.954.954,0,0,0,1.443.109l.453-.453,9.685,9.685-.582.582a.954.954,0,0,0,0,1.349l8.934,8.934a3.032,3.032,0,0,0,4.288-4.288Z" transform="translate(-0.234 -16.023)" fill="#879eaf" /></g></svg>
                <span>+</span>
            </button> : ""}
            {location.pathname === "/favoris" || location.pathname === "/" ? <button className="favorite styled" type="button" onClick={(e) => { setPopAddBookmark(true); setDisplayAddBookmark("open") }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32.708" viewBox="0 0 30 32.708"><g transform="translate(-0.039 0)"><g transform="translate(0.039 10.514)"><g transform="translate(0)"><path d="M19.993,166.848a7.42,7.42,0,0,0-1.281-1.03,7.632,7.632,0,0,0-9.511,1.03l-6.933,6.938a7.631,7.631,0,0,0,10.786,10.8l5.723-5.723a.545.545,0,0,0-.387-.932h-.218a9.174,9.174,0,0,1-3.488-.676.545.545,0,0,0-.594.12l-4.115,4.12a3.272,3.272,0,0,1-4.627-4.627l6.96-6.955a3.27,3.27,0,0,1,4.622,0,2.235,2.235,0,0,0,3.063,0,2.159,2.159,0,0,0,0-3.063Z" transform="translate(-0.039 -164.614)" fill="#879eaf" /></g></g><g transform="translate(9.437 0)"><g transform="translate(0 0)"><path d="M207.868,2.235a7.631,7.631,0,0,0-10.792,0l-5.717,5.712a.547.547,0,0,0,.4.932h.2a9.156,9.156,0,0,1,3.483.681.545.545,0,0,0,.594-.12l4.1-4.1a3.272,3.272,0,1,1,4.627,4.627l-5.112,5.107-.044.049L197.823,16.9a3.27,3.27,0,0,1-4.622,0,2.235,2.235,0,0,0-3.063,0,2.173,2.173,0,0,0,0,3.074,7.565,7.565,0,0,0,2.18,1.526c.114.054.229.1.343.147s.234.087.349.131.234.082.349.114l.322.087c.218.054.436.1.659.136a7.587,7.587,0,0,0,.812.076h.414l.327-.038c.12-.005.245-.033.387-.033h.185l.376-.054.174-.033.316-.065h.06a7.63,7.63,0,0,0,3.537-2.006l6.938-6.938A7.631,7.631,0,0,0,207.868,2.235Z" transform="translate(-189.502 0)" fill="#879eaf" /></g></g></g></svg>
                <span>+</span>
            </button> : ""}

            {popAddBookmark ?
                <div className={displayAddBookmark + ` modal`}>
                    <div className="modal-wrap">
                        <div className="modal-content">
                            <div className="close-btn" onClick={(e) => {
                                setDisplayAddBookmark("hidden");
                                setTimeout(function () { setPopAddBookmark(false) }, 200)

                            }}>×</div>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 30 32.708"><g transform="translate(-0.039 0)"><g transform="translate(0.039 10.514)"><g transform="translate(0)"><path d="M19.993,166.848a7.42,7.42,0,0,0-1.281-1.03,7.632,7.632,0,0,0-9.511,1.03l-6.933,6.938a7.631,7.631,0,0,0,10.786,10.8l5.723-5.723a.545.545,0,0,0-.387-.932h-.218a9.174,9.174,0,0,1-3.488-.676.545.545,0,0,0-.594.12l-4.115,4.12a3.272,3.272,0,0,1-4.627-4.627l6.96-6.955a3.27,3.27,0,0,1,4.622,0,2.235,2.235,0,0,0,3.063,0,2.159,2.159,0,0,0,0-3.063Z" transform="translate(-0.039 -164.614)" fill="#623a6c"></path></g></g><g transform="translate(9.437 0)"><g transform="translate(0 0)"><path d="M207.868,2.235a7.631,7.631,0,0,0-10.792,0l-5.717,5.712a.547.547,0,0,0,.4.932h.2a9.156,9.156,0,0,1,3.483.681.545.545,0,0,0,.594-.12l4.1-4.1a3.272,3.272,0,1,1,4.627,4.627l-5.112,5.107-.044.049L197.823,16.9a3.27,3.27,0,0,1-4.622,0,2.235,2.235,0,0,0-3.063,0,2.173,2.173,0,0,0,0,3.074,7.565,7.565,0,0,0,2.18,1.526c.114.054.229.1.343.147s.234.087.349.131.234.082.349.114l.322.087c.218.054.436.1.659.136a7.587,7.587,0,0,0,.812.076h.414l.327-.038c.12-.005.245-.033.387-.033h.185l.376-.054.174-.033.316-.065h.06a7.63,7.63,0,0,0,3.537-2.006l6.938-6.938A7.631,7.631,0,0,0,207.868,2.235Z" transform="translate(-189.502 0)" fill="#623a6c"></path></g></g></g></svg>
                                Ajouter un favori à la liste
                             </p>
                            <form name="submit-to-google-sheet" onSubmit={(event) => {
                                event.preventDefault()
                                const scriptURL = 'https://script.google.com/macros/s/AKfycbyt_3mdi6mJBGYftKWyIzlhZ-xW-SGcFC7sS_jTZTSGkvyNVnVeLtXx/exec'
                                const form = document.forms['submit-to-google-sheet']
                                setMessageSubmit("loading")
                                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                    .then(response => {
                                        setMessageSubmit("messageSent")
                                        props.setRefresh(props.refresh + 1)
                                        setTimeout(function () { setDisplayAddBookmark("hidden"); }, 1000);
                                        setTimeout(function () { setMessageSubmit(""); setPopAddBookmark(false); }, 1200);
                                    })
                                    .catch(error => {
                                        console.log("nok POST")
                                        setMessageSubmit("errorMessage")
                                    })
                            }
                            }
                            >
                                <div>
                                    <label htmlFor="titleBookmark">Titre</label>
                                    <input type="text" name="title" id="titleBookmark" required autoFocus />
                                </div>
                                <div>
                                    <label htmlFor="url">Url</label>
                                    <input type="url" name="url" id="url" required />
                                </div>
                                <div className="cat">
                                    <p>Catégorie <span>facultatif</span></p>
                                    <input type="radio" id="outils" name="category" value="outils" />
                                    <label htmlFor="outils">Outils</label>
                                    <input type="radio" id="wordpress" name="category" value="wordpress" />
                                    <label htmlFor="wordpress">Wordpress</label>
                                    <input type="radio" id="ressources" name="category" value="ressources" />
                                    <label htmlFor="ressources">Ressources graphiques</label>
                                    <input type="radio" id="Divers" name="category" value="Divers" />
                                    <label htmlFor="Divers">Divers</label>
                                </div>
                                <div>
                                    <label htmlFor="description">Description <span>facultatif</span></label>
                                    <textarea id="description" name="summary" rows="10" placeholder="Courte description du site"></textarea>
                                </div>
                                <div className={messageSubmit + " message"}>
                                    {messageSubmit === "messageSent" ? "Votre favori a bien été ajouté à la liste"
                                        : messageSubmit === "errorMessage" ? "Votre favori n'a pas été ajouté, merci de réessayer ultérieurement"
                                            : messageSubmit === "loading" ? <img src={Loader} alt="loader" />
                                                : ""}
                                </div>
                                <button action="" method="" type="submit">Ajouter ce favori à la liste<span>+</span></button>
                            </form>
                        </div>
                    </div>
                    <div className="bg-overlay" onClick={(e) => {
                        setDisplayAddBookmark("hidden");
                        setTimeout(function () { setPopAddBookmark(false) }, 200)
                    }}></div>
                </div>
                : ""
            }
            {popAddRessources ?
                <div className={displayAddRessources + ` modal`}>
                    <div className="modal-wrap ressources">
                        <div className="modal-content">
                            <div className="close-btn" onClick={(e) => {
                                setDisplayAddRessources("hidden");
                                setTimeout(function () { setPopAddRessources(false) }, 200)
                            }}>×</div>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30.076" viewBox="0 0 30 30.076"><g transform="translate(-0.373 -0.001)"><path d="M139.3,14.429a2.5,2.5,0,0,1,2.893.455l1.013-1.013a7.137,7.137,0,0,0,9.409-7.883.65.65,0,0,0-1.1-.356l-1.5,1.5A3.137,3.137,0,0,1,145.577,2.7l1.5-1.5a.65.65,0,0,0-.356-1.1,7.136,7.136,0,0,0-7.841,9.52l-2.2,2.2Z" transform="translate(-122.34 0)" fill="#623a6c" /><path d="M12.982,156.518l-2.607-2.607-9.114,9.114a3.035,3.035,0,0,0,4.292,4.292l7.857-7.857A2.5,2.5,0,0,1,12.982,156.518Z" transform="translate(0 -138.128)" fill="#623a6c" /><path d="M19.015,31.99a.954.954,0,0,0-1.349,0l-.544.544L7.438,22.849,7.89,22.4a.954.954,0,0,0-.109-1.443L3.83,18.044a.954.954,0,0,0-1.24.094L.912,19.815a.954.954,0,0,0-.094,1.24l2.91,3.951a.954.954,0,0,0,1.443.109l.453-.453,9.685,9.685-.582.582a.954.954,0,0,0,0,1.349l8.934,8.934a3.032,3.032,0,0,0,4.288-4.288Z" transform="translate(-0.234 -16.023)" fill="#623a6c" /></g></svg>
                                Ajouter cette ressources à la liste
                             </p>
                            <form name="submit-to-google-sheet" onSubmit={(event) => {
                                event.preventDefault()
                                const scriptURL = 'https://script.google.com/macros/s/AKfycbxbYFSc-5E0s9iyp9yCwP-6J0AAeQIUhfajI7s4EZoQGcCt4G9eMOcO/exec'
                                const form = document.forms['submit-to-google-sheet']
                                setMessageSubmit("loading")
                                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                    .then(response => {
                                        setMessageSubmit("messageSent")
                                        props.setRefresh(props.refresh + 1)
                                        setTimeout(function () { setDisplayAddRessources("hidden"); setTitleUrlRewriting(""); }, 1000);
                                        setTimeout(function () { setMessageSubmit(""); setPopAddRessources(false) }, 1200);
                                    })
                                    .catch(error => {
                                        setMessageSubmit("errorMessage")
                                    })
                            }
                            }
                            >
                                <div>
                                    <label htmlFor="titleBookmark" >Titre</label>
                                    <input type="text" name="title" id="titleBookmark" required onChange={(e) => { setTitleUrlRewriting(e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/gi, '').replace(/[\s]/gi, '-')); }} />
                                </div>
                                <div className="permalien">
                                    <label htmlFor="permalien">Permalien : <span>{"..." + location.pathname + "/" + titleUrlRewriting}</span></label>
                                    <input type="text" name="permalien" value={titleUrlRewriting} readOnly id="permalien" required />
                                </div>
                                <div className="cat">
                                    <p>Catégorie <span>facultatif</span></p>
                                    <input type="radio" id="HTML" name="category" value="HTML" />
                                    <label htmlFor="HTML">HTML</label>
                                    <input type="radio" id="CSS" name="category" value="CSS" />
                                    <label htmlFor="CSS">CSS</label>
                                    <input type="radio" id="Sass" name="category" value="SASS" />
                                    <label htmlFor="Sass">SASS</label>
                                    <input type="radio" id="Bootstrap" name="category" value="Bootstrap" />
                                    <label htmlFor="Bootstrap">Bootstrap</label>
                                    <input type="radio" id="Javascript" name="category" value="Javascript" />
                                    <label htmlFor="Javascript">Javascript</label>
                                    <input type="radio" id="Jquery" name="category" value="Jquery" />
                                    <label htmlFor="Jquery">Jquery</label>
                                    <input type="radio" id="React" name="category" value="React" />
                                    <label htmlFor="React">React</label>
                                    <input type="radio" id="Divers" name="category" value="Divers" />
                                    <label htmlFor="Divers">Divers</label>
                                </div>
                                <div>
                                    <label htmlFor="description">Résumé de la ressources <span>facultatif</span></label>
                                    <textarea id="description" name="summary" rows="10" placeholder="Court résumé"></textarea>
                                </div>
                                <div>
                                    <label htmlFor="content">Contenu de la ressources</label>
                                    <textarea id="content" name="body" rows="10" required placeholder="Contenu de la ressources"></textarea>
                                </div>
                                <div>
                                    <label htmlFor="labels">Etiquettes <span>facultatif</span></label>
                                    <input type="text" name="labels" id="labels" placeholder="mot clé 1, mot clé 2..." />
                                </div>
                                <div className="cat">
                                    <p>Statut <span>facultatif</span></p>
                                    <input type="radio" id="statusNok" name="status" value="En cours de rédaction" />
                                    <label htmlFor="statusNok">En cours de rédaction</label>
                                    <input type="radio" id="statusOk" name="status" value="Rédaction terminé" />
                                    <label htmlFor="statusOk">Rédaction terminé</label>
                                </div>

                                <div className={messageSubmit + " message"}>
                                    {messageSubmit === "messageSent" ? "Votre favori a bien été ajouté à la liste"
                                        : messageSubmit === "errorMessage" ? "Votre favori n'a pas été ajouté, merci de réessayer ultérieurement"
                                            : messageSubmit === "loading" ? <img src={Loader} alt="loader" />
                                                : ""}
                                </div>
                                <button action="" method="" type="submit">Ajouter cette ressources à la liste<span>+</span></button>
                            </form>
                        </div>
                    </div>
                    <div className="bg-overlay" onClick={(e) => {
                        setDisplayAddRessources("hidden");
                        setTimeout(function () { setPopAddRessources(false) }, 200)
                    }}></div>
                </div>
                : ""
            }
        </div>
    )
}