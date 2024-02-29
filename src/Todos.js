import React, {useState} from 'react';
import Todos from './todoClass'

const TodoList = () => {
    const [store] = useState(new Todos())
    const [list, setList] = useState(store.getTodos());
    const handleTodoAdd = () => {
        store.addTodos(JSON.stringify(new Date()));
        setList(()=>[...store.getTodos()]);
        // setList([...list, JSON.stringify(new Date())]);
    }
    console.log(store);
    return (
        <>
            <button onClick={handleTodoAdd}> Add Todos </button>
            <ul>
                {
                    list.map((item)=><li>{item} </li>)
                }
            </ul>
        </>
    );
}

export default TodoList;