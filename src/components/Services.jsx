import React, { useEffect, useState } from 'react'
import '../style/Services.css';

const Services = () => {
    const ServicesData = [
        {
          id:1,
          imgUrl:"https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service5-600x450.jpg",
          category:"design & creative",
          title:"Developers drop the framework folder into a new parent",
          rate:4.5,
          raviews:2,
          iconUrl:"",
          name:"john powell",
          price:128
        },
        {
          id:2,
          imgUrl:"https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service8-600x450.jpg",
          category:"development & it",
          title:"Developers drop the framework folder into a new parent",
          rate:4.5,
          raviews:2,
          iconUrl:"",
          name:"john powell",
          price:128
        },
        {
          id:3,
          imgUrl:"https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service13-600x450.jpg",
          category:"design & creative",
          title:"Developers drop the framework folder into a new parent",
          rate:4.5,
          raviews:2,
          iconUrl:"",
          name:"john powell",
          price:128
        },
        {
          id:4,
          imgUrl:"https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service14-600x450.jpg",
          category:"digital marketing",
          title:"Developers drop the framework folder into a new parent",
          rate:4.5,
          raviews:2,
          iconUrl:"",
          name:"john powell",
          price:128
        },
        {
          id:5,
          imgUrl:"https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service2-600x450.jpg",
          category:"development & it",
          title:"Developers drop the framework folder into a new parent",
          rate:4.5,
          raviews:2,
          iconUrl:"",
          name:"john powell",
          price:128
        },
        {
            id:6,
            imgUrl:"https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service11-600x450.jpg",
            category:"design & creative",
            title:"Developers drop the framework folder into a new parent",
            rate:4.5,
            raviews:2,
            iconUrl:"",
            name:"john powell",
            price:128
        },
    ]
    const[data , setData] = useState(ServicesData)
    const[datass, setDatass] = useState([])
    const[btnState , setBtnStste] = useState(true)
    let toggleClass = btnState ? "active": null
    //   const cateItem = [...new Set(data.map((item)=>item.category))]
    //   console.log(cateItem)

    // useEffect(() => {
    //     setDatass(data)
    //   }, []);
    const Filter = (cate)=>{
         if( cate === 'All'){
            setDatass(data)
            // setBtnStste(btnState => !btnState)
        }else{
            const newArr= data.filter((item)=>item.category===cate)
            setDatass(newArr)
          }
    }

  return (
    <div className='Services-component'>
        <h2>Popular Services</h2>
        <p>Most viewed and all-time top-selling services</p>
        <div className='Services-filter'>
            <button className={`ServFilter-btn ${toggleClass}`} onClick={()=>Filter("All")}>All Services</button>
            <button className="ServFilter-btn" onClick={()=>Filter("development & it")}>development & it</button>
            <button className="ServFilter-btn" onClick={()=>Filter("digital marketing")}>digital marketing</button>
            <button className="ServFilter-btn" onClick={()=>Filter("design & creative")}>design & creative</button>
        </div>
        <div className='row Services-container'>
            {data.length ?datass.length? datass.map((item)=>{
                return(
                    <div className='col-lg-3 col-md-4 col-12 mx-md-1 mx-0 my-2  Services-card' key={item.id}>
                        <img src={item.imgUrl} alt='ServCard-img'className='ServCard-img'/>
                        <div className='ServCard-info'>
                            <p>{item.category}</p>
                            <h4>{item.title}</h4>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                )
            }):setDatass(data):" There isn't data here"}
        </div>
    </div>
  )
}

export default Services