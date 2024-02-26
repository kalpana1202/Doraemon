import React from "react";

const Question =(props)=>{
    return(
        <div className="q">
            <h1>{props.qno}/{props.total}. {props.q}</h1>
        </div>
        
    )
}

export default Question;