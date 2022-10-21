import { useContext } from 'react'
import { TodoContext } from './App.js';

export default function Todo() {
    const { listClass, myList, setMyList } = useContext(TodoContext);

    const markComplete = (task, boo) => {
        listClass.editList(task, !boo);
        const temp = [...listClass.list];
        setMyList(temp);
    }

    return(
        <ol>
            {myList.map((e, i) => {
                return(
                    <li key={i}>
                        <div style={{display: 'flex'}}>
                            <p style={{textDecoration: e.complete ? 'line-through' : 'none'}}>{e.task}</p>
                            <input type='checkbox' id={`check${i}`} onClick={() => markComplete(e.task, e.complete)}></input>
                        </div>
                    </li>
                )
            })}
        </ol>
    )
}