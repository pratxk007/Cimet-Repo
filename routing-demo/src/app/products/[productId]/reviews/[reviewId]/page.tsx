'use client'
import { notFound } from 'next/navigation'
import React from 'react'


interface reviewData{
    params:{
        productId: string,
        reviewId:string
    }
}
function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}

function ReviewDetail({params}: reviewData) {
    const random = getRandomInt(2)

    // if(random == 1){
    //     throw new Error('Error loading review');
    // }
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