import React from 'react'
import { Link } from 'react-router-dom'
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import AddToCart from '../Pagination/ProductCard/AddToCart'
import { store } from '../../../lib/store';

const CartProduct = ({product}) => {

  const { removeFromCart } = store();

  const handleRemoveProduct = () => {
    if (product) {
      removeFromCart(product?.id);
      toast.success(`${product?.title.substring(0, 20)} deleted successfully!`);
    }
  };

  return (
    <div className='flex py-6 sm:py-10'>
      <Link to={`/product/${product?.id}`}>
      <img src={product?.image} alt='productImage' className='h-24 w-24 rounded-md object-contain object-center sm:h-48 sm:w-48 border border-primary/50 hover:primary duration-300' />
      </Link>

<div className='ml-4 flex flex-1 flex-col justify-between sm:ml-6'>

<div className='relative pr-9 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:pr-0'>

<div className="flex flex-col gap-1 col-span-3">
<h3 className="text-base font-semibold w-full">{product?.title.substring(0, 80)}</h3>
<p className="text-xs">Category: <span className="font-medium">{product?.category}</span></p>
            <div className="flex items-center gap-6 mt-2">
              <p className="text-base font-semibold">
                {/* <FormattedPrice
                  amount={product?.discountedPrice * product?.quantity}
                /> */}
               ${product?.price}
              </p>
              <AddToCart product={product} showPrice={false} />
            </div>
</div>


          <div className='mt-4 sm:mt-0 sm:pr-9'>

          <div className="absolute right-0 top-0">
              <button
                onClick={handleRemoveProduct}
                className="-m2 inline-flex p-2 text-gray-600 hover:text-red-600"
              >
                <IoClose className="text-xl" />
              </button>
            </div>

          </div>

</div>

<div>
<p className="flex space-x-2 text-sm text-gray-700">
              <FaCheck className="text-lg text-green-500" />{" "}
              <span>In Stock Ships in 3-4 weeks</span>
            </p>
</div>

</div>

    </div>
  )
}

export default CartProduct
