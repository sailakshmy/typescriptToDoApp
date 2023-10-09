import React, { FC } from 'react';
import './TodoList.css';
import {TodoListProps} from '../types';
import TodoCard from './TodoCard';


const TodoList:FC<TodoListProps> = ({todoList, setTodoList}) => {
  return (
    // <div className='todoList'>
    //   
    // </div>
    <div className="container">
      <div className="todoList">
        <span className="todoList_sectionHeading">
          Active Tasks
        </span>
        {todoList.map((todo)=><TodoCard todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList}/>)}
      </div>
      <div className="todoList remove">
      <span className="todoList_sectionHeading">
          Completed Tasks
        </span>
      {todoList.map((todo)=><TodoCard todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList}/>)}
      </div>
    </div>
  )
}

export default TodoList;
