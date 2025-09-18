import React from 'react'
export default function HeroBanner(){
  return (
    <div className="bg-blue-400 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold">Adidas Men Running Sneakers</h2>
          <p className="mt-2 text-sm md:text-base">Performance and design. Taken right to the edge.</p>
          <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded font-semibold">SHOP NOW</button>
        </div>
        <div className="w-48 h-40 md:w-60 md:h-44 rounded overflow-hidden bg-white flex items-center justify-center">
          <img src="#" alt="" className="object-contain"/>
        </div>
      </div>
    </div>
  )
}
