import React, { useState } from 'react';
import './InputText.css'

const InputText = (props) => {

    const [text, setText] = useState('')

    const handleText = (event) => {
        setText(event.target.value)
        console.log(text)
    }
    return ( 
        <div className='input-text'>
            <label>{props.label}</label>
            <input value={props.text} onChange={handleText} required={props.requiredField} placeholder={props.placeholder}/>
        </div>
     );
}
 
export default InputText;