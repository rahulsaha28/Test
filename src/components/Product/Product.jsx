import React from 'react'

export const Product = (props) => {
    const { name, image, price, description } = props.product
    return (
        <div className='col'>
            <div className="card">
                <img src={image} alt="" />
                <div className="card-body">
                    <h4 className='card-title'>{name}</h4>
                    <h6>{description}</h6>
                    <h5>{price}</h5>
                </div>
                <button className="btn btn-success ms-auto">Add Cart</button>
            </div>
        </div>
    )
}
