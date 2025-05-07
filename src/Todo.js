import './Todo.css';
import { useState } from 'react';

const Todo = () => {
  const [task, setTask]= useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
      setTasks([...tasks, task]);
      setTask('');
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // const handleClick = () => {
  //   setTask('Wash dishes')
  // }


  return (
    <div style={{ padding: "20px", alignItems: 'center',}}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
