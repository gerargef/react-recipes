import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='cyan darken-3 '>
    <div className="nav-wrapper ">
      <Link to="/" className="brand-logo center ">React Recipes</Link>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="https://github.com/gerargef/react-recipes" className=' white-text'>Repo</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header