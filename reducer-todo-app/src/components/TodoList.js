import React from 'react';

const TodoList = props => {
  return (
    <div>
      <h2>Things to do</h2>

      {
        props.state.todos.map(item => {
          return (
            <div onClick={() => {
              props.dispatch({
                type: "TOGGLE_COMPLETED",
                payload: item.id
              })
            }}>
              <p key={item.id}>{item.item}</p>
              {
                item.completed ?
                  <p className="completedTaskConfirm">COMPLETED!</p>
                  :
                  <p className="completedTaskConfirm">not completed</p>
              }
            </div>
          )
        })
      }

      <button onClick={() => {
        props.dispatch({
          type: "REMOVE_COMPLETED"
        })
      }}>
        Remove Completed
            </button>
    </div>
  )
}

export default TodoList