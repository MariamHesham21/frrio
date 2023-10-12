import React from 'react'
import '../style/Learn.css';

const Learn = () => {
  return (
    <div className='Learn-component'>
        <h3>People Love To Learn With Freeio</h3>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <div className='Learn-container row w-100'>
            <div className='col-md-3 col-6'>
                <h4>4.9/5</h4>
                <p>Clients rate professionals on Freeio</p>
            </div>
            <div className='col-md-3 col-6'>
                <h4>Award winner</h4>
                <p>Clients rate professionals on Freeio</p>
            </div>
            <div className='col-md-3 col-12'>
                <h4>90%</h4>
                <p>90% of customers are satisfied through to see their freelancers</p>
            </div>
            <div className='col-md-3 col-12 learn-card'>
                <p>Good Job</p>
                <h5>“Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium”</h5>
                <hr/>
                <p> jane cooper</p>
                <p> Marketing Manager</p>
            </div>
        </div>
    </div>
  )
}

export default Learn 