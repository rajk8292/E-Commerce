import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({products, selectedColor}){
  if(products.length===0){
    return <div className="p-8 text-center text-gray-600">No products match this filter. <button className="ml-2 text-blue-600" onClick={()=>window.location.reload()}>Reset</button></div>
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(p=> <ProductCard key={p.id} product={p} selectedColor={selectedColor} />)}
    </div>
  )
}
