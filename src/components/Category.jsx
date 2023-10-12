import React from 'react'
import '../style/Category.css';
import ReactCardSlider from "react-card-slider-component";

const Category = () => {
    const slides = [
        {
          image: "https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/c1.jpg",
          title: "development & it",
          description: "8 Service",
          clickEvent: "sliderClick"
        },
        {
          image: "https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/c2.jpg",
          title: "design & creative",
          description: "8 Service",
          clickEvent: "sliderClick"
        },
        {
          image: "https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/c3.jpg",
          title: "digital marketing",
          description: "1 Service",
          clickEvent: "sliderClick"
        },
        {
          image: "https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/c4.jpg",
          title: "writing & translation",
          description: "1 Service",
          clickEvent: "sliderClick"
        },
        {
            image: "https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/c1.jpg",
            title: "development & it",
            description: "8 Service",
            clickEvent: "sliderClick"
        },
        {
        image: "https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/c2.jpg",
        title: "design & creative",
        description: "8 Service",
        clickEvent: "sliderClick"
        },
        {
        image: "https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/c3.jpg",
        title: "digital marketing",
        description: "1 Service",
        clickEvent: "sliderClick"
        },
        {
        image: "https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/c4.jpg",
        title: "writing & translation",
        description: "1 Service",
        clickEvent: "sliderClick"
        },
      ];

      return (
        <div className='Category-component'>
            <h2>Browse talent by category</h2>
            <p>Get some Inspirations from 1800+ skills</p>
            <a href='/Category'>Category</a>
            <div className='CardSliders'>
                <ReactCardSlider slides={slides}/>
            </div>
        </div>
      );
}

export default Category

