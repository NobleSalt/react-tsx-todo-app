import { Todo } from "./model";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import React, { useState } from "react";

// type ITodo = {
//     todo: Todo;
//     setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
//     todos: Todo[]
// }
interface ITodo {
    todo: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    todos: Todo[];
    handleRemove: (todo: Todo) => void;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export const SingleTodo: React.FC<ITodo> = ({ todo, handleRemove, setTodo }) => {
    const [edit, setEdit] = useState<string>(todo.todo)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [isDone, SetIsDone] = useState<boolean>(todo.isDone)

    const handleEdit = (e: React.FormEvent) => {
        e.preventDefault()
        if (edit) {
            setEdit(edit)
            setIsEdit(false)
        }
    }

    return (
        <form action="" className="todos__single" onSubmit={(e) => handleEdit(e)}>
            {isEdit ? (<input className="input-edit" value={edit} onChange={(e) => { setEdit(e.target.value) }} />) : (<span className="todos__single--text" onDoubleClick={() => { setIsEdit(true) }} style={{ textDecoration: isDone ? 'line-through' : 'auto' }} >{edit}</span>)}
            <div>
                <span className="icon" onClick={() => { setIsEdit(true) }}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => { handleRemove(todo) }}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => { SetIsDone(!isDone) }}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}
