import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function Term({ name, counter }) {
  const location = useLocation()

  console.log("term page")
  return (
    <>
      {name}
      {counter}
      <Link to='/home'>Home</Link>
      <Link to='/privacy-policy'>Privacy policy</Link>
      <Link to='/term'>Term</Link>
      <div>Term</div>
    </>

  )
}


export const MemoTerm = React.memo(Term)

