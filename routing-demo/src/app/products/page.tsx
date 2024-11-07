import Link from 'next/link'
import React from 'react'

function ProductList() {
  const productId = 100
  return (
    <>
      <Link href='/'>Home</Link>
      <div>ProductList</div>
      <div><Link href='products/1'>Product 1</Link></div>
      <div><Link href='products/2'>Product 2</Link></div>
      <div><Link href='products/3'>Product 3</Link></div>
      <div><Link href={`products/${productId}`}>Product {productId}</Link></div>
    </>
  )
}

export default ProductList