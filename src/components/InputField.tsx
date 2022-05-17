import React, { useRef } from "react";
import './styles.css'

interface IProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void
}

export const InputField: React.FC<IProps> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form action="" className="input" onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur();
        }}>
            <input
                ref={inputRef}
                type="text"
                value={todo}
                placeholder="Enter a task"
                onChange={(e) => setTodo(e.target.value)}
                className="input__box" />
            <button className="input__submit" type="submit">Go</button>
        </form>
    )
}