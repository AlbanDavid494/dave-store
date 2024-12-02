import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import _ from 'lodash'
import {config} from '../../../config'
import {getData} from '../../../lib'
import Loading from '../../Component/Loading/Loading'
import { MdOutlineStarOutline } from "react-icons/md";
import { FaRegEye } from 'react-icons/fa'
import AddToCart from '../../Component/Pagination/ProductCard/AddToCart'
import ProductCard from '../../Component/Pagination/ProductCard/ProductCard'
import { IoClose } from 'react-icons/io5'
import CategoryFilters from '../../Component/CategoryFilters/CategoryFilters'
import productPayment from '../../../src/assets/ProductPayment/productPayment.webp'

const Products = () => {
  const [productData, setProductData] = useState(null)
  const [allProducts, setAllProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [imgUrl, setImgUrl] = useState("")
  const {id} = useParams()

const endpoint = id ? `${config?.baseUrl}/products/${id}` : `${config?.baseUrl}/products/`

useEffect(() => {
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await getData(endpoint);
      if (id) {
        setProductData(data);
        setAllProducts([]);
      } else {
        setAllProducts(data);
        setProductData(null);
      }
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setIsLoading(false);
    }
  };
  fetchData();
}, [id, endpoint]);


useEffect(()=>{
  if(productData){
    setImgUrl(productData?.image)
  }
}, [productData])

  return (
    <section className='lg:py-4'>
     
     {isLoading ? <Loading /> : <div className='container lg:pt-6'>
      {
!!id && productData && _.isEmpty(allProducts) ? (<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
<div className='flex justify-around' key={productData.id}>
  <div>
    <img src={productData?.image} alt='img' className='w-44' />
  </div>

{/* design image from local storage */}
  <div>
    <img />
  </div>

</div>

{/* single product  */}
<div className='flex flex-col gap-4' >
  <h2 className='text-3xl font-bold'>{productData?.title}</h2>

<div className='flex items-center justify-between'>
{/* <PriceTag
  regularPrice={productData?.regularPrice}
  discountedPrice={productData?.discountedPrice}
  className='text-xl'
  /> */}
  {productData.price}

  <div className='text-base text-grey-900 flex items-center'>
    <MdOutlineStarOutline />
    <p>{productData.rating.rate} </p>
  </div>
  <p className='text-base font-semibold'>{`(${productData?.rating.count} reviews)`}</p>
</div>
<p className='flex items-center'>
  <FaRegEye className='mr-1' /> {" "}
  <span className='font semibold mr-1'>{productData?.rating.count} people are viewing this right now</span>
</p>

<p>You are saving {" "}
    <span className="text-base font-semibold text-green-500">
      {/* <FormattedPrice
      amount={productData?.regularPrice- productData?.discountedPrice} /> */}
    </span> {" "} upon purchase
  </p>

  <p> Category:{" "}
  <span className="font-medium">{productData?.category}</span>
  </p>

  <AddToCart
product={productData}
title= 'Buy now'  className="bg-black/80 py-3 text-base text-gray-200 hover:scale-100 hover:text-white duration-200" />

<div className='bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2'>

  <img src={productPayment} alt="payment" className='w-auto object-cover' />

  <p className='font-semibold'>Guaranted safe & secure checkout</p>
</div>

<div>

</div>

</div>

</div>) : (<section className='flex items-start gap-10'>
  <CategoryFilters id={id} />


<div>
<p className='text-4xl font-semibold mb-5 text-center'>Products Collection</p>


<div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5'>
{allProducts?.map((item) => (
<ProductCard item={item} key={item?.id} />
))}
</div>

</div>

</section>)
      }
      </div>}     
    
    </section>
  )
}

export default Products
