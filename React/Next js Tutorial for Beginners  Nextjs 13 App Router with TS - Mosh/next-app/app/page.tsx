import Link from 'next/link'
import React from 'react'
import ProductCard from './components/ProductCard'

function page() {
  return (
    <div>
      <main>
        <h1>Hello World</h1>
        <Link href='/users'>Go to UserPage</Link>
        <ProductCard />
      </main>
    </div>
  )
}

export default page