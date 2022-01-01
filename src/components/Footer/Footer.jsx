import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <div className=''>
            <div className='d-flex justify-content-center'>
                <img className='col-md-3 me-4' src="./img/app.png" alt="" />
                <div className='col-md-3 mt-5 ms-5'>
                    <h5 className='text-center'>App</h5>
                    <h2>App is avaiable</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt veniam consequatur dicta repudiandae placeat vero molestiae consequuntur quos architecto et!</p>
                    <div className="d-flex flex-row">
                        <img className='img-h-2 me-2' src="./img/app1.png" alt="" />
                        <img className='img-h-2' src="./img/app2.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center mt-3'>
                <h4>Contact us</h4>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    )
}
