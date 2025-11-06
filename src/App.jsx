import { Leaf } from "lucide-react"
import AddTodo from "./components/AddTodo"
import FilterBar from "./components/FilterBar"
import TodoList from "./components/TodoList"
import { TodoProvider } from "./context/TodoContext"

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="card w-full max-w-lg p-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Leaf size={30} className="text-emerald-700" />
            <h1 className="text-3xl font-bold text-emerald-700 font-[Nunito]">GreenTodo</h1>
          </div>
          <AddTodo />
          <FilterBar />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  )
}

export default App