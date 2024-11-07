import React from 'react'

interface paramsDataType{
    params:{
        productId: string
    }
    
}

function ProductDetails({params}: paramsDataType) {
  return (
    <>
    <div>Details about product {params.productId}</div>
    </>
  )
}

export default ProductDetails