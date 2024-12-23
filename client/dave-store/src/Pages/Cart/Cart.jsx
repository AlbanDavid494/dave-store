import React, { useEffect, useState } from 'react'
import { FaQuestionCircle, FaLongArrowAltRight } from "react-icons/fa";
import { store } from '../../../lib/store'
import CartProduct from '../../Component/CartProduct/CartProduct'
import {v4 as uuidv4} from 'uuid'
import { Link } from 'react-router-dom'
import CheckoutBtn from '../../Component/CheckoutBtn/CheckoutBtn';
import ProductPrice from'../../Component/ProductPrice/ProductPrice'


const Cart = () => {
  const [totalAmount, setTotalAmount] = useState({regular: 0})
const {cartProduct, currentUser} = store()


const shippingAmount = 25;
const taxAmount = 15;

useEffect(() => {
  const totals = cartProduct.reduce((sum, product) => {
    sum.regular += product?.price * product?.quantity;
    return sum;
  }, {regular: 0})
  setTotalAmount(totals)
}, [cartProduct])

  return (
    <div className='container lg:p-24'>
      {cartProduct.length > 0 ? (<>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>

<div className='mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16'>
  <section className='lg:col-span-7'>
    <div className='divide-y divide-gray-200 border-b border=t border-gray-200'>
      {cartProduct.map((product) => (
        <CartProduct product={product} key={uuidv4()} />
      ))}
    </div>
  </section>
  <section className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
    <h2 className='text-lg text-gray-900'>Order summary</h2>
    <dl className='mt-6 space-y-4'>
<div className='flex items-center justify-between'>
  <dt className='text-sm text-gray-600' >Subtotal</dt>
  <dd className='text-sm font-medium text-gray-900'>
    <ProductPrice price={totalAmount.regular}/>
   </dd>
</div>
<div className='flex items-center justify-between border-t border-gray-200 pt-4'>
  <dt className='flex items-center text-sm text-gray-600'>
  <span>Shipping estimate</span>

<FaQuestionCircle
  className='h-5 w-5 text-gray-400 ml-2'
  aria-hidden='true'
/>
  </dt>
  <dd className='text-sm font-medium text-gray-900'>
    <ProductPrice price={taxAmount} />
  </dd>
</div>
<div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">
                    Total Discount
                  </dt>
                  <dd className="text-base font-medium text-gray-500">
                    $0 
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-lg font-bold text-gray-900">
                    <ProductPrice
                      price={totalAmount?.regular + shippingAmount + taxAmount}
                    />
                  </dd>
                </div>
    </dl>

    <CheckoutBtn currentUser={currentUser} products={cartProduct} />
    
  </section>
</div>


      </>) : (
        <div className="bg-white h-96 flex flex-col gap-2 items-center justify-center py-5 rounded-lg border border-gray-200 drop-shadow-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <p className="text-lg max-w-[600px] text-center text-gray-600 tracking-wide leading-6">
            Your cart is empty. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Repellendus libero ab nulla iure quibusdam
            obcaecati debitis minima explicabo quidem tenetur ad, voluptate
            iusto ratione natus. Maxime molestiae doloremque eaque nesciunt!
          </p>
          <Link
            to={"/products"}
            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-4 px-4 rounded-full uppercase text-sm font-semibold tracking-wide flex gap-2"
          >
            go to shopping <FaLongArrowAltRight className='mt-1' />
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart
