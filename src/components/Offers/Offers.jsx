import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.webp'

export const Offers = () => {
  return (
    <div className='Offers'>
        <div className='offers-left'>
<h1>Exclusive</h1>
<h1>Offers For You</h1>
<p>ONLY ON BEST SELLERS PRODUCT</p>
<button>Check Now</button>
        </div>
        <div className='offers-right'>
<img src={exclusive_image} alt="" className='exclusive_image'></img>
        </div>

    </div>
  )
}
