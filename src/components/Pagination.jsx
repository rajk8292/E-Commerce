import React from 'react'

export default function Pagination({ currentPage, totalPages, onChange }) {
  const pages = Array.from({length: totalPages}, (_,i)=>i+1)
  return (
    <nav className="mt-6 flex justify-center" aria-label="Pagination">
      <ul className="inline-flex -space-x-px">
        {pages.map(p=> (
          <li key={p}>
            <button onClick={()=>onChange(p)} aria-current={currentPage===p} className={`px-3 py-1 border ${currentPage===p ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}>{p}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
