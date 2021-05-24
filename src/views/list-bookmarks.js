
import '../assets/css/bookmarks.css'
import React, { useState, useEffect } from 'react';
import Loader from '../assets/img/loader.svg';

export const ListBookmarks = (props) => {
    const googleSpreadBookmarks = 'https://spreadsheets.google.com/feeds/list/1AXJxlkIRbLpA0n2fSSAlrDB1qXm1wt2jbkyoNGwXmlg/1/public/values?alt=json' // Si les champs sont ok
    const [data, setData] = useState([])
    const [filterBookmarks, setFilterBookmarks] = useState('')
    useEffect(() => {

        fetch(googleSpreadBookmarks)
            .then(res => res.json()
            )
            .then(
                (result) => {
                    setData(result.feed.entry.reverse())


                    return
                },
                (error) => {
                    setData('error')

                }
            )
        return () => setData([])
    }, [props.refresh])
    let i = 0
    return (
        <>
            <main className="bookmarks">
                <h1 id="titlePage">Dashboard <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="32.708" viewBox="0 0 30 32.708"><g transform="translate(-0.039 0)"><g transform="translate(0.039 10.514)"><g transform="translate(0)"><path d="M19.993,166.848a7.42,7.42,0,0,0-1.281-1.03,7.632,7.632,0,0,0-9.511,1.03l-6.933,6.938a7.631,7.631,0,0,0,10.786,10.8l5.723-5.723a.545.545,0,0,0-.387-.932h-.218a9.174,9.174,0,0,1-3.488-.676.545.545,0,0,0-.594.12l-4.115,4.12a3.272,3.272,0,0,1-4.627-4.627l6.96-6.955a3.27,3.27,0,0,1,4.622,0,2.235,2.235,0,0,0,3.063,0,2.159,2.159,0,0,0,0-3.063Z" transform="translate(-0.039 -164.614)" fill="#ffffff"></path></g></g><g transform="translate(9.437 0)"><g transform="translate(0 0)"><path d="M207.868,2.235a7.631,7.631,0,0,0-10.792,0l-5.717,5.712a.547.547,0,0,0,.4.932h.2a9.156,9.156,0,0,1,3.483.681.545.545,0,0,0,.594-.12l4.1-4.1a3.272,3.272,0,1,1,4.627,4.627l-5.112,5.107-.044.049L197.823,16.9a3.27,3.27,0,0,1-4.622,0,2.235,2.235,0,0,0-3.063,0,2.173,2.173,0,0,0,0,3.074,7.565,7.565,0,0,0,2.18,1.526c.114.054.229.1.343.147s.234.087.349.131.234.082.349.114l.322.087c.218.054.436.1.659.136a7.587,7.587,0,0,0,.812.076h.414l.327-.038c.12-.005.245-.033.387-.033h.185l.376-.054.174-.033.316-.065h.06a7.63,7.63,0,0,0,3.537-2.006l6.938-6.938A7.631,7.631,0,0,0,207.868,2.235Z" transform="translate(-189.502 0)" fill="#ffffff"></path></g></g></g></svg>Favoris</span></h1>

                <section id="bookmarks">
                    <table>
                        <thead>
                            <tr>
                                <th>Sources</th>
                                <th>
                                    <form onSubmit={(event) => {
                                        event.preventDefault()
                                    }}>
                                        <div className="nice-select">
                                            <div>Filtrer par catégorie</div>
                                            <input className="choose-list all" type="radio" id="all" value="" name="choose-list" onChange={(e) => { setFilterBookmarks(e.target.value) }} />
                                            <label className="choose-list all" htmlFor="all">Tous</label>
                                            <input className="choose-list" type="radio" id="outils" value="Outils" name="choose-list" onChange={(e) => { setFilterBookmarks(e.target.value) }} />
                                            <label className="choose-list" htmlFor="outils">Outils</label>
                                            <input className="choose-list" type="radio" id="wordpress" value="Wordpress" name="choose-list" onChange={(e) => { setFilterBookmarks(e.target.value) }} />
                                            <label className="choose-list" htmlFor="wordpress">Wordpress</label>
                                            <input className="choose-list" type="radio" id="ressources" value="Ressources" name="choose-list" onChange={(e) => { setFilterBookmarks(e.target.value) }} />
                                            <label className="choose-list" htmlFor="ressources">Ressources graphiques</label>
                                            <input className="choose-list" type="radio" id="divers" value="Divers" name="choose-list" onChange={(e) => { setFilterBookmarks(e.target.value) }} />
                                            <label className="choose-list" htmlFor="divers">Divers</label>
                                            <div>Modifier le filte</div>
                                        </div>
                                    </form>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data === "error" ? <tr className={props.data}><td colSpan="2">Les favoris ne peuvent être affichés pour le moment, merci de votre compréhension.</td></tr> :
                                    data.length > 0 ?
                                        data.filter(filtre => filtre.gsx$category.$t.includes(filterBookmarks))
                                            .filter(filtre => filtre.gsx$title.$t.toLowerCase().includes(props.filterSearch))
                                            .map((item) => {
                                                return (
                                                    <tr key={i++}>
                                                        <td>
                                                            <a href={item.gsx$url.$t} target="_blank" rel="noopener noreferrer">
                                                                <h2>{item.gsx$title.$t}</h2>
                                                                <p dangerouslySetInnerHTML={{ __html: item.gsx$summary.$t }}></p>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href={item.gsx$url.$t} target="_blank" rel="noopener noreferrer">
                                                                {item.gsx$category.$t}
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        :
                                        <tr className="loader"><td colSpan="2"><img src={Loader} alt="loader" /></td></tr>
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    )
}
