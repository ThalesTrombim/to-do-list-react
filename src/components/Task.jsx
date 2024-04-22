import React from 'react'

export const Task = ({ task, onDelete, onToggleTaskDone }) => {
  return (
    <li>
      <span onClick={onToggleTaskDone} style={{textDecoration: task.done ? "line-through" : "none"}}>{task.text}</span>
      <button onClick={onDelete}>Remover</button>
    </li>
  )
}
