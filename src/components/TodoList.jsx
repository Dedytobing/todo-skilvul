import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import store from "../redux/Store";
import { toggleTodo, deleteTodo, updateTodo } from "../redux/actions";

function TodoList() {
  const [toggleEditTodo, SetToggleEditTodo] = useState(false); // Show or hide Edit Inputs
  const [editTodoInputVal, SetEditTodoInputVal] = useState({
    id: "",
    title: "",
  });
  const editTodoInputRef = useRef();
  var newTodos = [];

  const myTodoList = (state) => state.todos;
  const todos = useSelector(myTodoList);
  const myTodoFilter = (state) => state.filter;
  const filter = useSelector(myTodoFilter);

  if (filter === "SHOW_ALL") {
    newTodos = [].concat(todos);
  } else if (filter === "SHOW_COMPLETED") {
    newTodos = todos.filter((todo) => {
      return todo.completed === true;
    });
  } else if (filter === "SHOW_ACTIVE") {
    newTodos = todos.filter((todo) => {
      return todo.completed === false;
    });
  }

  // Toggle Todo
  const handleToggleTodo = (id) => {
    store.dispatch(toggleTodo(id));
  };

  // Delete Todo
  const handleDeleteTodo = (id) => {
    store.dispatch(deleteTodo(id));
  };

  // Show Edit Todo
  const handleShowEditTodo = (id, title) => {
    SetToggleEditTodo(true);
    SetEditTodoInputVal({ id: id, title: title });
    setTimeout(() => {
      editTodoInputRef.current.focus();
    }, 0);
  };

  // Update Edit Input
  const handleChangeEditInputVal = (e) => {
    SetEditTodoInputVal({ ...editTodoInputVal, title: e.target.value });
  };

  // Edit Todo
  const handleEditTodo = () => {
    if (editTodoInputVal.title !== "") {
      store.dispatch(updateTodo(editTodoInputVal.id, editTodoInputVal.title));

      SetToggleEditTodo(false);
      SetEditTodoInputVal({ id: "", title: "" });
    }
  };

  return (
    <>
      <div className={toggleEditTodo ? "block my-4 text-center" : "hidden"}>
        <fieldset className="my-4 mx-auto">
          <legend className="font-semibold text-lg">Edit Todo</legend>
          <input
            ref={editTodoInputRef}
            value={editTodoInputVal.title}
            type="text"
            placeholder="Edit Title"
            onChange={(e) => handleChangeEditInputVal(e)}
            className="bg-slate-50 border border-gray-300 rounded-md px-2 py-1 mt-2"
          />
          <br />
          <button
            onClick={handleEditTodo}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-200 text-white rounded-md mt-2"
          >
            DONE
          </button>
          <button
            onClick={() => {
              SetToggleEditTodo(false);
            }}
            className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-200 text-white rounded-md mt-2 ml-2"
          >
            CANCEL
          </button>
        </fieldset>
      </div>

      <div>
        {newTodos.map((item, index) => {
          return (
            <div
              className="listDiv flex items-center justify-between py-3 border-b border-gray-300"
              key={item.id}
            >
              <div className="listData flex items-center">
                <div>{index + 1}</div>
                <div className={!item.completed ? "toBeDoneItems ml-4" : "doneItems ml-4 line-through "}>
                  {item.title}
                </div>
              </div>
              <div className="listActions flex items-center ">
                <div className="listStatus ">
                  {item.completed ? "✅" : "❓"}
                </div>
                <div className="ml-8" >
                  <button
                    onClick={() => {
                      handleToggleTodo(item.id);
                    }}
                    className="px-2 py-1 bg-gradient-to-r from-green-500 to-green-300 text-white rounded-md"
                  >
                    {item.completed ? "REDO" : "DONE"}
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleShowEditTodo(item.id, item.title);
                    }}
                    className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-yellow-300 text-white rounded-md ml-2"
                  >
                    {"EDIT"}
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleDeleteTodo(item.id);
                    }}
                    className="px-2 py-1 bg-gradient-to-r from-red-500 to-red-300 text-white rounded-md ml-2"
                  >
                    {"DELETE"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoList;
