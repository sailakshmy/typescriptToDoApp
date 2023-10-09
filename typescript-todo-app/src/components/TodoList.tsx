import React, { FC } from 'react';
import './TodoList.css';
import {TodoListProps} from '../types';
import TodoCard from './TodoCard';


const TodoList:FC<TodoListProps> = ({todoList, setTodoList}) => {
  return (
    <div className='todoList'>
      {todoList.map((todo)=><TodoCard todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList}/>)}
    </div>
  )
}

export default TodoList;
