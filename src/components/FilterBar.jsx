import { CheckCircle2, Clock, ListTodo } from 'lucide-react'
import React from 'react'
import { useTodos } from '../context/TodoContext'

function FilterBar() {
  const {setFilter} = useTodos()

  const filters = [
    { type: "all", icon: <ListTodo size={18} />, label: "All" },
    { type: "active", icon: <Clock size={18} />, label: "Active" },
    { type: "completed", icon: <CheckCircle2 size={18} />, label: "Done" },
  ]

  return (
    <div className='flex justify-center gap-5 mt-5'>
      {filters.map((f) => (
        <button key={f.type} onClick={() => setFilter(f.type)} className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
          {f.icon}
          {f.label}
        </button>
      ))}
    </div>
  )
}

export default FilterBar