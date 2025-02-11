import { useState } from "react";

const initialState = [
  {
    id: "1",
    title: "HTML",
    completed: false,
  },
  {
    id: "2",
    title: "CSS",
    completed: false,
  },
  {
    id: "3",
    title: "JavaScript",
    completed: false,
  },
  {
    id: "4",
    title: "React JS",
    completed: false,
  },
];

const TodoManagerApp = () => {
  const [todos, setTodos] = useState(initialState);
  const [todo, setTodo] = useState("");
  const [selectedTodo, setSelectedTodo] = useState({});

  const onInputChange = (event) => {
    setTodo(event.target.value);
  };

  const addTodoHanler = () => {
    if (!todo.length) {
      return;
    }

    const newTodo = {
      id: String(todos?.length + 1),
      title: todo,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTodo("");
  };

  const handleCompleteTask = (todoId) => {
    const completed = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(completed);
  };

  const handleRemoveTodo = (todoId) => {
    const data = todos.filter((todo) => todo.id !== todoId);

    setTodos(data);
  };

  const onSearchInputChange = (event) => {
    const filteredData = initialState.filter((todo) =>
      todo.title.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setTodos(filteredData);
  };

  const handleSelectTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onEditChange = (event) => {
    setSelectedTodo((prev) => ({...prev, title: event.target.value}))
  }

  const onSave = () => {
    const changedData = todos.map((todo) => todo.id === selectedTodo.id ? selectedTodo : todo)

    setTodos(changedData)
    setSelectedTodo({})
  }

  return (
    <div
      className='card p-4'
      style={{ maxWidth: "500px", margin: "0 auto", marginTop: "40px" }}
    >
      <h2>Todo App</h2>

      <input
        className='form-control'
        type='text'
        placeholder='Search...'
        onChange={onSearchInputChange}
      />

      <ul style={{ marginTop: "10px", padding: 0 }}>
        {todos.map((todo, idx) => {
          return (
            <li key={todo?.id || idx} className='card mb-2 p-2'>
              <div className='d-flex justify-content-between'>
                <div className='d-flex px-2 py-2'>
                  <input
                    type='checkbox'
                    value={todo.completed}
                    checked={todo.completed}
                    className='form-check-input'
                    style={{ marginRight: "4px" }}
                    onChange={() => handleCompleteTask(todo.id)}
                  />
                  {selectedTodo?.id == todo.id ? (
                    <input value={selectedTodo?.title} onChange={onEditChange} />
                  ) : (
                    <span>{todo.title}</span>
                  )}
                </div>

                <div className='d-flex gap-1'>
                  {selectedTodo?.id == todo.id ? (
                    <button className='btn btn-success' onClick={onSave}>Save</button>
                  ) : (
                    <button
                      className='btn btn-info'
                      onClick={() => handleSelectTodo(todo)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className='btn btn-danger'
                    onClick={() => handleRemoveTodo(todo.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className='d-flex align-items-center gap-2'>
        <input
          className='form-control'
          type='text'
          placeholder='Title'
          onChange={onInputChange}
          value={todo}
        />
        <button className='btn btn-primary' onClick={addTodoHanler}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoManagerApp;