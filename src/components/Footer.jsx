import React from 'react'
import '../style/Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='Footer-component'>
        <div className='Footer-container'>
            <div className='Footer-text'>
                <div>
                    <a href="/" className="Footer-link">Terms of Service</a>
                    <a href="/" className="Footer-link">Privacy Policy</a>
                    <a href="/" className="Footer-link">Site Map</a>
                </div>
                <div>
                    <p>Follow Us</p>
                    <a href="/" className="Footer-link"><BsFacebook/></a>
                    <a href="/" className="Footer-link"><AiFillLinkedin/></a>
                    <a href="/" className="Footer-link"><AiFillTwitterCircle/></a>
                </div>
            </div>
            <hr/>
            <div className='Footer-info'></div>
            <div className='Footer-rights'>
                <p>© Freeio. 2022 CreativeLayers. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
