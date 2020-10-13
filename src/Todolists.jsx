import React from 'react'



const Todolists =(props)=>{

 return(
     <>
    <div className="todo_style">
    <i class="fas fa-times"></i>
    <li>{props.text}</li>
    </div>
    </>)
}
export default Todolists