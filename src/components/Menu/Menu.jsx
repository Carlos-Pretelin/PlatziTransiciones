import React from 'react'

const Menu = () => {
  return (
    <div className='Menu'>

        <ul>
            <li>Men</li>
            <li><a href="">Women</a>
                <ul>
                    <li>Shirts</li>
                    <li>Pants</li>
                    <li><a href="">Shorts</a>
                        <ul>
                            <li>Type1</li>
                            <li>Type2</li>
                            <li>Type3</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Children</li>


        </ul>
    </div>
  )
}

export default Menu