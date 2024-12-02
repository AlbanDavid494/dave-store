import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { IoClose, IoSearchOutline } from 'react-icons/io5'
import { FiShoppingBag, FiStar, FiUser } from 'react-icons/fi'
import { FaChevronDown } from 'react-icons/fa'
// import logo
import logo from '../../assets/Footer-Images/logo.png'
//bottom navigation links
import BottomNavigation from './BottomNavigation'
// imports from headlessui
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

import {config} from '../../../config'
import {getData} from '../../../lib'


import {v4 as uuidv4} from 'uuid'
import ProductCard from '../Pagination/ProductCard/ProductCard'
import CategoryFilters from '../CategoryFilters/CategoryFilters'
import { store } from '../../../lib/store'
import DarkMode from './DarkMode'


const Header = () => {
  
const [searchText, setSearchText] = useState('')
const [categories, setCategories] = useState([])
const [products, setProducts] = useState([])
const [filteredProducts, setFilteredProducts] = useState([])
const {cartProduct, favoriteProduct, currentUser} = store()

useEffect(() => {
  const fetchData = async () => {
    const endpoint = `${config?.baseUrl}/products`
  try{
    const data = await getData(endpoint)
    setProducts(data)
  }catch(error){
console.error('Error fetching data', Error)
  }
}
fetchData()
}, [])

 useEffect(() => {
  const fetchData = async() => {
    const endpoint = `${config?.baseUrl}/categories`;
    try {
      const data = await getData(endpoint)
      setCategories(data)
      
    } catch (error) {
      console.log('Error fetching data', error);
      
    }
  }
  fetchData()
 }, [])

 useEffect(()=>{
  const filtered = products.filter((item) => (
    item.title.toLowerCase().includes(searchText.toLocaleLowerCase())
  ))
  setFilteredProducts(filtered)
 }, [searchText])



  return (
    <nav className='w-full bg-gray-100 md:sticky md:top-0 z-50'>

      <div className='max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0'>
        {/* logo */}
        <Link to={'/'} className='flex  justify-between'>
        <img src={logo} className='w-10' alt='logo'/>
        <p className='ml-2 mt-2 font-semibold'>Dave Store</p>
        </Link>

        {/* search bar */}
        <div className='hidden md:inline-flex max-w-3xl w-full relative'>
          <input type='text' onChange={(e)=> setSearchText(e.target.value)} 
          placeholder='search products...' className='w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-md ring-1 ring-inset ring-secondary/30 placeholder:font-normal placeholder:text-gray-400 focus:outline-none focus:border-primary sm:text-sm px-4 py-2'
          />
          {searchText ? (<IoClose onClick={() => setSearchText('')} className='absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200' />) : (<IoSearchOutline className='absolute top-2.5 right-4 text-xl' />)}
        </div>

        {/* search product appear */}
        {searchText && (
          <div className='absolute left-0 top-20 w-full mx-auto max-h-[500px] px-10 py-5 bg-white z-20 scrollbar-hide overflow-y-scroll text-black shadow-lg shadow-primary'>
           {filteredProducts.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
            {filteredProducts.map((item) => (
              <ProductCard key={uuidv4()} item={item} searchText={searchText}/>
            ))}
           </div> : <div className='py-10 bg-gray-50 w-full flex items-center justify-center border-gray-600 rounded-md'> 
      <p className='text-xl font-normal'> Nothing matches with your search keywords 
        <span className='underline underline-offset-2 decoration-[1px] text-red-500 font-semibold'>{`(${searchText})`}</span>
        </p>. Please try again </div>}
          </div> 
        )}

{/* menu bar */}
<div className='flex items-center gap-x-6 text-2xl'>



<div className='rounded-full bg-primary/40 p-1'>

  <Link to={'/profile'}>
  {currentUser ? <img src={currentUser?.avatar} className='rounded-full w-10 h-10' alt='profileImg' /> :  <FiUser className='hover:text-skyText duration-200 cursor-pointer' />}
 
  </Link>
</div>

  <Link to={'/favorite'} className='relative block'>
    <FiStar className='hover:text-skyText duration-200 cursor-pointer' />
    <span className='inline-flex items-center justify-center bg-primary text-white absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4'>
      {favoriteProduct?.length > 0 ? favoriteProduct?.length : "0"}
    </span>
  </Link>

  <Link to={'/cart'} className='relative block'>
    <FiShoppingBag className='hover:text-skyText duration-200 cursor-pointer' />
    <span className='inline-flex items-center justify-center bg-primary text-white absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4'>
      {cartProduct?.length > 0 ? cartProduct?.length : 0}
    </span>
  </Link>

  <div>
  <DarkMode />
</div>

</div>

</div>


 <section className='w-full bg-black text-white dark:bg-white dark:text-black'>
  <div className='container py-4 max-w-4xl flex items-center gap-5 justify-between '>
{/* <Menu>
  <MenuButton className="inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 font-semibold text-gray-300 hover:text-white">Select Category <FaChevronDown className='text-base mt-1' /></MenuButton>
  <Transition
  enter="transition ease-out duration-75"
  enterFrom="opacity-0 scale-95"
  enterTo="opacity-100 scale-100"
  leave="transition ease-in duration-100"
  leaveFrom="opacity-100 scale-100"
  leaveTo="opacity-0 scale-95"
  >
    <MenuItems 
    anchor="bottom end"
    className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50">
      {
categories.map((item) => (
  <MenuItem key={uuidv4()}>
 
   <Link to={`/products/${item?.name}`} className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide">

{item?.name}
    </Link>
  </MenuItem>
))
      }
    </MenuItems>
  </Transition>
</Menu> */}

  {
    BottomNavigation.map((links) => {
      const {title, link, id} = links
      return <Link key={id} to={link}> <p className='uppercase hidden md:inline-flex text-sm font-semibold text-whiteText/90 hover:text-whiteText duration-200 relative overflow-hidden group cursor-pointe '>
      {title}
      <span className='inline-flex w-full h-[1px] bg-white absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300' />
              </p></Link>
    })
  }
</div>
</section>     
   
    </nav>
  )
}

export default Header
