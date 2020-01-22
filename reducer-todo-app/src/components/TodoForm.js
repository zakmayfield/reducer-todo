import React, { useState } from 'react';


const TodoForm = ({ dispatch }) => {

  //form state
  const [taskInput, setTaskInput] = useState('')
  // console.log('task input: ', taskInput)

  const handleChanges = e => {
    setTaskInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    setTaskInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="add a task here"
          name="addTask"
          value={taskInput}
          onChange={handleChanges}
        />

        <button onClick={() => {
          dispatch({ 
            type: 'ADD_TASK',
            payload: taskInput 
          })
        }}>Add</button>
      </form>
    </div>
  )
}

export default TodoForm