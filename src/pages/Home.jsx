import React from 'react'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Clint from '../components/Clint'
import Category from '../components/Category'
import Header from '../components/Header'
import Choosen from '../components/Choosen'
import Learn from '../components/Learn'
import Footer from '../components/Footer'
import Membership from '../components/Membership'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <hr className='h-break'/>
        <Header/>
        <Choosen/>
        <Services/>
        <Clint/>
        <Category/>
        <Learn/>
        <Footer/>
    </div>
  )
}

export default Home