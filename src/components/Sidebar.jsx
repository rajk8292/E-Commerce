import React, { useState } from 'react'
import products from '../data/products'

export default function Sidebar({ onFilterChange, selectedColor }) {
  const categories = Array.from(new Set(products.map(p => p.category)))
  const brands = Array.from(new Set(products.map(p => p.brand)))
  const [openCat, setOpenCat] = useState(true)

  const colorOptions = ['black', 'red', 'blue', 'yellow', 'pink', 'green', 'white']

  return (
    <aside className="w-64 lg:w-72 p-5 bg-white rounded shadow-sm sticky top-6 
                     h-[calc(100vh-120px)] overflow-auto">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-3">Hot Deals</h3>
        <button
          className="text-sm text-blue-600 mb-3"
          onClick={() => setOpenCat(!openCat)}
          aria-expanded={openCat}
        >
          {openCat ? 'Collapse' : 'Expand'}
        </button>
        {openCat && (
          <ul className="text-gray-700 space-y-2">
            {categories.map((c, idx) => (
              <li key={idx}>
                <button
                  className="flex justify-between w-full text-left hover:text-blue-600"
                  onClick={() => onFilterChange({ type: 'category', value: c })}
                >
                  <span>{c}</span>
                  <span className="text-gray-400 text-xs">
                    ({products.filter(p => p.category === c).length})
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Price Filter */}
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Prices</h3>
        <div className="text-sm text-gray-600">
          Range: ₹{Math.min(...products.map(p => p.price))} - ₹{Math.max(...products.map(p => p.price))}
        </div>
        <input
          type="range"
          min="0"
          max="100"
          className="w-full mt-3 accent-blue-500"
          onChange={(e) => onFilterChange({ type: 'priceRange', value: e.target.value })}
          aria-label="Price range"
        />
      </div>

      {/* Color Filter */}
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Color</h3>
        <div className="flex gap-3 flex-wrap items-center">
          {colorOptions.map((c) => (
            <button
              key={c}
              onClick={() => onFilterChange({ type: 'color', value: c })}
              aria-pressed={selectedColor === c}
              className={
                'w-7 h-7 rounded-full ring-2 transition ' +
                (selectedColor === c ? 'ring-blue-500 scale-110' : 'ring-gray-200')
              }
              style={{ backgroundColor: c }}
            ></button>
          ))}
          <button
            onClick={() => onFilterChange({ type: 'color', value: null })}
            className="ml-2 text-sm text-gray-600 underline"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Brands */}
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Brand</h3>
        <ul className="text-gray-700 space-y-2">
          {brands.map((b, idx) => (
            <li key={idx}>
              <button
                className="flex justify-between w-full text-left hover:text-blue-600"
                onClick={() => onFilterChange({ type: 'brand', value: b })}
              >
                <span>{b}</span>
                <span className="text-gray-400 text-xs">
                  ({products.filter(p => p.brand === b).length})
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
