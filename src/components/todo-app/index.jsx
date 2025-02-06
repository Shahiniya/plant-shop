import {useState} from 'react'

const initialState=[
  {
    id:'1',
    name:'john Smith',
    number: '2563256325',
    completed:false
  },
  {
    id:'1',
    name:'john Smith',
    number: '2563256325',
    completed:false
  },
  {
    id:'1',
    name:'john Smith',
    number: '2563256325',
    completed:false
  }
]

const TodoApp = () => {
  //  const [count,setCount] = useState(0)

  //  const incrementCount = () => {
  //  setCount((prev) => prev+1)
  //  }

  const [todos,setTodos] = useState(initialState)
const [todo,setTodo] = useState('') 

const onInputChange = (event) => {
setTodo(event.target.value)
}

const addHanler = () => {
  if(!todo.length){
    return
  } 

  const newTodo = { 
    id: todo?.id +1,
    name:todo,
  completed:false
  }
  setTodos((prev)=> [...prev,newTodo] )
  setTodo('')
}

  return (
    <div>
    <h2>Todo App</h2>
    <div>
      <input type='text' placeholder='Title' onChange={onInputChange} value={todo} />
      <buttton onClick={addHanler} >Add todo</buttton>
    </div>

    {/* <div>
      <h1>{count}</h1> <button onClick={incrementCount} >++</button>
    </div> */}
      <ul>
      {
        todos.map((todo,idx)=>{
          return <li key={todo?.id || idx} >
          {idx+1}.{todo.name}{' '}
          <input type='checkbox' value={todo.completed} /> </li>
        })
      }
             
      </ul>
    </div>
  )
}

export default TodoApp