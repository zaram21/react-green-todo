import { useTodos } from '../context/TodoContext'
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Trash } from 'lucide-react';

function TodoItem({todo}) {
  const {toggleTodo, removeTodo} = useTodos()

  return (
    <motion.div layout initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.9}} whileHover={{ scale: 1.02}} className={`flex justify-between items-center p-3 mt-2 rounded-lg shadow bg-gradient-to-r ${todo.completed ? "from-emerald-100 to-emerald-50" : "from-white to-emerald-50"} hover:shadow-lg transition-all`}>
      <div onClick={() => toggleTodo(todo.id)} className="flex items-center gap-3 cursor-pointer">
        {todo.completed ? (
          <CheckCircle2 size={22} className="text-emerald-600" />
        ) : (
          <Circle size={22} className="text-gray-400" />
        )}
        <span className={`text-lg font-medium ${todo.completed ? "line-through text-gray-500" : "text-gray-700"}`}>{todo.text}</span>
      </div>
      <button onClick={() => removeTodo(todo.id)} className="text-red-500 hover:text-red-600 transition-colors"><Trash size={18} /></button>
    </motion.div>
  )
}

export default TodoItem