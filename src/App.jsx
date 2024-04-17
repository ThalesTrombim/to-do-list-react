import { useState } from 'react';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList'

function App() {
  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
    setTask([...tasks, {id: Date.now(), text: task, done: false}])
  }

  const deleteTask = (taskId) => {
    setTask(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>

      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div> 
  )
}

export default App;
