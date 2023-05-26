import { useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import store from "./redux/Store";

function App() {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      console.log(store.getState()); //Output the changed state
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-300">
      <img src="https://raw.githubusercontent.com/Dedytobing/personalWebsite/main/img/logo.png" alt="Logo" width={100} />
        <h1 className="text-3xl font-bold mb-3">To-Do List</h1>
        
        <div className="bg-slate-200 p-5 rounded shadow-lg w-1/2. mx-auto">
          <TodoInput />
          <TodoFilter />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
