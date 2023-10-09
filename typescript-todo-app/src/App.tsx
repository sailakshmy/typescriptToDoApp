import React,{FC, useState, FormEvent} from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './types';

const App:FC =() => {
  const [todo, setTodo] = useState<string>("");
  // console.log("Todo:-", todo);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleTodoToList = (e: FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodoList([...todoList, {
        id: Date.now(),
        todo,
        isDone: false,
      }]);
      setTodo("");
    }

  }
  // console.log("TodoList:-", todoList);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleTodoToList={handleTodoToList}/>
    </div>
  );
}

export default App;
