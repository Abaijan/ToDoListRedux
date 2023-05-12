import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { delTodo, addTodo, doImportant, doDone, delAll } from './redux/redusers/todo';

function App() {
const dispatch = useDispatch()
const todos = useSelector((store) => store.todos.todos)


const [todo, setTodo] = useState('')



  return (
    <div className="App">
        <div>
          <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
          <button  type='button' onClick={() => {dispatch(addTodo(todo))
          setTodo('')
          }}>Add</button>

          {
            todos.map((item) => (
              <li key={item.id} style={{marginLeft: '10px 0', color: item.isImportant ? 'red' : '' , textDecoration : item.isDone ? 'line-through' : '' }}>{item.title}
              <button style={{margin: '0 50px'}} type='button' onClick={() => dispatch(delTodo(item.id))}>Delete</button>
              <button type='button' onClick={() => dispatch(doImportant(item.id), setTodo(""))}>Important</button>
              <button onClick={() => dispatch(doDone(item.id),setTodo(''))} type='button'>Done</button>
              </li>
            ))
          }
          <button onClick={()=> dispatch(delAll(todos) ,setTodo(''))}>deleteAll</button>
        </div>
    </div>
  );
}

export default App;