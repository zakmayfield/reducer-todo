import React from 'react';

const TodoList = props => {
  return (
    <div>
      <h2>Thingz to do</h2>
      {
        props.todoList.map(item => {
          return (
            <div>
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