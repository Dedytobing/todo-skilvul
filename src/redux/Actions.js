//Add Todo
const addTodo = (title) => {
  return {
    type: "ADD_TODO",
    payload: title,
  };
};

//Delete Todo
const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

//Complete or Redo Todo
const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    payload: id,
  };
};

//Update or Edit Todo
const updateTodo = (id, title) => {
  return {
    type: "UPDATE_TODO",
    payload: { id: id, title: title },
  };
};

//Filter
const filterTodo = (filter) => {
  return {
    type: "FILTER_TODO",
    payload: filter,
  };
};

export { addTodo, deleteTodo, toggleTodo, updateTodo, filterTodo };
