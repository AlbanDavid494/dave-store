import React, { useState, useEffect }  from 'react'
import { store } from '../../../lib/store'
import PaystackPop from '@paystack/inline-js'
import { config } from '../../../config'
import { Link } from 'react-router-dom'



const CheckoutBtn = ({products}) => {
  const {cartProduct, currentUser } = store()
//   const {firstName, setFirstName} = useState(currentUser.firstName)
// const {lastName, setLastName} = useState(currentUser.lastName)
// const {email, setEmail} = useState(currentUser.email)
// const [totalAmount, setTotalAmount] = useState({regular: 0})

// useEffect(() => {
//   const totals = cartProduct.reduce((sum, product) => {
//     sum.regular += product?.price * product?.quantity;
//     return sum;
//   }, {regular: 0})
//   setTotalAmount(totals)
// }, [cartProduct])


//  const publishableKey = 'pk_live_91f5321a627806e431fe8d5245a6a9ddfe42b661'

//  const paystack = new PaystackPop()

//  const handleCheckout = (e) => {
//   e.preventDefault()
//   console.log(currentUser)
//   paystack.newTransaction({
//     key:'pk_live_91f5321a627806e431fe8d5245a6a9ddfe42b661',

//   })
//  }
 
 
    return (
    <div className='mt-6'>
      {currentUser ? 
      (
      <Link to='/checkout'>
        <button
      type='submit' className='w-full rounded-md border border-transparent bg-gray-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-skyText focus:ring-offset-2 focus:ring-offset-gray-50 duration-200'>checkout</button>
      </Link>
      ) : (<button className='w-full text-base text-white text-center rounded-md border border-transparent bg-gray-500 px-4 py-3 cursor-not-allowed'>Checkout</button>)}
      {!currentUser && (
        <p className="mt-2 text-sm font-medium text-red-500 text-center">
        <Link to='/profile'>  Need to sign in to make checkout </Link>
        </p>
      )}
    </div>
  )
}

export default CheckoutBtn
