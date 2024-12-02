import React, {useState, useEffect} from 'react'
import toast from 'react-hot-toast'
import { FaMinus, FaPlus } from 'react-icons/fa'
import  {twMerge} from 'tailwind-merge'
import { store } from '../../../../lib/store'

const AddToCart = ({title, product, className, showPrice=true}) => {

  const {addToCart, cartProduct, decreaseQuantity} = store()

const [existingProduct, setExistingProduct] = useState(null)

useEffect(() => {
  const availableItem = cartProduct.find(
    (item) => item?.id === product?.id
  );
  setExistingProduct(availableItem || null);
  }, [product, cartProduct]);


const handleAddToCart = () => {
  if (product) {
    addToCart(product);
    toast.success(`${product?.title.substring(0, 10)} added successfully!`);
  } else {
    toast.error("Product is undefined!");
  }
};

const handleDeleteProduct = () => {
  if (existingProduct) {
    if (existingProduct?.quantity > 1) {
      decreaseQuantity(existingProduct?.id);
      toast.success(
        `${product?.title.substring(0, 10)} decreased successfully`
      );
    } else {
      toast.error("You can not decrease less than 1");
    }
  } else {
  }
};

const newClassName = twMerge('bg-gradient-to-r from-primary font-semibold text-xs px-4 to-secondary hover:scale-105 duration-200 text-white py-3 rounded-full uppercase', className)

// const getRegularPrice = () => {
//   if(existingProduct){
//     if(product){
//       return product?.price * existingProduct?.quantity
//     }
//   }else{
//     return product?.price
//   }
// }


  return (
    <section>


{existingProduct ? ( 
        <div className="flex self-center items-center justify-center gap-2">
          <button
            onClick={handleDeleteProduct}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-primary rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
      {existingProduct?.quantity}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:hover:border-primary rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >     <FaPlus />
          </button>
        </div>
       ) : ( 
        <button
        className={newClassName}
        onClick={handleAddToCart}
        >
        
          {title ? title : "Add to cart"}
        </button>
       )} 
      
    </section>
  )
}

export default AddToCart
