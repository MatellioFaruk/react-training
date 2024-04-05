import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Term() {
  const location = useLocation()

  console.log(location, "location")
  return (
    <>
      <Link to='/home'>Home</Link>
      <Link to='/privacy-policy'>Privacy policy</Link>
      <Link to='/term'>Term</Link>
      <div>Term</div>
    </>

  )
}
