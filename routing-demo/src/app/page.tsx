import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <>
    <div>Welcome Home!</div>
    <Link href='/blog'>Blog</Link>
    <Link href='/products'>Products</Link>
    </>
  )
}

export default Home