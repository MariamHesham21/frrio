import React from 'react'
import Navbar from '../components/Navbar'
import '../style/ProjectList.css';
import { FaLocationDot } from 'react-icons/fa6';
import { BsCalendarDateFill } from 'react-icons/bs';
import { BiPaperPlane } from 'react-icons/bi';
import Footer from '../components/Footer';

const ProjectList = () => {
    const projects = [
        {
            id:1,
            imgUrl:"https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/employer4.jpg",
            title:"Developer for ACG iOS apps and Website",
            des:"APInter",
            city:"Miami",
            date:"Posted 11 months ago",
            Proposal:"2 Proposals"
        },
        {
            id:2,
            imgUrl:"https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/employer1.jpg",
            title:"English Content Writer for College",
            des:"MediaAZ",
            city:"Los Angeles",
            date:"Posted 11 months ago",
            Proposal:"2 Proposals"
        },
        {
            id:3,
            imgUrl:"https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/employer8.png",
            title:"Developer to framework for web agency",
            des:"Redesign",
            city:" New York",
            date:"Posted 11 months ago",
            Proposal:"1 Proposals"
        },
        {
            id:4,
            imgUrl:"https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/employer4.jpg",
            title:"Developer for ACG iOS apps and Website",
            des:"APInter",
            city:"Miami",
            date:"Posted 11 months ago",
            Proposal:"2 Proposals"
        },
        {
            id:5,
            imgUrl:"https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/employer1.jpg",
            title:"English Content Writer for College",
            des:"MediaAZ",
            city:"Los Angeles",
            date:"Posted 11 months ago",
            Proposal:"2 Proposals"
        },
    ]
  return (
    <div>
        <Navbar/>
        <div className='ProjectList-component'>
            <div className='ProjectList-info'>
                <h3>Projects List</h3>
                <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
                <div className='ProjectList-input'>
                    <input type="text" placeholder='project title,keywords'/>
                    <button>Search</button>
                </div>
            </div>
            <div className='ProjectList-container'>
                <div className='ProjectList-header'>
                    <p>Showing all {projects.length} results</p>
                    <div className="dropdown drop-btn">
                        <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sort By(Default)</a>
                        <ul className="dropdown-menu bg-dark">
                            <li><a className="dropdown-item text-light" href="#">Newest</a></li>
                            <li><a className="dropdown-item text-light" href="#">Oldest</a></li>
                            <li><a className="dropdown-item text-light" href="#">Random</a></li>
                        </ul>
                </div>
                </div>
                <div className="row ProjectList-contant w-100">
                    {projects.length? projects.map((item)=>{
                        return(
                            <div className="col-md-6 project-card">
                                <img src={item.imgUrl} alt="project-img" className="project-img"/>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.des}</p>
                                    <div className="project-icons">
                                        <p><FaLocationDot/> {item.city}</p>
                                        <p><BsCalendarDateFill/> {item.date}</p>
                                        <p><BiPaperPlane/> {item.Proposal}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }):"there is no data"}
                    {/* <div className="col-md-6">

                    </div> */}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ProjectList