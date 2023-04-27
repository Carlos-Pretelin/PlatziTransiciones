import React from 'react'

import "./Menu.scss"

const Menu = () => {
  return (
    <div >

        <ul className='Menu'>
            <li><a href="">Men</a></li>
            <li><a href="">Women</a>
                <ul>
                    <li><a href="">Shirts</a></li>
                    <li><a href="">Pants</a></li>
                    <li><a href="">Shorts</a>
                        <ul>
                            <li><a href="">Type1</a></li>
                            <li><a href="">Type2</a></li>
                            <li><a href="">Type3</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="">Children</a></li>


        </ul>
    </div>
  )
}

export default Menu