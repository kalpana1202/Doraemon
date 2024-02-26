import React from "react";
import './first.css'

const First =(props)=>{
    return (
        <div className="Content">
            <h1>Quizzz</h1>
            <h2>quizz have 5 questions</h2>
            <center>
                <button onClick={props.clickevent}>start the quizz</button>
            </center>
            
        </div>
    )
}

export default First;