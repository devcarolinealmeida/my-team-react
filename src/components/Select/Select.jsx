import React from 'react';
import './Select.css'

const Select = (props) => {


    return (
        <div className='select'>
            <label>{props.label}</label>
            <select value={props.text} onChange={event => props.addInput(event.target.value)} required={props.requiredField}>
                <option value=""></option>
                 {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
      );
}
 
export default Select;