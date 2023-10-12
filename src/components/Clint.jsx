import React from 'react'
import '../style/Clint.css';
import { TiTick } from 'react-icons/ti';

const Clint = () => {
  return (
    <div className='Clint-component'>
        <div className='Clint-info'>
            <h4>For clients</h4>
            <h2>Find talent your way</h2>
            <p> Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.</p>
            <a href='/contact-us'>Contact Us</a>
        </div>
        <div className='Clint-container'>
          <img src ="https://demoapus1.com/freeio-new/wp-content/uploads/2022/09/h2.png" alt='clint-img' className='clint-img'/>
          <div className='Clint-overlay '>
              <h4><TiTick className='icon-overlay'/> The best for every budget</h4>
              <h4><TiTick className='icon-overlay'/> Quality work done quickly</h4>
              <h4><TiTick className='icon-overlay'/> Protected payments, every time</h4>
              <h4><TiTick className='icon-overlay'/> 24/7 support</h4>
          </div>
        </div>
    </div>
  )
}

export default Clint