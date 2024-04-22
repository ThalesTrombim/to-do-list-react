import React from 'react'
import { Task } from './Task'

export const TaskList = ({ tasks, onDeleteTask, onToggleDone }) => {

  if(tasks.length === 0) {
    return <h4>Não há tarefas cadastradas!</h4>
  }

  return (
    <ul>
      {tasks.map((task) => (
        <Task 
          key={task.id}
          task={task}
          onDelete={e => onDeleteTask(task.id)}
          onToggleTaskDone={e => onToggleDone(task.id)}
        />
      ))}
    </ul>
  )
}
