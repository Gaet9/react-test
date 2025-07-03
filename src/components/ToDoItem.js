import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDoItem = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='TodoItem'>      {/* conditional statement for a classname */}
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : "incompleted"}`}>{task.task}</p> 
        <div>
            <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
            <FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
