import React from 'react'
import CategoryList from './_Components/CategoryList'

function layout({ children }) {
  return (
    <div className='grid grid-cols-4'>
      <div className='hidden md:block'>
        {/* categoty */}
        <CategoryList />
      </div>
      <div className='col-span-4 md:col-span-3'>

        {children}
      </div>

    </div>
  )
}

export default layout