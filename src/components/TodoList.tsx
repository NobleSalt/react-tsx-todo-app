import { Todo } from "./model";
import { SingleTodo } from "./SingleTodo";

interface ITodoList {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export const TodoList: React.FC<ITodoList> = ({ todos, setTodos, setTodo }) => {
    const handleRemove = (todo: Todo) => {
        setTodos(todos.filter(i => i.id !== todo.id))
    }
    return (
        <div className="todos">
            {todos.map(todo => (
                <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} handleRemove={handleRemove} setTodo={setTodo} />
            ))}
        </div>
    )
}