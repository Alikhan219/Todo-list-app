import React, { useState } from 'react'

const App = () => {

  const [fullname, setfullname] = useState("Buy an apple")
   const [name, setname] = useState('')
const inputEvent=(event)=>{
    setfullname(event.target.value)
}
const onSubmit=()=>{
    setname(fullname)
}


    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> ToDo List </h1>
                    <br />
                    <input type="text" placeholder="Add an Item" onChange={inputEvent} value={fullname}/>
                    <button onClick={onSubmit} > + </button>
                    <ol>
                        <li>{name}</li>
                    </ol>
                </div>
            </div>
        </>
    )



}


export default App;