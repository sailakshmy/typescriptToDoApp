import { FormEvent } from "react";
export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}

export interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleTodoToList: (e: FormEvent)=> void;
}

export interface TodoListProps{
    todoList: Todo[];
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

export interface TodoCardProps extends TodoListProps{
    todo: Todo
}
