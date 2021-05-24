import '../assets/css/todolist.css';
import React, { useState, useEffect } from 'react';
import Loader from '../assets/img/loader.svg';
import Warning from '../assets/img/icon-warning.svg';
export const Todolist = (props) => {

    const googleSpreadTodolist = 'https://spreadsheets.google.com/feeds/list/1pRtgcL8bCes_d-20vy9x2O6AonD6gMW5QAxImqNp4eY/1/public/values?alt=json' // Si les champs sont ok
    const [data, setData] = useState([])
    let [task, setTask] = useState([])
    let [temporaryTask, setTemporaryTask] = useState([])
    const fetchData = () => {
        fetch(googleSpreadTodolist)
            .then(res => res.json()
            )
            .then(
                (result) => {
                    setData(result.feed.entry.reverse())
                    setTemporaryTask([])
                    return
                },
                (error) => {
                    setTemporaryTask([])
                    setData('error')
                }
            )
    }
    useEffect(() => {
        fetchData()
        return () => setData([])
    }, [])

    let counterLine = 0

    return (
        <div id="toDoList">
            <h2>To do list</h2>
            {/*************************Add a new task***************************/}
            <form name="submit-to-google-sheet" onSubmit={(event) => {
                event.preventDefault()
                setTemporaryTask(task)
                const scriptURL = 'https://script.google.com/macros/s/AKfycbyTzdnydemQrIQZ9TXPib7OTA5VSI3Jxw8jVLoKgTrWwlO903rktRDpAA/exec'
                const form = document.forms['submit-to-google-sheet']
                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                    .then(response => {
                        if (response.status !== 200) {
                            setTask([])
                            setTemporaryTask(false)
                            setTimeout(function () { setTemporaryTask([]) }, 2000);
                        } else {
                            fetchData()
                            setTask([])
                            setTemporaryTask(task)
                        }
                        return
                    })
                    .catch(error => {
                        setTask([])
                        setData('error')
                        return
                    })
            }
            }
            >
                <input type="text" name="task" id="task" required value={task} onChange={(e) => { setTask(e.target.value) }} />
                <input type="text" name="checked" id="checked" readOnly value="no" />
                <input type="text" name="removed" id="removed" readOnly value="no" />
                <button action="" method="" type="submit"><span>+</span></button>
            </form>
            <ul>
                {temporaryTask.length > 0 && temporaryTask !== false ?
                    <li className="temporaryTask odd"><span>{temporaryTask}</span><span><img src={Loader} alt="loader" /></span></li>
                    : temporaryTask === false ? <li className="temporaryTask error odd"><span>Les tâches ne peut être ajoutée pour le moment.</span><span><img src={Warning} alt="loader" /></span></li> : ""
                }
                {
                    data === "error" ? <li>La liste de tâches ne peut être affichée pour le moment.</li> :
                        data.length > 0 ?
                            data.filter(filtre => filtre.gsx$removed.$t.includes("no"))
                                .map((item) => {
                                    counterLine++
                                    return (
                                        <li key={item.gsx$id.$t} className={counterLine % 2 > 0 ? "odd" : "even"}>
                                            <form name={"checkedbutton" + item.gsx$id.$t} onSubmit={(event) => {
                                                event.preventDefault()
                                                const scriptURL = 'https://script.google.com/macros/s/AKfycbyTzdnydemQrIQZ9TXPib7OTA5VSI3Jxw8jVLoKgTrWwlO903rktRDpAA/exec'
                                                const form = document.forms["checkedbutton" + item.gsx$id.$t]
                                                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            }
                                            }>
                                                <input type="text" readOnly name="checked" value={item.gsx$id.$t} />
                                                <button action="" method="" type="submit" className={item.gsx$checked.$t}
                                                    onClick={(event) => {
                                                        if (event.target.parentElement.classList.contains("yes")) {
                                                            event.target.parentElement.classList.replace("yes", "unchecked")
                                                        } else if (event.target.parentElement.classList.contains("no")) {
                                                            event.target.parentElement.classList.replace("no", "checked")
                                                        } else if (event.target.parentElement.classList.contains("checked")) {
                                                            event.target.parentElement.classList.replace("checked", "unchecked")
                                                        } else { event.target.parentElement.classList.replace("unchecked", "checked") }
                                                    }}
                                                ><span>{item.gsx$task.$t}</span></button>
                                            </form>
                                            {/*************************Change remove task***************************/}
                                            <form name={"removebutton" + item.gsx$id.$t} onSubmit={(event) => {
                                                event.preventDefault()
                                                const scriptURL = 'https://script.google.com/macros/s/AKfycbyTzdnydemQrIQZ9TXPib7OTA5VSI3Jxw8jVLoKgTrWwlO903rktRDpAA/exec'
                                                const form = document.forms["removebutton" + item.gsx$id.$t]
                                                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                                            }
                                            }>
                                                <input type="text" name="removed" readOnly value={item.gsx$id.$t} />
                                                <button action="" method="" type="submit"
                                                    onClick={(event) => {
                                                        event.target.parentElement.parentElement.parentElement.classList.add("hidden")
                                                        setTimeout(function () {
                                                            event.target.parentElement.parentElement.parentElement.classList.replace("hidden", "displayNone")
                                                        }, 200);
                                                    }}
                                                ><span>×</span></button>
                                            </form>
                                        </li>
                                    )
                                })
                            : <li className="loader"><img src={Loader} alt="loader" /></li>
                }
            </ul>
        </div>
    )
}

