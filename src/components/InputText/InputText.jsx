
import './InputText.css'

const InputText = (props) => {

    const handleText = (event) => {
        props.addInput(event.target.value)
    }
    return ( 
        <div className='input-text'>
            <label>{props.label}</label>
            <input value={props.text} onChange={handleText} required={props.requiredField} placeholder={props.placeholder}/>
        </div>
     );
}
 
export default InputText;