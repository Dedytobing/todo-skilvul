let getID = (todos) => {
  const maxID = todos.reduce((maxID, todo) => {
    return Math.max(maxID, todo.id);
  }, -1);
  return maxID + 1;
};

let initialState = {
  todos: [],
  filter: "NO_ITEMS",
};

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    /*Add Todo object into the state.todos*/
    case "ADD_TODO": {
      return {
        ...state,
        filter: "SHOW_ALL",
        todos: [
          ...state.todos,
          {
            id: getID(state.todos),
            title: action.payload,
            completed: false,
          },
        ],
      };
    }
    /*Delete specific Todo object from state.todos*/
    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload;
        }),
        filter: state.todos.length < 2 ? "NO_ITEMS" : "SHOW_ALL",
      };
    }
    /*Complete or Redo specific Todo*/
    case "TOGGLE_TODO": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : { ...todo };
        }),
      };
    }
    /*Edit Todo title*/
    case "UPDATE_TODO": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload.id
            ? { ...todo, title: action.payload.title }
            : { ...todo };
        }),
      };
    }
    /*Edit filter type in state.filter*/
    case "FILTER_TODO": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};
