import React from 'react'

export default function ProductCard({ product, selectedColor }) {
  const bg = selectedColor && product.colors.includes(selectedColor) ? selectedColor : '#ffffff'
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full focus-outline" tabIndex="0" aria-label={product.name}>
      <div className="relative">
        {product.isHot && <span className="absolute left-2 top-2 bg-red-500 text-white text-xs px-2 py-1 rounded">HOT</span>}
        <div className="card-image flex items-center justify-center" style={{background:bg}}>
          <img src={product.imageUrl} alt={product.name} className="max-h-full object-contain"/>
        </div>
      </div>
      <div className="p-4 mt-auto">
        <h4 className="font-medium text-gray-800 truncate">{product.name}</h4>
        <div className="flex items-center gap-3 mt-2">
          <div className="text-blue-600 font-semibold">₹{product.discountPrice}</div>
          <div className="text-gray-400 line-through text-sm">₹{product.price}</div>
          {product.discountPercent>0 && <div className="text-red-500 text-sm">-{product.discountPercent}%</div>}
        </div>
        <div className="mt-2 text-sm text-yellow-500">★ {product.ratingValue} <span className="text-gray-500">({product.ratingCount})</span></div>
        <div className="mt-3 flex gap-2">
          <button className="flex-1 border rounded px-2 py-1 text-sm">Wishlist</button>
          <button className="flex-1 border rounded px-2 py-1 text-sm">Compare</button>
        </div>
      </div>
    </article>
  )
}
