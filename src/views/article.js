import React, { useState, useEffect } from 'react';
import '../assets/css/article.css'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loader from '../assets/img/loader.svg';
import ImgCSS from '../assets/img/article-css.png';
import ImgSASS from '../assets/img/article-sass.png';
import ImgJquery from '../assets/img/article-jquery.png';
import ImgReact from '../assets/img/article-react.png';
import Imgbootstrap from '../assets/img/article-bootstrap.png';
import ImgHTML from '../assets/img/article-html.png';
import ImgJavascript from '../assets/img/article-javascript.png';
import ImgDivers from '../assets/img/article-divers.png';


export const Article = (props) => {
    const idPage = useParams().id
    const googleSpreadRessources = 'https://spreadsheets.google.com/feeds/list/1HGHY078uZql4FrtpXJguX2o0NgcUGkzSwRPeVEhTPgY/1/public/values?alt=json' // Si les champs sont ok
    const [data, setData] = useState([])
    useEffect(() => {
        const myRequest = new Request(googleSpreadRessources);
        fetch(myRequest)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        setData('error')
                        return;
                    }
                    response.json().then(function (data) {
                        setData((data.feed.entry).reverse())
                    });
                }

            )
            .catch(function (err) {
                console.log('Erreur du fetch :-S', err);
                setData('error')
            });
    }, []);
