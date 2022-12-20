import React from 'react'
import { Link } from 'react-router-dom'

function AreaItem({strArea}) {
  return (
    <Link to={`/areas/${strArea}`} className='btn-large grey darken-1'>{strArea}</Link>
  )
}

export default AreaItem