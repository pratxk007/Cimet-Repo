import React from 'react'
import { Metadata } from 'next'

interface ParamsDataType {
  params: {
    productId: string
  }
}

// generateMetadata is used by Next.js to dynamically set the metadata for this page
export const generateMetadata = async ({ params }: ParamsDataType): Promise<Metadata> => {
  // You should await params in case it's coming from an async operation
  const productId = params?.productId

  const title = `iPhone ${productId}`

  return {
    title: `Product ${title}`,
  }
}

// Your page component to display product details
function ProductDetails({ params }: ParamsDataType) {
  function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
  }
  const random = getRandomInt(2)
  if (random == 1) {
    throw new Error('Error loading product');
  }
  return (
    <div>
      <h1>Details about product {params.productId}</h1>
    </div>
  )
}

export default ProductDetails
