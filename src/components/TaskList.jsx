import React from 'react'
import { Task } from './Task'

export const TaskList = ({tasks, onDeleteTask}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task 
          key={task.id}
          task={task}
          onDelete={e => onDeleteTask(task.id)}
        />
      ))}
    </ul>
  )
}
