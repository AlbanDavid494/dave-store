import React, {useState} from 'react'
import Container from '../../../Component/Container/Container'
import Label from '../../../Component/Label/Label'
import PaystackPop from '@paystack/inline-js'

const Checkout = () => {
    
    const {email, setEmail} = useState('')
const {amount, setAmount} = useState('')
const {firstName, setFirstName} = useState('')
const {lastName, setLastName} = useState('')

// const handleFirstName = (e) => {
//    setFirstName(e.target.value)
// }

// const handleLastName = (e) => {
//     setLastName(e.target.value)
// }

// const handleEmail = (e) => {
//     setEmail(e.target.value)
// }

// const handleAmount = (e) => {
//     setAmount(e.target.value)
// }

const paywithpaystack = (e) => {
    e.preventDefault()

    const paystack = new PaystackPop()
    paystack.newTransaction({
        key:'pk_live_91f5321a627806e431fe8d5245a6a9ddfe42b661',
        email: 'albandavid499@email.com',
  amount: 4000000.00,
  onSuccess: (transaction) => {
    let message = `Payment Complete! Reference ${transaction.reference}`
    alert(message)
  },
  onCancel(){
    alert("You have cancelled the transaction")
  }
            })
}

  return (
    <Container>
    
    <form onSubmit={paywithpaystack} className='max-w-5xl mx-auto pt-10 rounded-md px-10 lg:p-10 text-white bg-gray-950' action="">
        <div className='border-b border-b-white/10 pb-5'>
          <h2 className='text-lg font-semibold uppercase leading-7'>pay with paystack</h2>

<p className='mt-1 text-sm leading-6 text-gray-400'>You need to provide required information to make payment</p>

        </div>

<div className='border-b border-b-white/10 pb-5'>
<div className='mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6'>

  <div className='sm:col-span-3'>
    <Label title='First name'  htmlFor='firstName' />
    <input type="text" value={firstName}
    name='firstName' className='block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-primary sm:text-sm sm:leading-6 mt-2'/>
  </div>
  <div className='sm:col-span-3'>
    <Label title='Last name' htmlFor='lastName' />
    <input type="text" value={lastName}
      name='lastName' className='block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-primary sm:text-sm sm:leading-6 mt-2'/>
  </div>
  <div className='sm:col-span-4'>
    <Label title='Email' htmlFor='email' />
    <input type="email"  value={email}
      name='email' className='block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-primary sm:text-sm sm:leading-6 mt-2'/>
  </div>

  <div className='sm:col-span-4'>
    <Label title='Amount' htmlFor='amount' />
    <input type="text" value={amount} placeholder='$' name='amount' className='block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-primary sm:text-sm sm:leading-6 mt-2'/>
  </div>

  {/* <div className='col-span-full'>
<div className='mt-2 flex items-center gap-x-3'>

<div className='flex-1'>

  <Label title='Cover photo' />
  <div className='mt-2 justify-center rounded-lg border border-dashed border-white/25 px-6 py-4'>

<div className="flex flex-col items-center text-center">

<div className='w-20 h-20 border border-gray-600 rounded-full p-1'>
  {
    avatar?.url ? (<img src={avatar?.url} alt='userImage' className="w-full h-full rounded-full object-cover" />) : (<MdPhotoLibrary className='mx-auto h-full w-full text-gray-500' />)
  }
  
</div>
<div className='mt-4 flex items-center mb-1 text-sm leading-6 text-gray-400'>
  <label htmlFor='file-upload'>
  <span className='relative cursor-pointer rounded-md px-2 py-1 bg-gray-900 font-semibold text-gray-200 hover:bg-gray-800'>Upload a file</span>
  <input type='file' name='file-upload' id='file-upload' className='sr-only' onChange={handleAvatar} />
  </label>
  <p className="pl-1">or drag and drop</p>
</div>
<p className='text-xs leading-5 text-gray-400'> PNG, JPG, GIF up to 10MB</p>
</div>

  </div>
</div>

</div>
  </div> */}

</div>
</div>

<div className='flex justify-center'>
<button type='submit'  className='mt-5 w-[300px] py-2 uppercase text-base font-bold tracking-wide text-gray-300 rounded-md hover:text-white bg-indigo-600 duration-200'>Pay now</button>
</div>

      </form>
  
    </Container>
  )
}

export default Checkout
