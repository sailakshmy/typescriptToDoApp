import React,{FC} from 'react';
import './InputField.css';

const InputField:FC =()=> {
  return (
    <form className='input'>
      <input type="text" className="input_box" placeholder='Enter a task'/>
      <button type="submit" className="input_submit">Go</button>
    </form>
  )
}

export default InputField
