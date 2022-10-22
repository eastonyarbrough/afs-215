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

  const removeFirst = () => {
    listClass.shift();
    const temp = [...listClass.list];
    setMyList(temp);
  }

  const removeLast = () => {
    listClass.pop();
    const temp = [...listClass.list];
    setMyList(temp);
  }

  return (
    <div>
      <main>
        <div className='flexColumn'>
          <h1>My Todo List:</h1>
          <form onSubmit={e => {
            e.preventDefault();
            addTodo();
            document.querySelector('#task').value = '';
          }}>
            <input type='text' id='task' placeholder='Enter task'></input>
            <button>Add Task</button>
            <button onClick={e => {
              e.preventDefault();
              removeFirst()
            }}>Delete First</button>
            <button onClick={e => {
              e.preventDefault();
              removeLast()
            }}>Delete Last</button>
          </form>
        </div>
        <TodoContext.Provider value={{ listClass, myList, setMyList }}>
          <Todo/>
        </TodoContext.Provider>
      </main>
    </div>  
  );
}

export default App;
