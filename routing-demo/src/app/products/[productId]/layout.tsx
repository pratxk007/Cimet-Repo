import React from 'react'


interface childrenDataTypes{
    children: React.ReactNode
}

function ProductDetailsLayout({children}:childrenDataTypes) {
  return (
    <>
    {children}
    <div>Featured Products</div>
    </>
  )
}

export default ProductDetailsLayout  