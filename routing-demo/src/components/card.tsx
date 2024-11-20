import React, { Children } from 'react'

function Card({children}:{
    children:React.ReactNode
}) {
  return (
    <div className='p-[100px] m-[10px]
    shadow-lg
    border border-black
    flex
    justify-center
    items-center'>{children}</div>
  )
}

export default Card