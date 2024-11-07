import { notFound } from 'next/navigation'
import React from 'react'


interface reviewData{
    params:{
        productId: string,
        reviewId:string
    }
}
function ReviewDetail({params}: reviewData) {

    if(parseInt(params.reviewId) >1000){
        notFound();
    }
    return (
    <>
    <div>Review for {params.reviewId} for product {params.productId} </div>
    </>
  )
}

export default ReviewDetail