import React from 'react'

export default function ProductCard({ product, selectedColor }) {
  const bg =
    selectedColor && product.colors.includes(selectedColor)
      ? selectedColor
      : '#ffffff'

  return (
    <article
      className="bg-white rounded-lg shadow-md overflow-hidden 
                 focus:outline-none focus:ring-2 focus:ring-blue-400
                 w-full h-full flex flex-col"
      tabIndex="0"
      aria-label={product.name}
    >
      {/* Image Section */}
      <div className="relative flex-1 flex items-center justify-center" style={{ background: bg }}>
        {product.isHot && (
          <span className="absolute left-2 top-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            HOT
          </span>
        )}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-h-52 object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 border-t">
        <h4 className="font-semibold text-gray-800 text-lg truncate">
          {product.name}
        </h4>

        {/* Price Section */}
        <div className="flex items-center gap-3 mt-2">
          <div className="text-blue-600 font-bold text-lg">
            ₹{product.discountPrice}
          </div>
          <div className="text-gray-400 line-through text-sm">
            ₹{product.price}
          </div>
          {product.discountPercent > 0 && (
            <div className="text-red-500 text-sm">
              -{product.discountPercent}%
            </div>
          )}
        </div>

        {/* Rating */}
        <div className="mt-2 text-sm text-yellow-500 font-medium">
          ★ {product.ratingValue}{' '}
          <span className="text-gray-500">({product.ratingCount})</span>
        </div>
      </div>
    </article>
  )
}
