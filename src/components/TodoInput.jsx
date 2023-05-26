import { useRef } from "react";
import store from "../redux/Store";
import { addTodo } from "../redux/Actions";

function TodoInput() {
  const input = useRef();

  const handleAddTodo = () => {
    if (input.current.value !== "") {
      store.dispatch(addTodo(input.current.value));
      input.current.value = "";
      input.current.focus();
    }
  };

  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        placeholder="Input your tasks here 🧐"
        ref={input}
        autoFocus={true}
        className="bg-slate-50 border border-gray-300 rounded-md px-2 py-1 mr-2"
      />
      <button
        onClick={handleAddTodo}
        className="px-4 py-2 Pastel bg-gradient-to-r from-violet-400 via-violet-300 to-violet-400 text-white rounded-md"
      >
        Submit
      </button>
    </div>
  );
}

export default TodoInput;
