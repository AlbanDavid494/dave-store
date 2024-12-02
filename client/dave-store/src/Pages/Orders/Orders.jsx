import React, {useState, useEffect} from 'react'
import Container from '../../Component/Container/Container'
import { store } from '../../../lib/store'
import { doc, getDoc } from 'firebase/firestore'
import Loading from '../../Component/Loading/Loading'
import { Link } from 'react-router-dom'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import ProductPrice from '../../Component/ProductPrice/ProductPrice'
import {FaLongArrowAltRight } from "react-icons/fa";

const Orders = () => {
  const [totalAmount, setTotalAmount] = useState({regular: 12})
const {currentUser, cartProduct} = store()
const [orders, setOrders] = useState([])
const [isLoading, setIsLoading] = useState(false)


const shippingAmount = 25;
const taxAmount = 15;

useEffect(() => {
  const getData = async () => {
    setIsLoading(true)
    try {
      const docRef = doc(db, 'order', currentUser?.email)
      const docSnap = await getDoc(docRef)
if(docSnap.exists()){
const orderData = docSnap?.data()?.orders;
setOrders(orderData)

}else{
  console.log("No orders yet! ")
}

    } catch (error) {
      console.log("Data fetching error", error)
    } finally{
      setIsLoading(false)
    }
  }
  getData()
},[])



  return (
    <Container>
      
{
  isLoading ? <Loading /> : cartProduct.length > 0 ? 
  <div className='max-w-5xl mx-auto'>
    <h2 className='text-2xl font-bold mt-2'>Customer order detais</h2>
    <p className='text-gray-600 mt-2'>Customer Name {" "} <span>{currentUser?.firstName} {" "} {currentUser.lastName}</span>
    </p>
    <p className="text-gray-600">
            Total Orders{" "}
            <span className="text-black font-semibold">{cartProduct?.length}</span>
          </p>
          <p className="text-sm max-w-[600px] tracking-wide text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            porro, nemo quisquam explicabo, mollitia inventore nobis id maiores
            odio incidunt quidem rerum delectus quaerat similique voluptates
            dolores perferendis numquam quae. </p>
            <div className='flex flex-col gap-3'>
              <div className='space-y-6 divide-y divide-gray-900/10'>
              {cartProduct.map((order) => {
                
                return(
                  
                    <>
      
                        <div className="flex flex-col gap-2 bg-[#f4f4f480] p-5 border border-gray-200">
                          <p className="text-base font-semibold">
                            Your order{" "}                            
                            has shipped and will be with you soon.
                          </p>
                          <div className="flex flex-col gap-1">
                            <p className="text-gray-600">
                              Order Item Count:{" "}
                              <span className="text-black font-medium">
                                {order?.orderItems?.length}
                              </span>
                            </p>
                            <p className="text-gray-600">
                              Payment Status:{" "}
                              <span className="text-black font-medium">
                                Paid by Paystack
                              </span>
                            </p>
                            <p className="text-gray-600">
                              Order Amount:{" "}
                              <span className="text-black font-medium">
                                <ProductPrice price={totalAmount.regular + shippingAmount + taxAmount} />
                              </span>
                            </p>
                          </div>
                          {order?.orderItems?.map((item) => (
                            <div
                              key={item?.id}
                              className="flex space-x-6 border-b border-gray-200 py-3"
                            >
                              <Link
                                to={`/products/${item?.id}`}
                                className="h-20 w-20 flex-none sm:h-40 sm:w-40 rounded-lg bg-gray-100 border border-gray-300 hover:border-skyText overflow-hidden"
                              >
                                <img
                                  src={item?.image}
                                  alt="productImg"
                                  className="h-full w-full object-cover object-center hover:scale-110 duration-300"
                                />
                              </Link>
                              <div className="flex flex-auto flex-col">
                                <div>
                                  <Link
                                    to={`/products/${item?.id}`}
                                    className="font-medium text-gray-900"
                                  >
                                    {item?.title}
                                  </Link>
                                  <p className="mt-2 text-sm text-gray-900">
                                    {item?.description}
                                  </p>
                                </div>

                                <div className="mt-6 flex flex-1 items-end">
                                  <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                                    <div className="flex">
                                      <dt className="font-medium text-gray-900">
                                        Quantity
                                      </dt>
                                      <dd className="ml-2 text-gray-700">
                                        {item?.quantity}
                                      </dd>
                                    </div>
                                    <div className="flex pl-4 sm:pl-6">
                                      <dt className="text-black font-bold">
                                        Price
                                      </dt>
                                      <dd className="ml-2 text-gray-700">
                                        <span className="text-black font-bold">
                                          <FormattedPrice
                                            price={item?.price}
                                          />
                                        </span>
                                      </dd>
                                    </div>
                                    <div className="flex pl-4 sm:pl-6">
                                      <dt className="font-medium text-gray-900">
                                        SubTotal
                                      </dt>
                                      <dd className="ml-2 text-gray-700">
                                        <span className="text-black font-bold">
                                          <ProductPrice
                                            amount={
                                              item?.price *
                                              item?.quantity
                                            }
                                          />
                                        </span>
                                      </dd>
                                    </div>
                                  </dl>
                                </div>

                              </div>
                            </div>
                          ))}
                        </div>
                     
                    </>
                  )}
               
                )
              }
              </div>
            </div>
    </div> : 
  <div className="flex flex-col items-center">
  <p className="text-2xl font-semibold p-3">No orders yet</p>
  <p>You did not create any purchase from us</p>
 
  <Link
            to={"/products"}
            className="mt-2 bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-3 px-3 rounded-full uppercase text-sm font-semibold tracking-wide flex gap-2"
          >
            go to shopping <FaLongArrowAltRight className='mt-1' />
          </Link>
</div>
}

    </Container>
  )
}

export default Orders
