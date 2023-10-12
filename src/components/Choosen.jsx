import React from 'react'
import '../style/Choosen.css';
import { FaLaptop } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import { SiFreelancer } from 'react-icons/si';
import { BiSupport } from 'react-icons/bi';

const Choosen = () => {
    const chooseData =[
        {
            id:1,
            title:"Post a job",
            des:"It’s free and easy to post a job. Simply fill in a title, description"
        },
        {
            id:2,
            title:"Choose freelancers",
            des:"It’s free and easy to post a job. Simply fill in a title, description"
        },
        {
            id:3,
            title:"Pay safely",
            des:"It’s free and easy to post a job. Simply fill in a title, description"
        },
        {
            id:4,
            title:"We’re here to help",
            des:"It’s free and easy to post a job. Simply fill in a title, description"
        },
    ]
    const icons = [
        FaLaptop,
        SiFreelancer,
        MdPayment,
        BiSupport,
    ]
  return (
    <div className='Choosen-compnent'>
        <div className='Choosen-header'>
            <h2>Need something done?</h2>
            <p>Most viewed and all-time top-selling services</p>
            <div className='Choosen-contanier'>
                {chooseData.length ?chooseData.map((item,id)=>{
                    const Icons = icons[id];
                    return(
                        <div className='Choosen-info' key={item.id}>
                            <Icons className="choosen-icon"/>
                            <h3>{item.title}</h3>
                            <p>{item.des}.</p>
                        </div>
                    )
                }):"there is no data here"}
            </div>
        </div>
    </div>
  )
}

export default Choosen