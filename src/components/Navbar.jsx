import React, { useState } from "react";


export default function Navbar({ toggleSidebar }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">E-Comm</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li className="text-blue-500 cursor-pointer">HOME</li>
          <li>BAG</li>
          <li>SNEAKERS</li>
          <li>BELT</li>
          <li>CONTACT</li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:block font-semibold">Items $0.00</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-sm px-6 py-4 space-y-3 font-semibold">
          <li className="text-blue-500">HOME</li>
          <li>BAG</li>
          <li>SNEAKERS</li>
          <li>BELT</li>
          <li>CONTACT</li>
          <li onClick={toggleSidebar} className="cursor-pointer text-red-500">
            Toggle Filters
          </li>
        </ul>
      )}
    </nav>
  );
}
