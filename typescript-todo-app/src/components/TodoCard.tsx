import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { TodoCardProps } from '../types';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import './TodoCard.css';
import { Draggable } from 'react-beautiful-dnd';


const TodoCard: FC<TodoCardProps> = ({ todo, todoList, setTodoList, index }) => {
  const [editState, setEditState] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo.todo);
  const editTodoFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    editTodoFieldRef.current?.focus();
  }, [editState])

  const handleEdit = () => {
    if (!editState && !todo.isDone) setEditState(!editState);
  }
  const handleDelete = (id: number) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }
  const handleDone = (id: number) => {
    setTodoList(todoList.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
  }
  const handleSubmit = (e: FormEvent, id: number) => {
    e.preventDefault();
    setTodoList(todoList.map(todo => todo.id === id ? { ...todo, todo: editedTodo } : todo));
    setEditState(false);
  }
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot)=>(
              <form 
                className={`todoList_Card ${snapshot.isDragging?'dragging':''}`}
                onSubmit={(e) => handleSubmit(e, todo.id)}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
              {
                editState
                  ? <input
                    value={editedTodo}
                    onChange={(e) => setEditedTodo(e.target.value)}
                    className="todoList_Card--text"
                    ref={editTodoFieldRef}
                  />
                  : todo.isDone
                    ? <s className="todoList_Card--text">{todo.todo}</s>
                    : <span className="todoList_Card--text">{todo.todo}</span>
              }
              <div>
                <span className="icons" onClick={handleEdit}>
                  <CiEdit />
                </span>
                <span className="icons" onClick={() => handleDelete(todo.id)}>
                  <MdDeleteOutline />
                </span>
                <span className="icons" onClick={() => handleDone(todo.id)}>
                  <IoCheckmarkDoneCircleOutline />
                </span>
              </div>
            </form>
      )}
    </Draggable>
  )
}

export default TodoCard
