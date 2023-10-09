import React, { FC } from 'react';
import './TodoList.css';
import { TodoListProps } from '../types';
import TodoCard from './TodoCard';
import { Droppable } from 'react-beautiful-dnd';


const TodoList: FC<TodoListProps> = ({ todoList, setTodoList, completedTodoList, setCompletedTodoList }) => {
  return (
    <div className="container">
      <Droppable droppableId='ActiveList'>
        {(provided,snapshot) => (
          <div className={`todoList ${snapshot.isDraggingOver?'dragactive':''}`} ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todoList_sectionHeading">
              Active Tasks
            </span>
            {todoList.map((todo,index) => <TodoCard todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList} index={index}/>)}
            {provided.placeholder}
          </div>
        )}
        
      </Droppable>
      <Droppable droppableId='CompletedList'>
        {(provided, snapshot) => (
          <div className={`todoList remove ${snapshot.isDraggingOver?'dragcompleted':''}`} ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todoList_sectionHeading">
              Completed Tasks
            </span>
            {completedTodoList.map((todo,index) => <TodoCard todo={todo} key={todo.id} todoList={completedTodoList} setTodoList={setCompletedTodoList} index={index}/>)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default TodoList;
