import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products, selectedColor }) {
  if (!products.length) {
    return <div className="p-8 text-center text-gray-600">No products found. <button className="ml-2 text-blue-600" onClick={()=>window.location.href=window.location.pathname}>Reset</button></div>
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(p => <ProductCard key={p.id} product={p} selectedColor={selectedColor} />)}
    </div>
  )
}
