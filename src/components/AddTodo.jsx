import { PlusCircle } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { useTodos } from '../context/TodoContext'

function AddTodo() {
  const [text, setText] = useState("")
  const {addTodo} = useTodos()

  const submitHandler = (e) => {
    e.preventDefault()
    if(!text.trim()) return
    addTodo(text)
    setText("")
  }

  return (
    <form onSubmit={submitHandler} className="flex gap-3 mt-4">
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add your next goal..." className='flex-1 px-3 py-2 rounded-md border border-emerald-300 focus:outline-none focus:ring focus:ring-emerald-400 transition'/>
      <button type='submit' className='btn-green flex items-center gap-2 px-4 py-2'><PlusCircle size={18} /> Add</button>
    </form>
  )
}

export default AddTodo