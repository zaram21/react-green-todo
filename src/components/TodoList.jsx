import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useTodos } from '../context/TodoContext'
import TodoItem from './TodoItem'

function TodoList() {
  const {filteredTodos} = useTodos()

  return (
    <div className='mt-6'>
      <AnimatePresence>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <p className='text-center text-gray-500 mt-4'>Nothing here yet 🌿</p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TodoList