import React, { useState } from 'react'
import { ToDoForm } from './ToDoForm'
import { v4 as uuidv4 } from 'uuid';
import { ToDoItem } from './ToDoItem';
import { EditToDoForm } from './EditToDoForm';
uuidv4();


export const ToDoList = () => {
    const [todos, setTodos] = useState([]); 
    // set up the state component, with an empty array in initial value
  
    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, 
            completed: false, isEditing: false}])
            // first copy the array, then add values 
        }
   
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo))}
        // weird syntax, we go through the array with map, when todo.id === id, then completed takes the opposite of it's actual value.
        // therefore if it's true, it's set false, if it's false, it's set true.

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
        // instead of a remove function, we filter out the task with the corresponding id
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))   
            // again syntax here, if the id is equal the id we're passing in, 
            // then we make a copy with the spreading operator and isEditing should be the opposite of what the value is in this moment
            // else it takes the value of todo, which means it doesn't change
        }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task: task, isEditing: !todo.isEditing}: todo))
    }
    return (
    <div className='TodoList'>
        <h1>Get things done!</h1>
        <ToDoForm addTodo={addTodo} />
        {todos.map((todo) => (
            todo.isEditing ? (
                <EditToDoForm editTodo={editTask} task={todo} />
            ) : (
                    <ToDoItem task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                )
        ))}
    </div>
  )
}
