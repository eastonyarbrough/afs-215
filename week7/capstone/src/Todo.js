import { useEffect, useContext } from 'react'
import { TodoContext } from './App.js';

export default function Todo() {
    const { listClass, myList, setMyList } = useContext(TodoContext);

    const markComplete = (task, boo) => {
        listClass.editList(task, !boo);
        const temp = [...listClass.list];
        setMyList(temp);
    }

    const priorityHandler = (task, id) => {
        const value = parseInt(document.querySelector(`#${id}`).value, 10);
        listClass.editList(task, value);
        const temp = [...listClass.list];
        setMyList(temp);
    }

    const removeSpecific = (task) => {
        listClass.delete(task);
        const temp = [...listClass.list];
        setMyList(temp);
    }

    useEffect(() => {
        const numInputs = [...document.querySelectorAll('.numInputs')]
        const cleanInputs = (count) => {
            if (count < numInputs.length) {
                numInputs[count].value = numInputs[count].defaultValue;
                count++;
                return cleanInputs(count);
            }
            return;
        }
        cleanInputs(0);
    }, [myList])

    return(
        <div className='flexColumn'>
            <ol>
                {myList.map((e, i) => {
                    return(
                        <li key={i}>
                            <div className='gridContainer'>
                                <div className='task'>
                                    <p style={{textDecoration: e.complete ? 'line-through' : 'none'}}>{e.task}</p>
                                </div>
                                <div className='actions'>
                                    <input type='checkbox' className='actionUI' onClick={() => markComplete(e.task, e.complete)}></input>
                                    <input type='number' id={`priority${i}`} className='numInputs actionUI' min='1' max='4' defaultValue={e.priority} onChange={() => priorityHandler(e.task, `priority${i}`)}></input>
                                    <button className='xBtns actionUI' onClick={() => removeSpecific(e.task)}>X</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}