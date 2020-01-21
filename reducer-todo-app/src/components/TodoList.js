import React, { useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/reducer';

const TodoList = props => {

  // const [state, dispatch] = useReducer(todoReducer, initialState)
  // console.log('todo list state', state)

  return (
    <div>
      <h2>Things to do</h2>
      {
        props.state.todos.map(item => {
          return (
            <div onClick={() => {
              props.dispatch({
                type: "TOGGLE_COMPLETED"
              })
            }}>
              <p key={item.id}>{item.item}</p>
                {item.completed ? 
                  <p className="completedTaskConfirm">COMPLETED!</p>
                :
                  <p className="completedTaskConfirm">not completed :(</p>}
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoList