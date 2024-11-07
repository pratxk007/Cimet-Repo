import { Metadata } from 'next'
import React from 'react'

interface paramsDataType {
  params: {
    productId: string
  }

}


export const generateMetadata = async ({ params }: paramsDataType):Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`)
    }, 100);
  })

  return {
    title: `Product ${title} `,

  }
}

function ProductDetails({ params }: paramsDataType) {
  return (
    <>
      <div>Details about product {params.productId}</div>
    </>
  )
}

export default ProductDetails