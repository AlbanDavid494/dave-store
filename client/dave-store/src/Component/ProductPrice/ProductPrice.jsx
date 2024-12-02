import React from 'react'

const ProductPrice = ({price}) => {
    const productPrice = new Number(price).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    })
  return (
    <div>
      {productPrice}
    </div>
  )
}

export default ProductPrice
