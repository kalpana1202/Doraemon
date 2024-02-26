import React from "react";
import './end.css'

const End=(props)=>{
    return <div className="end">
        <h1>you completed the quiz...</h1>
        <button onClick={props.click}>Result</button>

    </div>
}

export default End;