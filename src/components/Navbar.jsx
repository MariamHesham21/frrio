import React, { useRef, useState } from 'react'
import '../style/Navbar.css';
import { BsSearch } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi';
import {BiCategory} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    const [ mobail, setMobail] = useState(true)
    const showMenu = () =>{
        setMobail(! mobail)
    }
  return (
    <div className='Navbar-component'>
        <div className='Navbar-container'>
            <img src='https://demoapus1.com/freeio-new/wp-content/uploads/2022/09/logo-white2.png' alt='logo' className='logo-img'/>
            <nav className={mobail?'Navbar-info':"sides-menu"}>
                <div className="dropdown">
                    <a className="btn cate-icon" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><BiCategory/> Categories</a>
                    <ul className="dropdown-menu bg-dark">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <a href="/" id="Home" className='btn'>Home</a>
                <a href="/projects-list" id="Browse-Jobs" className='btn'>Browse Jobs</a>
                <div className="dropdown">
                    <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                    <ul className="dropdown-menu bg-dark">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu bg-dark">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className='Navbar-form'>
            <BsSearch className="search-icon"/>
            <a href="#" id='login'>Login</a>
            <a href="#" id='sign-up'>Sign Up</a>
            <button onClick={showMenu} className='btn'>{mobail ? <HiMenuAlt3 className={"menu-icon"} />: <AiOutlineClose/>}</button>
        </div>
    </div>
  )
}

export default Navbar