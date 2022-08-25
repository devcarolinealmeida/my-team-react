import React from 'react';
import './Select.css'

const Select = (props) => {
    return (
        <div className='select'>
            <label>{props.label}</label>
            <select required={props.requiredField}>
                 {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
      );
}
 
export default Select;