let i = 0
let ii = 0
    return (
        <>
                {
                    data === "error" ? <tr className={data}><td colSpan="4">Les ressources ne peuvent être affichés pour le moment, merci de votre compréhension.</td></tr> :
                        data !== "" ?
                            data.filter(filtre => filtre.gsx$permalien.$t.includes(idPage))
                                .map((item) => {
                                    return (
                                        <main key={ii++} className="article bookmarks">
                                        <div id="goToNext"><Link className="btnRessource" to="/articles"><svg xmlns="http://www.w3.org/2000/svg" width="41.917" height="34.872" viewBox="0 0 41.917 34.872"><g transform="translate(41.917 76.218) rotate(180)"><g transform="translate(0 41.346)"><path d="M41.247,57.153,26.109,42.015a2.3,2.3,0,0,0-3.245,0L21.49,43.39a2.277,2.277,0,0,0-.67,1.622,2.322,2.322,0,0,0,.67,1.641L30.322,55.5H2.265A2.239,2.239,0,0,0,0,57.76V59.7a2.325,2.325,0,0,0,2.265,2.356H30.422l-8.931,8.9a2.272,2.272,0,0,0,0,3.221l1.374,1.37a2.3,2.3,0,0,0,3.245,0L41.247,60.41a2.314,2.314,0,0,0,0-3.256Z" transform="translate(0 -41.346)" fill="#fff" /></g></g></svg>Retour à la liste</Link></div>
                                        <h1 id="titlePage">Dashboard <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="32.708" viewBox="0 0 30 32.708"><g transform="translate(-0.039 0)"><g transform="translate(0.039 10.514)"><g transform="translate(0)"><path d="M19.993,166.848a7.42,7.42,0,0,0-1.281-1.03,7.632,7.632,0,0,0-9.511,1.03l-6.933,6.938a7.631,7.631,0,0,0,10.786,10.8l5.723-5.723a.545.545,0,0,0-.387-.932h-.218a9.174,9.174,0,0,1-3.488-.676.545.545,0,0,0-.594.12l-4.115,4.12a3.272,3.272,0,0,1-4.627-4.627l6.96-6.955a3.27,3.27,0,0,1,4.622,0,2.235,2.235,0,0,0,3.063,0,2.159,2.159,0,0,0,0-3.063Z" transform="translate(-0.039 -164.614)" fill="#ffffff"></path></g></g><g transform="translate(9.437 0)"><g transform="translate(0 0)"><path d="M207.868,2.235a7.631,7.631,0,0,0-10.792,0l-5.717,5.712a.547.547,0,0,0,.4.932h.2a9.156,9.156,0,0,1,3.483.681.545.545,0,0,0,.594-.12l4.1-4.1a3.272,3.272,0,1,1,4.627,4.627l-5.112,5.107-.044.049L197.823,16.9a3.27,3.27,0,0,1-4.622,0,2.235,2.235,0,0,0-3.063,0,2.173,2.173,0,0,0,0,3.074,7.565,7.565,0,0,0,2.18,1.526c.114.054.229.1.343.147s.234.087.349.131.234.082.349.114l.322.087c.218.054.436.1.659.136a7.587,7.587,0,0,0,.812.076h.414l.327-.038c.12-.005.245-.033.387-.033h.185l.376-.054.174-.033.316-.065h.06a7.63,7.63,0,0,0,3.537-2.006l6.938-6.938A7.631,7.631,0,0,0,207.868,2.235Z" transform="translate(-189.502 0)" fill="#ffffff"></path></g></g></g></svg>Article</span></h1>
                                        <div className="smallHeader">
                                           <div>
                                           { item.gsx$category.$t==="CSS"? <img className="thumbnailUrl"  src={ImgCSS} alt={item.gsx$category.$t}></img>:
                                            item.gsx$category.$t==="Jquery"? <img className="thumbnailUrl"  src={ImgJquery} alt={item.gsx$category.$t}></img>:
                                            item.gsx$category.$t==="React"? <img className="thumbnailUrl"  src={ImgReact} alt={item.gsx$category.$t}></img>:
                                            item.gsx$category.$t==="Bootstrap"? <img className="thumbnailUrl"  src={Imgbootstrap} alt={item.gsx$category.$t}></img>:
                                            item.gsx$category.$t==="SASS"? <img className="thumbnailUrl"  src={ImgSASS} alt={item.gsx$category.$t}></img>:
                                            item.gsx$category.$t==="Javascript"? <img className="thumbnailUrl"  src={ImgJavascript} alt={item.gsx$category.$t}></img>:
                                            item.gsx$category.$t==="HTML"? <img className="thumbnailUrl"  src={ImgHTML} alt={item.gsx$category.$t}></img>:
                                            item.gsx$category.$t==="Divers"? <img className="thumbnailUrl"  src={ImgDivers} alt={item.gsx$category.$t}></img>:
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="130.145" viewBox="0 0 130.145 130.145"><g transform="translate(0.001 0.001)"><circle cx="4" cy="4" r="4" transform="translate(98.999 46)" fill="#879eaf"/><path d="M7.879,34.569V95.575a3.813,3.813,0,0,0,3.813,3.813H94l29.64,29.64a3.813,3.813,0,0,0,5.392-5.392L104.78,99.388h13.672a3.813,3.813,0,0,0,3.813-3.813V34.569a3.813,3.813,0,0,0-3.813-3.813H90.306l-4.464-8.928a11.377,11.377,0,0,0-10.231-6.323H54.534A11.377,11.377,0,0,0,44.3,21.828l-4.464,8.928h-3.69L6.508,1.116A3.813,3.813,0,0,0,1.116,6.508L25.364,30.757H11.692a3.813,3.813,0,0,0-3.813,3.813Zm37.726,1.705,5.518-11.036a3.792,3.792,0,0,1,3.41-2.108H75.611a3.792,3.792,0,0,1,3.41,2.108l5.518,11.036a3.812,3.812,0,0,0,3.41,2.107h26.69v53.38H97.154L80.97,75.578a19.052,19.052,0,0,0-26.4-26.4L43.532,38.139a3.812,3.812,0,0,0,2.074-1.865Zm9.146,23.869L70,75.393A11.436,11.436,0,0,1,54.752,60.144Zm5.392-5.392A11.436,11.436,0,0,1,75.393,70ZM15.505,38.382H32.99L49.175,54.567a19.052,19.052,0,0,0,26.4,26.4L86.37,91.762H15.505Z" fill="#879eaf"/><path d="M214.813,128.626h15.251a3.813,3.813,0,0,0,0-7.626H214.813a3.813,3.813,0,0,0,0,7.626Z" transform="translate(-157.366 -90.243)" fill="#879eaf"/></g></svg>
                                             }
                                             <div><h2>{item.gsx$title.$t}</h2>
                                             {
                                            item.gsx$labels.$t ? <ul className="labels">
                                            {item.gsx$labels.$t.split(",").map((label) => {
                                                return (
                                                    <li key={i++}>{label}</li>
                                                )})}
                                            </ul> : ""
                                                }

                                             </div>
                                             
                                           </div>
                                           <ul>
                                               <li>Date de publication :<span>{item.gsx$timestamp.$t}</span></li>
                                               <li>Status : <span className={item.gsx$status.$t==="Rédaction terminé" ? "redacOk" : "redacNok"}>{item.gsx$status.$t}</span></li></ul>
                                        </div>
                                        {item.gsx$summary.$t!==""? <div id="summary" dangerouslySetInnerHTML={{__html:item.gsx$summary.$t}}></div> : ""}
                                        <div id="articleContent" dangerouslySetInnerHTML={{__html:item.gsx$body.$t}}></div>
                                        </main>
                                    )
                                })
                            :
                            <main className="loader"><img src={Loader} alt="loader" /></main>
                }
        </>
    )
}
