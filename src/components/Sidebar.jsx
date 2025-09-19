import React, { useState } from 'react'
import products from '../data/products'

export default function Sidebar({ onFilterChange, selectedColor, isDrawer=false }) {
  const categoriesAll = Array.from(new Set(products.map(p=>p.category)))
  const brandsAll = Array.from(new Set(products.map(p=>p.brand)))
  const [openCategory, setOpenCategory] = useState(true)
  const [showMoreCats, setShowMoreCats] = useState(false)
  const colorOptions = ['black','red','blue','yellow','pink','green','white']

  // ensure at least 6 items show: add placeholders if needed
  const categories = categoriesAll.slice(0, showMoreCats ? categoriesAll.length : 6)
  while(categories.length < 6) categories.push('—')

  return (
    <aside className={`${isDrawer ? '' : ''} w-full md:w-72 p-4 bg-white rounded-md shadow-sm`}>
      <div>
        <h3 className="font-semibold mb-2">Hot Deals</h3>
        <button className="text-sm text-blue-600 mb-2" onClick={()=>setOpenCategory(!openCategory)} aria-expanded={openCategory}>
          {openCategory ? 'Collapse' : 'Expand'}
        </button>

        {openCategory && (
          <ul className="text-gray-700 space-y-2">
            {categories.map((c, idx) => (
              <li key={idx}>
                {c === '—' ? <div className="text-gray-300">placeholder</div> :
                  <button className="w-full text-left hover:text-blue-600" onClick={()=>onFilterChange({type:'category', value:c})}>
                    <span className="capitalize">{c}</span>
                    <span className="float-right text-gray-400 text-xs">({products.filter(p=>p.category===c).length})</span>
                  </button>
                }
              </li>
            ))}
            {categoriesAll.length > 6 && <li><button className="text-sm text-blue-600" onClick={()=>setShowMoreCats(s=>!s)}>{showMoreCats?'View less':'View more'}</button></li>}
          </ul>
        )}
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Prices</h3>
        <div className="text-sm text-gray-600">Range: ₹{Math.min(...products.map(p=>p.discountPrice))} - ₹{Math.max(...products.map(p=>p.discountPrice))}</div>
        <input type="range" min="0" max="100" className="w-full mt-2" onChange={(e)=>onFilterChange({type:'priceRange', value:e.target.value})} aria-label="Price range"/>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Color</h3>
        <div className="flex gap-2 flex-wrap">
          {colorOptions.map(c=> (
            <button key={c} aria-pressed={selectedColor===c} onClick={()=>onFilterChange({type:'color', value:c})}
              className={`w-7 h-7 rounded-full ring-2 ${selectedColor===c ? 'ring-blue-500 scale-110' : 'ring-gray-200'}`} style={{backgroundColor:c}}/>
          ))}
          <button className="ml-2 text-sm text-gray-600" onClick={()=>onFilterChange({type:'color', value:null})}>Reset</button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Brand</h3>
        <ul className="text-gray-700 space-y-2">
          {brandsAll.map((b,idx)=>(
            <li key={idx}>
              <button className="w-full text-left hover:text-blue-600" onClick={()=>onFilterChange({type:'brand', value:b})}>
                {b} <span className="float-right text-gray-400 text-xs">({products.filter(p=>p.brand===b).length})</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
