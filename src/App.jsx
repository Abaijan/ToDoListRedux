import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, delTodo } from './redux/redusers/todo';
import { AiOutlineDelete } from 'react-icons/ai'
import { TbBrandRedux} from 'react-icons/tb'
import s from './styles.css/style.module.css'

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos.todos)
  const [todo, setTodo] = useState('')

  return (
    <div className="App">
      <div className={s.container}>
        <div className={s.inner_todo}>
          <div className={s.titles}>
          <h1 className={s.title}>To do List on Redux</h1>
          <TbBrandRedux className={s.redux_img}/>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault()
            if (e.target[0].value.trim().length) {
              dispatch(addTodo(todo))
              setTodo('')
            }
          }} >
            <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" placeholder='Add to do' className={s.addTask} />
            <button className={s.addtask} type='button'
            >add</button>
          </form>
          <div className={s.contain}>
            {
              todos.map((item) => (
                <div key={item.id} className={s.inner}>
                  <li className={s.todo}>{item.title}</li>
                  <button className={s.delete_todo} onClick={() => dispatch(delTodo(item.id))}>
                    <AiOutlineDelete className={s.delete_todoIMg} />
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
