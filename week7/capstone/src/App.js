import { useState, createContext } from 'react';
import Todo from './Todo.js';
import List from './Constructor/todo.js';
import './App.css';

const listClass = new List();

export const TodoContext = createContext();

function App() {
  const [myList, setMyList] = useState([])

  const addTodo = () => {
    const userInput = document.querySelector('#task').value;
    if (userInput.length > 0) {
      listClass.push(userInput);
      const temp = [...listClass.list]
      setMyList(temp);
    }
  }

  return (
    <div>
      <h1>My Todo List:</h1>
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          addTodo();
        }}>
          <input type='text' id='task' placeholder='Enter task'></input>
          <button>Add Task</button>
        </form>
      </div>
      <TodoContext.Provider value={{ listClass, myList, setMyList }}>
        <Todo/>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
