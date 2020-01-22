export const initialState = {

  todos: [
    { 
      item: 'Learn Reducers',
      completed: false,
      id: 7834834354
    }
  ]

}

export const todoReducer = (state, action) => {
  switch(action.type){
    case "ADD_TASK":
      const newItem = {
        item: action.payload,
        completed: false,
        id: Date.now()
      }
      return {
        ...state,
        todos: [...state.todos, newItem]
      };

      case "TOGGLE_COMPLETED":
        return {
          ...state,
          completed: !state.completed
        }

    default:
      return state
  }
}