import '../assets/css/home.css'
import React, { useState, useEffect,useRef } from 'react';
import CountUp from 'react-countup';
import LogoJesuisundev from '../assets/img/logo-jesuisundev.png';
import LogoGrafikart from '../assets/img/logo-grafikart.jpg';
import Loader from '../assets/img/loader.svg';
import Error from '../assets/img/icon-cancel.svg';
import { Todolist } from '../components/todolist';
import IconArrow from '../assets/img/icon-arrowBottom.svg';


export const DateLocal = () =>{
    let date1 = new Date();
    let dateLocale = date1.toLocaleString('fr-FR',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'});
        return(
            <>
             <span className="localDate">{dateLocale}</span>
           </>
        )
    }

export const Home = (props) => {

     /*-------------------------------------L'actu----------------------------------------------
    --------------------------------------------------------------------------------------------*/
    const [data1, setData1] = useState('')
    const [data2, setData2] = useState('')
   useEffect(() => {
    const feed1 = 'https://www.jesuisundev.com/feed/'
       fetch(`https://script.google.com/macros/s/AKfycbyUF1ZN0nn9Cmj9dqn5RlN8JvNAK_Erfb5-A7bf6giETJAu9oUAEMIrng/exec?url=${encodeURIComponent(feed1)}`)
       .then(response => {
         if (response.ok) {return response.json() }
         throw new Error('Network response was not ok.')
       })
       .then(feed => { 
           let parseString = require('xml2js').parseString;
            parseString(feed.result, function (err, result) {
            let feedSplice = result.rss.channel[0].item.splice(0, 2)
           setData1(feedSplice)
            });
        }
       );
       return ()=> setData1("")
    }, []);
    useEffect(() => {
    const feed2 = 'http://feeds.feedburner.com/Grafikart'
       fetch(`https://script.google.com/macros/s/AKfycbyUF1ZN0nn9Cmj9dqn5RlN8JvNAK_Erfb5-A7bf6giETJAu9oUAEMIrng/exec?url=${encodeURIComponent(feed2)}`)
       .then(response => {
         if (response.ok) {return response.json() }
         throw new Error('Network response was not ok.')
       })
       .then(feed => {
          
           let parseString = require('xml2js').parseString;
            parseString(feed.result, function (err, result) {
            let feedSplice = result.rss.channel[0].item.splice(0, 2)
           setData2(feedSplice) 
            });
        }
       );
       return ()=> setData2("")  
    }, []);
    /*-------------------------------------Statcounter----------------------------------------------
    --------------------------------------------------------------------------------------------*/
   const statcounter = 'http://statcounter.com/p12359072/summary/?guest=1'
   const [dataVisitors, setDataVisitors] = useState(null)
   const [dataVisitorsOnLoad,setDataVisitorsOnLoad] = useState("onLoad")
   useEffect(() => {
       fetch(`https://script.google.com/macros/s/AKfycbyUF1ZN0nn9Cmj9dqn5RlN8JvNAK_Erfb5-A7bf6giETJAu9oUAEMIrng/exec?url=${encodeURIComponent(statcounter)}`)
         .then(res => res.json())
         .then(
           (feed) => {
               let data = feed.result
               let dataReplace = data.replaceAll(/\s/g,'-')
               let regexTest1 = /(pageviews-sessions-returning-sessions-visitors-new-visitors-)(\d{1,}-)*/gm 
               if(dataReplace.match(regexTest1))
               {
                   let regexTest = /(pageviews-sessions-returning-sessions-visitors-new-visitors-)(\d{1,}-)*/gm 
                   let dataTotaltest = dataReplace.match(regexTest)
                   let dataWithoutHeadTest = dataTotaltest[0].replaceAll(/[a-z]/g,'')
                   let cleanupdata = dataWithoutHeadTest.slice(9,dataWithoutHeadTest.length-1)
                   let splitData = cleanupdata.split("-")
                   let filterData = splitData.slice(splitData.length-7,splitData.length-6)
                   let convertData = parseInt(filterData)
                   if(dataVisitorsOnLoad==="onLoad"){
                        setDataVisitors(convertData)   
                   }

               }
               else{ setDataVisitorsOnLoad("error")
               setDataVisitors('error')}
           },
           (error) => {
               setDataVisitorsOnLoad("error")
               setDataVisitors('error')
           }
         )
        return function cleanup() {
           setDataVisitorsOnLoad('load')
       }
     }, [dataVisitorsOnLoad])
 /*-------------------------------------Email unread----------------------------------------------
    --------------------------------------------------------------------------------------------*/
// const [dataEmailOnLoad,setDataEmailOnLoad] = useState("onLoad")
 const dataEmail = 5
 /*-------------------------------------Scroll to news (v tablet + mobile)----------------------------------------------
--------------------------------------------------------------------------------------------*/
const [scrollToNews, setScrollToNews] = useState(false);
let inputRef = useRef()
useEffect(() => {
  if (scrollToNews) {
    setScrollToNews(false);
    try {
      window.scroll({
        top: inputRef.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }
}, [scrollToNews, setScrollToNews]);
    return (
        <>
            <main className="home" >
                <h1 id="titlePage" >Dashboard <DateLocal/></h1>

                 {/*-------------------------------------Statcounter----------------------------------------------
                --------------------------------------------------------------------------------------------*/}
                <article className="widget" id="statistics"><a target="_blank" rel="noopener noreferrer" href="https://statcounter.com/p12359072/visitor/"><h2>Visites</h2><p>
               
                {dataVisitors===null? <span><img src={Loader} alt="loader" /></span>:
                dataVisitors==="error"?<span><img src={Error} alt="erreur" /></span> :
                <span><CountUp end={dataVisitors} /></span> }
                visiteur
                {dataVisitors>1?"s ":" "}
                hier</p><p>Voir les statistiques</p></a></article>

                 {/*-------------------------------------Email----------------------------------------------
                --------------------------------------------------------------------------------------------*/}
                <article className="widget" id="emails"><a target="_blank" rel="noopener noreferrer" href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser"><h2>e-mails</h2><p>
                {dataEmail===null?  <span><img src={Loader} alt="loader" /></span>: 
                dataEmail==="error"? <span><img src={Error} alt="erreur" /></span> :
                <span><CountUp end={dataEmail} /></span>}e-mail{dataEmail>1?"s ":" "} non lu{dataEmail>1?"s ":" "}</p><p>Consulter les emails</p></a></article>
                <div id="anchorNew" ref={inputRef} onClick={() =>setScrollToNews(true)}>Voir l'actu<img src={IconArrow} alt="Scroller vers l'actu"/></div>
                {/*-------------------------------------L'actu----------------------------------------------
                --------------------------------------------------------------------------------------------*/}
                <article className="widget" id="news" ref={inputRef}><h2>L'actu</h2>
                    <ul>
                        {data1 ?
                            data1.map((item) => {
                                
                                return (
                                    <li key={item.link}>
                                        <a target="_blank" href={item.link} rel="noopener noreferrer">
                                            <div>
                                                <img src={LogoJesuisundev} alt="logo Je suis un dev" />
                                            </div>
                                            <div>
                                                <p>{item.title}</p><p>{item.description[0].length > 50 ? item.description[0].substring(3,120) + "..." : item.description[0]}</p></div>
                                        </a>
                                    </li>
                                )
                            })
                            :
                            <li className="loader"><img src={Loader} alt="loader" /></li>
                        }
                        {data2 ?
                            data2.map((item) => {
                                return (
                                    <li key={item.link}>
                                        <a target="_blank" href={item.link} rel="noopener noreferrer">
                                            <div>
                                                <img src={LogoGrafikart} alt="logo Je suis un dev" />
                                            </div>
                                            <div>
                                                <p>{item.title}</p><p>{item.description[0].length > 50 ? item.description[0].substring(0,120) + "..." : item.description[0]}</p></div>
                                        </a>
                                    </li>
                                )
                            })
                            :
                            <li className="loader"><img src={Loader} alt="loader" /></li>
                        }
                    </ul>
                    {/*-------------------------------------To do list----------------------------------------------
                --------------------------------------------------------------------------------------------*/}
                </article>
                <Todolist/>
            </main>
        </>
    )
}
