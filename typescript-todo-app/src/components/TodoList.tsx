import React, { FC } from 'react';
import './TodoList.css';
import {Todo} from '../types';

interface TodoListProps{
    todoList: Todo[];
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>

}

const TodoList:FC<TodoListProps> = ({todoList, setTodoList}) => {
  return (
    <div className='todoList'>
      {todoList.map((todo)=><li key={todo.id}>{todo.todo}</li>)}
    </div>
  )
}

export default TodoList;
