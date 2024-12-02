import React, {useState} from 'react'
// import Components
import AddToCart from './AddToCart'
import ProductCardSideNav from './ProductCardSideNav'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineStarOutline } from "react-icons/md";





const ProductCard = ({item, setSearchText}) => {



   

    const Navigate = useNavigate()


const percentage = item?.amount / 100;

const handleProduct = () => {
    Navigate(`/product/${item?.id}`)
    setSearchText && setSearchText("")
}

  return (
    <section className='border border-gray-200 rounded-lg p-1 overflow-hidden hover:border-secondary duration-200 cursor-pointer'>

<div className='w-full h-60 relative p-2 group'>
       
      <img src={item?.image} alt='productImage'
     className='w-[180px] h-full rounded-md object-contain group-hover:scale-110 duration-300'
     onClick={handleProduct}/>


     {/* ProductCardSideNav */}
     <ProductCardSideNav product={item} />
      </div>
      
<div className='flex flex-col gap-2 px-2 pb-2'>

<h2 className='text-lg font-bold line-clamp-1 uppercase'>{item?.title} </h2>

<h3 className='text-xs font-bold text-gray-400 line-clamp-2'>{item?.description}</h3>

<div className='text-base text-lightText flex items-center'>
<MdOutlineStarOutline />
<p className='mr-4'>{item.rating.rate}</p> <br />
<p className='font-semibold'> {item.rating.count} views</p>

</div>
<p className='text-gray-500 font-bold'>${item.price}</p>
<AddToCart product={item} />
</div>

    </section>
  )
}

export default ProductCard
