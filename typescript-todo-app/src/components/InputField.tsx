import React,{FC, FormEvent} from 'react';
import './InputField.css';

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleTodoToList: (e: FormEvent)=> void;
}
const InputField:FC<InputFieldProps> =({todo, setTodo, handleTodoToList})=> {
  return (
    <form className='input' onSubmit={handleTodoToList}>
      <input 
        type="text" 
        className="input_box"
        placeholder='Enter a task'
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}/>
      <button type="submit" className="input_submit">Go</button>
    </form>
  )
}

export default InputField
