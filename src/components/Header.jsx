import React from 'react'
import '../style/Header.css';
import { BsSearch } from 'react-icons/bs';
import { RiShieldStarFill } from 'react-icons/ri';


const Header = () => {
  return (
    <div className='Header-component'>
        <div className='Header-container'>
            <img src='https://images.pexels.com/photos/5588217/pexels-photo-5588217.jpeg?auto=compress&cs=tinysrgb&w=600' alt='main-img' className='main-img1'/>
            <img src='https://images.pexels.com/photos/4240503/pexels-photo-4240503.jpeg?auto=compress&cs=tinysrgb&w=600' alt='main-img' className='main-img2'/>
        </div>
        <div className="Header-info">
            <div className="Header-text">
                <h2>Find the perfect freelance services for your business</h2>
                <p>Work with talented people at the most affordable price to get the most out of your time and cost</p>
                <div className="header-input">
                    <BsSearch className="search-input"/>
                    <input type='text' placeholder='What are you looking for?'/>
                    <a>choose category</a>
                    <button className='btn-search'>Search</button>
                </div>
                <div className="main-contant-info">
                    <div>
                        <h3>960M</h3>
                        <p> Total Freelancer </p>
                    </div>
                    <div>
                        <h3>960M</h3>
                        <p> Total Freelancer </p>
                    </div>
                    <div>
                        <h3>960M</h3>
                        <p> Total Freelancer </p>
                    </div>
                    <div>
                        <h3>960M</h3>
                        <p> Total Freelancer </p>
                    </div>
                </div>
            </div>
            <div className="Header-boxs">
                <div className='main-contant-box1'>
                    <RiShieldStarFill/>
                    <div>
                        <h4>proof of quality</h4>
                        <p>lorem ipsum dolar amet</p>
                    </div>
                </div>
                <div className='main-contant-box2'>
                <RiShieldStarFill/>
                    <div>
                        <h4>proof of quality</h4>
                        <p>lorem ipsum dolar amet</p>
                    </div>
                </div>
                <div className='main-contant-box3'>
                <RiShieldStarFill/>
                    <div>
                        <h4>proof of quality</h4>
                        <p>lorem ipsum dolar amet</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header