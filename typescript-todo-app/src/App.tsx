import React, { FC, useState, FormEvent } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './types';
import TodoList from './components/TodoList';
import {DragDropContext, DropResult} from 'react-beautiful-dnd';

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  // console.log("Todo:-", todo);
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [completedTodoList, setCompletedTodoList] = useState<Todo[]>([]);

  const handleTodoToList = (e: FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoList([...todoList, {
        id: Date.now(),
        todo,
        isDone: false,
      }]);
      setTodo("");
    }

  }
  // console.log("TodoList:-", todoList);

  const onDragEnd = (result:DropResult)=>{
    const {source, destination} = result;
    if(!destination|| (destination.droppableId === source.droppableId && destination.index === source.index) ) return;

    let active = todoList;
    let completed = completedTodoList;
    let add = active[0];
    if(source.droppableId === 'ActiveList'){
      add = active[source.index];
      active.splice(source.index,1);
    } else if(source.droppableId === 'CompletedList'){
      add = completed[source.index];
      completed.splice(source.index,1);
    }

    if(destination.droppableId ==='ActiveList'){
      active.splice(destination.index,0,add);
    }else{
      completed.splice(destination.index,0,add);
    }
    setCompletedTodoList(completed);
    setTodoList(active);
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleTodoToList={handleTodoToList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} completedTodoList={completedTodoList} setCompletedTodoList={setCompletedTodoList} />
      </div>
    </DragDropContext>

  );
}

export default App;
