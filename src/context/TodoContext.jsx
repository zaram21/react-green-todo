import React, { createContext, useContext, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const TodoContext = createContext()

function TodoProvider({children}) {
  const [todos, setTodos] = useLocalStorage("todos", [])
  const [filter, setFilter] = useLocalStorage("filter", "all")

  const addTodo = (text) => {
    setTodos([...todos, {id: Date.now(), text, completed: false}])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const removeTodo = (id) => {
    setTodos((todos.filter((todo) => todo.id !== id)))
  }

  const filteredTodos = 
    filter === "active" 
      ? todos.filter((todo) => !todo.completed)
      : filter === "completed" 
      ? todos.filter((todo) => todo.completed)
      : todos;

  const value = useMemo(() => ({
    todos, addTodo, toggleTodo, removeTodo, filteredTodos, setFilter
  }))

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}

const useTodos = () => useContext(TodoContext)

export {TodoProvider, useTodos}