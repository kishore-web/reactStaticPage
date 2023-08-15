import React from 'react'

const Header = () => {
  return (
    <div className='header-bar'>
      <div>
        <img src="../src/assets/brand_logo.png" alt="Brand Logo" />
      </div>
     <ul className='menu-list'>
      <li>MENU</li>
      <li>LOCATION</li>
      <li>ABOUT</li>
      <li>CONTACT</li>
     </ul>
    <div>
      <button>LOGIN</button>
    </div>




    </div>
  )
}

export default Header