"use client"
import React, { useEffect } from 'react'

function Search({params}) {
  useEffect(()=>{
    console.log(params.Cname)
  },[])
  return (
    <div>Search</div>
  )
}

export default Search