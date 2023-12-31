import React,{FC, FormEvent, useRef} from 'react';
import {InputFieldProps} from '../types';
import './InputField.css';


const InputField:FC<InputFieldProps> =({todo, setTodo, handleTodoToList})=> {
  const inputBoxRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent) => {
    handleTodoToList(e);
    inputBoxRef.current?.blur();
  }
  return (
    <form className='input' onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input_box"
        placeholder='Enter a task'
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
        ref={inputBoxRef}/>
      <button type="submit" className="input_submit">Go</button>
    </form>
  )
}

export default InputField;
