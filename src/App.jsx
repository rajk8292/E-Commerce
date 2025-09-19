import React, { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import Sidebar from './components/Sidebar'
import ProductGrid from './components/ProductGrid'
import Pagination from './components/Pagination'
import Footer from './components/Footer'
import productsData from './data/products'

function useURLState(key, initial) {
  const [state, setState] = useState(()=>{
    try {
      const params = new URLSearchParams(window.location.search)
      return params.get(key) ?? initial
    } catch(e) { return initial }
  })
  useEffect(()=>{
    const params = new URLSearchParams(window.location.search)
    if(state==null) params.delete(key)
    else params.set(key, state)
    const newUrl = window.location.pathname + '?' + params.toString()
    window.history.replaceState({},'',newUrl)
  },[key,state])
  return [state,setState]
}

export default function App(){
  const [category, setCategory] = useURLState('category', null)
  const [brand, setBrand] = useURLState('brand', null)
  const [color, setColor] = useURLState('color', null)
  const [sort, setSort] = useURLState('sort', 'name_asc')
  const [page, setPage] = useURLState('page', '1')
  const [priceRange, setPriceRange] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const perPage = 8

  const onFilterChange = ({type, value})=>{
    if(type==='category') { setCategory(value); setPage('1') }
    if(type==='brand') { setBrand(value); setPage('1') }
    if(type==='color') { setColor(value); setPage('1') }
    if(type==='priceRange') { setPriceRange(value); setPage('1') }
  }

  const filtered = useMemo(()=>{
    let items = productsData.slice()
    if(category) items = items.filter(p=>p.category===category)
    if(brand) items = items.filter(p=>p.brand===brand)
    if(color) items = items.filter(p=>p.colors.includes(color))
    if(priceRange){
      const min = Math.min(...productsData.map(p=>p.price))
      const max = Math.max(...productsData.map(p=>p.price))
      const cutoff = min + (max-min)*(Number(priceRange)/100)
      items = items.filter(p=>p.discountPrice<=cutoff)
    }
    const [field, dir] = (sort || 'name_asc').split('_')
    items.sort((a,b)=>{
      if(field==='name') return dir==='asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      if(field==='price') return dir==='asc' ? a.discountPrice - b.discountPrice : b.discountPrice - a.discountPrice
      if(field==='popularity') return dir==='asc' ? a.ratingCount - b.ratingCount : b.ratingCount - a.ratingCount
      return 0
    })
    return items
  },[category,brand,color,priceRange,sort])

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const currentPage = Math.min(totalPages, Math.max(1, Number(page)))
  useEffect(()=>{ if(String(currentPage)!==String(page)) setPage(String(currentPage)) },[currentPage])
  const paginated = useMemo(()=> filtered.slice((currentPage-1)*perPage, currentPage*perPage),[filtered,currentPage])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroBanner />

      <main className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Sidebar - on small screens show drawer button */}
        <div className="hidden md:block w-72">
          <Sidebar onFilterChange={onFilterChange} selectedColor={color} />
        </div>

        {/* Drawer for small screens */}
        {drawerOpen && (
          <div className="md:hidden fixed inset-0 bg-black/40 z-50" onClick={()=>setDrawerOpen(false)}>
            <div className="absolute left-0 top-0 w-72 h-full bg-white p-4" onClick={(e)=>e.stopPropagation()}>
              <Sidebar onFilterChange={onFilterChange} selectedColor={color} isDrawer />
              <button className="mt-4 text-sm text-gray-600" onClick={()=>setDrawerOpen(false)}>Close</button>
            </div>
          </div>
        )}

        <div className="flex-1">
          {/* Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <div className="text-sm text-gray-600">Showing {filtered.length} items</div>

            <div className="flex items-center gap-2">
              <label className="text-sm">Sort</label>
              <select value={sort} onChange={(e)=>setSort(e.target.value)} className="border rounded px-2 py-1">
                <option value="name_asc">Name (A-Z)</option>
                <option value="name_desc">Name (Z-A)</option>
                <option value="price_asc">Price (Low &gt; High)</option>
                <option value="price_desc">Price (High &gt; Low)</option>
                <option value="popularity_desc">Popularity</option>
                <option value="popularity_asc">Least Popular</option>
              </select>

              <label className="ml-4 text-sm">View</label>
              <select className="border rounded px-2 py-1" defaultValue="12">
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="12">12</option>
              </select>
            </div>
          </div>

          <ProductGrid products={paginated} selectedColor={color} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onChange={(p)=>setPage(String(p))} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
