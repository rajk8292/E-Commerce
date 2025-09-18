import React from 'react'

export default function Navbar(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <div className="text-blue-600 font-bold text-xl">E-Commerce</div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="#" className="hover:text-blue-600">HOME</a>
            <a href="#" className="hover:text-blue-600">BAG</a>
            <a href="#" className="hover:text-blue-600">SNEAKERS</a>
            <a href="#" className="hover:text-blue-600">BELT</a>
            <a href="#" className="hover:text-blue-600">CONTACT</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-700">
          <div className="hidden sm:block">Items: <strong>0</strong></div>
          <div className="p-2 rounded focus-outline" role="button" tabIndex="0" aria-label="cart">🛒</div>
        </div>
      </div>
    </header>
  )
}
