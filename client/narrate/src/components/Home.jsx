import React from 'react'
import Categories from './categories'
export default function Home() {
  return (
    <div className="h-screen text-mercuryWhite p-5 bg-gradient-to-tr from-black via-gray-950 to-gray-900">
        {/* shadow-magicBlue/10 shadow-xl */}
        <div className="text-mercuryWhite  rounded-lg p-6 h-full">
          <h1 className="font-bold text-xl">Categories</h1>
          <Categories />
        </div>
      </div>
  )
}
