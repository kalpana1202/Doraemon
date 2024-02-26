import React from "react";
import './option.css'

const Option=(props)=>{
    const opt = Object.keys(props.opt).map(opt =>{

        return (<li key={opt} onClick={()=>{
            props.clickevent(opt)
        }} className={props.correctOption === opt ? 'crt' : props.clickedOption === opt? 'incrt' : ''}>{opt}){props.opt[opt]}</li>
        )
    })
    return(
        <div>
            <ul className="options">
                {opt}
            </ul>
            {
                props.result ? props.correctOption === props.clickedOption ?(
                    <p className="para1">correct answer</p>
                ):(
                    <p className="para2">incorrect answer</p>
                ):null
            }
        </div>
    )
    

}

export default Option;