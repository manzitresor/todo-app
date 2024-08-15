import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";
import TodoBanner from "./components/TodoBanner";

function App() {
  return (
    <>
    <div className="mx-40 mt-6">
        <TodoBanner></TodoBanner>
        <AddTodo></AddTodo>
        <DisplayTodo></DisplayTodo>
    </div>
    </>
  )
}

export default App
