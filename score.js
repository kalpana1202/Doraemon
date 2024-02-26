import React from "react";

const Score = (props)=>{
    return <div className="score">
        <h1>Score is : { props.score < props.total && props.score > 1 ? (
           <span>{props.score}/{props.total} (not bad)</span> 
        ): props.score<=1 ?( <span>{props.score}/{props.total} (very bad)</span>
        ): (<span>{props.score}/{props.total} (Good...)</span>)
    }</h1>

    </div>
}

export default Score