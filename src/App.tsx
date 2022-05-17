import React, { useState } from 'react';
import './App.css';
import { InputField } from './components/InputField';
import { Todo } from './components/model';
import { TodoList } from './components/TodoList';

// let name: string;

// name = "Piyush"
// let list: unknown[] = [1, 2, 3, 4]
// let dont_know: never;

// interface person_type {
//   name: string
//   age?: number | boolean | string
// };

// let person: person_type = {
//   name: 'Emmanuel',
//   // age: 20
// };

// let printName: (name: string) => void;
// // let printName: (name: string) => never;

// let list_of_people: person_type[];

// list_of_people = [{ age: 2, name: 'Emmnauel' }]

// let perosonName: unknown;

// printName = (name) => {
//   console.log(name)
// }


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <br />
      <TodoList setTodo={setTodo} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
