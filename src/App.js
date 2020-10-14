import React, { useState } from 'react'
import Todolists from './Todolists'
const App = () => {

    const [fullname, setfullname] = useState("")
    const [name, setname] = useState([])
    const inputEvent = (event) => {
        setfullname(event.target.value)
    }
    const onSubmit = () => {
        setname((newitems) => {
            return [...newitems, fullname]
        })
        setfullname('')
    }
    const deleteTimes=(id)=>{
        setname((newitems)=>{
           return newitems.filter((arrelem,index)=>{
               return index !== id;
           })
       })
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> ToDo List </h1>
                    <br />
                    <input type="text" placeholder="Add an Item" onChange={inputEvent} value={fullname} />
                    <button onClick={onSubmit} > + </button>
                    <ol>

                        {name.map((itemval, index) => {
                            return <Todolists
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect={deleteTimes}
                            />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )



}


export default App;