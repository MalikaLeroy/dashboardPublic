import '../assets/css/searchBarHome.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Loader from '../assets/img/loader.svg';


export const SearchBarHome = (props) => {
    const googleSpreadBookmarks = 'https://spreadsheets.google.com/feeds/list/1AXJxlkIRbLpA0n2fSSAlrDB1qXm1wt2jbkyoNGwXmlg/1/public/values?alt=json'
    const googleSpreadRessources = 'https://spreadsheets.google.com/feeds/list/1HGHY078uZql4FrtpXJguX2o0NgcUGkzSwRPeVEhTPgY/1/public/values?alt=json'
    const [dataBookmarks, setDataBookmarks] = useState([])
    const [dataRessources, setDataRessources] = useState([])
    const [filterSearch, setFilterSearch] = useState('')
    const [load1, setLoad1] = useState(false)
    const [load2, setLoad2] = useState(false)
    useEffect(() => {
        setLoad1(true)
        fetch(googleSpreadBookmarks)
            .then(res => (
                res.json()
            )
            )
            .then(
                (result) => {
                    setLoad1(false)
                    setDataBookmarks((result.feed.entry).reverse().filter(filtre => filtre.gsx$title.$t.toLowerCase().includes(filterSearch)))
                    return
                },
                (error) => {
                    setLoad1(false)
                    setDataBookmarks('error')
                }
            )
        return () => setDataBookmarks([])
    }, [filterSearch])

    useEffect(() => {
        setLoad2(true)
        fetch(googleSpreadRessources)
            .then(res => res.json()
            )
            .then(
                (result) => {
                    setLoad2(false)
                    setDataRessources((result.feed.entry).reverse().filter(filtre => filtre.gsx$title.$t.toLowerCase().includes(filterSearch)))
                    return
                },
                (error) => {
                    setLoad2(false)
                    setDataRessources('error')
                }
            )
        return () => setDataRessources([])
    }, [filterSearch])

    return (
        <div id="searchBarEdit" className='home'>
            <form onSubmit={(event) => {
                event.preventDefault()
            }}>
                <input placeholder="Rechercher un article ou un favori" type="search" onChange={(e) => { setFilterSearch(e.target.value.toLowerCase()) }} />
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30.238" height="30.239" viewBox="0 0 30.238 30.239"><g transform="translate(-0.001 0)"><path d="M20.194,3.46a11.833,11.833,0,1,0-1.618,18.075,2.491,2.491,0,0,0,.676,1.254l6.718,6.718a2.5,2.5,0,0,0,3.535-3.535l-6.718-6.72a2.5,2.5,0,0,0-1.253-.674A11.845,11.845,0,0,0,20.194,3.46ZM18.073,18.074a8.833,8.833,0,1,1,0-12.492A8.843,8.843,0,0,1,18.073,18.074Z" /></g></svg>
                </button>
                <span></span>
            </form>
            <div className="autocomplete">
                {filterSearch ?
                    <div>
                        {dataBookmarks.length > 6 || dataRessources.length > 6 ? <span className="scroll"></span> : ""}
                        <div>
                            <ul>
                                <li><span><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 30 32.708"><g transform="translate(-0.039 0)"><g transform="translate(0.039 10.514)"><g transform="translate(0)"><path d="M19.993,166.848a7.42,7.42,0,0,0-1.281-1.03,7.632,7.632,0,0,0-9.511,1.03l-6.933,6.938a7.631,7.631,0,0,0,10.786,10.8l5.723-5.723a.545.545,0,0,0-.387-.932h-.218a9.174,9.174,0,0,1-3.488-.676.545.545,0,0,0-.594.12l-4.115,4.12a3.272,3.272,0,0,1-4.627-4.627l6.96-6.955a3.27,3.27,0,0,1,4.622,0,2.235,2.235,0,0,0,3.063,0,2.159,2.159,0,0,0,0-3.063Z" transform="translate(-0.039 -164.614)" fill="#ffffff"></path></g></g><g transform="translate(9.437 0)"><g transform="translate(0 0)"><path d="M207.868,2.235a7.631,7.631,0,0,0-10.792,0l-5.717,5.712a.547.547,0,0,0,.4.932h.2a9.156,9.156,0,0,1,3.483.681.545.545,0,0,0,.594-.12l4.1-4.1a3.272,3.272,0,1,1,4.627,4.627l-5.112,5.107-.044.049L197.823,16.9a3.27,3.27,0,0,1-4.622,0,2.235,2.235,0,0,0-3.063,0,2.173,2.173,0,0,0,0,3.074,7.565,7.565,0,0,0,2.18,1.526c.114.054.229.1.343.147s.234.087.349.131.234.082.349.114l.322.087c.218.054.436.1.659.136a7.587,7.587,0,0,0,.812.076h.414l.327-.038c.12-.005.245-.033.387-.033h.185l.376-.054.174-.033.316-.065h.06a7.63,7.63,0,0,0,3.537-2.006l6.938-6.938A7.631,7.631,0,0,0,207.868,2.235Z" transform="translate(-189.502 0)" fill="#ffffff"></path></g></g></g></svg>Favoris</span>
                                    <ul>
                                        {dataBookmarks.length > 0 ?
                                            dataBookmarks.map((item) => {
                                                return (
                                                    <li key={item.gsx$url.$t}><a href={item.gsx$url.$t} target="_blank" rel="noopener noreferrer">{item.gsx$title.$t}</a></li>)
                                            }) : <li className="dataEmpty">Aucune correspondance</li>
                                        }

                                        {load1 === true ? <li className="load"><img src={Loader} alt="loader" /></li> : ""}
                                    </ul>
                                </li>
                                <li><span><svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 30 30.076"><g transform="translate(-0.373 -0.001)"><path d="M139.3,14.429a2.5,2.5,0,0,1,2.893.455l1.013-1.013a7.137,7.137,0,0,0,9.409-7.883.65.65,0,0,0-1.1-.356l-1.5,1.5A3.137,3.137,0,0,1,145.577,2.7l1.5-1.5a.65.65,0,0,0-.356-1.1,7.136,7.136,0,0,0-7.841,9.52l-2.2,2.2Z" transform="translate(-122.34 0)" fill="#ffffff"></path><path d="M12.982,156.518l-2.607-2.607-9.114,9.114a3.035,3.035,0,0,0,4.292,4.292l7.857-7.857A2.5,2.5,0,0,1,12.982,156.518Z" transform="translate(0 -138.128)" fill="#ffffff"></path><path d="M19.015,31.99a.954.954,0,0,0-1.349,0l-.544.544L7.438,22.849,7.89,22.4a.954.954,0,0,0-.109-1.443L3.83,18.044a.954.954,0,0,0-1.24.094L.912,19.815a.954.954,0,0,0-.094,1.24l2.91,3.951a.954.954,0,0,0,1.443.109l.453-.453,9.685,9.685-.582.582a.954.954,0,0,0,0,1.349l8.934,8.934a3.032,3.032,0,0,0,4.288-4.288Z" transform="translate(-0.234 -16.023)" fill="#ffffff"></path></g></svg>Articles</span>
                                    <ul>
                                        {dataRessources.length > 0 ?
                                            dataRessources.map((item) => {
                                                return (
                                                    <li key={item.gsx$permalien.$t}> <Link to={`article/` + item.gsx$permalien.$t}>{item.gsx$title.$t}</Link></li>)
                                            }) : <li className="dataEmpty">Aucune correspondance</li>
                                        }
                                        {load2 === true ? <li className="load"><img src={Loader} alt="loader" /></li> : ""}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    : ""
                }
            </div>
        </div>
    )
}