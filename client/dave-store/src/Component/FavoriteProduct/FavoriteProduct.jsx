import { IoClose, IoTodaySharp } from "react-icons/io5";
import { store } from "../../../lib/store";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast'
import AddToCart from '../../Component/Pagination/ProductCard/AddToCart'

const FavoriteProduct = ({product}) => {
  const { removeFromFavorite } = store()
  const navigate = useNavigate()
  return (
    <div className="flex py-6">
      

<div className='min-w-0 flex-1 lg:flex lg:flex-col'>
  <div className='lg:flex-1'>

<div className='sm:flex-1'>
  <div>
    <h4 className="font-medium text-gray-900">{product?.title}</h4>
    <p className="mt-2 hidden text-sm text-gray-500 sm:block">{product?.description}</p>
    <p className="text-sm mt-1">
      category: <span className="font-medium">{product?.category}</span>
    </p>
  </div>
  <span onClick={()=>{
    removeFromFavorite(product?.id);
  toast.success("Removed from favorite successfully")
  }} className="text-lg text-gray-600 hover:text-red-600 duration-200 cursor-pointer inline-block mt-4 sm:mt-0"><IoClose /></span>
</div>

<div className='flex text-sm items-center gap-6 font-medium py-4'>
  <AddToCart product={product} className='w-32' />
</div>

{/* <p>you're saving</p> */}

  </div>
</div>


<div onClick={() => navigate(`/product/${product?.id}`)} className='ml-4 flex-shrink-0 h-20 w-20 sm:w-40 sm:h-40 sm:order-first sm:mr-6 border border-gray-200 rounded-md hover:border-primary duration-200 cursor-pointer group overflow-hidden '>
  <img src={product.image} alt="productImage" className='h-full w-full rounded-lg object-contain object-center group-hover:scale-110 duration-200' />
</div>

    </div>
  )
}

export default FavoriteProduct
