import { Todo } from "./model";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import React, { useRef, useState } from "react";

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

export const SingleTodo: React.FC<ITodo> = ({ todo, handleRemove, setTodos, todos }) => {
    const [edit, setEdit] = useState<string>(todo.todo)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [isDone, SetIsDone] = useState<boolean>(todo.isDone)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleEdit = (e: React.FormEvent) => {
        e.preventDefault()
        if (edit) {
            setTodos(todos.map(i => i.id === todo.id ? { id: i.id, isDone: isDone, todo: edit } : i))
            setEdit(edit)
            setIsEdit(false)
            inputRef.current?.blur()
        }
    }

    const handleEditClick = () => {
        setIsEdit(true)
        if (inputRef) {
            inputRef.current?.click()
            console.log('Ah')
        }
    }

    return (
        <form action="" className="todos__single" onSubmit={(e) => handleEdit(e)}>
            {isEdit ? (<input className="input-edit" value={edit} ref={inputRef} onChange={(e) => { setEdit(e.target.value) }} />) : (<span className="todos__single--text" onDoubleClick={handleEditClick} style={{ textDecoration: isDone ? 'line-through' : 'auto' }} >{edit}</span>)}
            <div>
                <span className="icon" onClick={handleEditClick}>
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
