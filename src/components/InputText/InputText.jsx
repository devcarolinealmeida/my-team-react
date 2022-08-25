import React from 'react';
import './InputText.css'

const InputText = (props) => {
    return ( 
        <div className='input-text'>
            <label>{props.label}</label>
            <input required={props.requiredField} placeholder={props.placeholder}/>
        </div>
     );
}
 
export default InputText;