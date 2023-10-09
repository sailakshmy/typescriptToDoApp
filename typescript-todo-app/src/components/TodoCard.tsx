import React,{FC} from 'react';
import { TodoCardProps } from '../types';
import {CiEdit} from 'react-icons/ci';
import {MdDeleteOutline} from 'react-icons/md';
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5';
import './TodoCard.css';


const TodoCard:FC<TodoCardProps> = ({todo, todoList, setTodoList}) => {
  return (
    <form className='todoList_Card'>
      <span className="todoList_Card--text">{todo.todo}</span>
      <div>
        <span className="icons">
            <CiEdit/>
        </span>
        <span className="icons">
            <MdDeleteOutline/>
        </span>
        <span className="icons">
            <IoCheckmarkDoneCircleOutline/>
        </span>
      </div>
    </form>
  )
}

export default TodoCard
