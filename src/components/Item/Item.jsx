import React from 'react';
import './Item.css';

export const Item = (props) => {
    const {title, des, img} = props.item;
    return (
        <div className="col-md-4">
            <img className='img-fluid img6x5 mb-2' src={img} alt="" />
            <h4>{title}</h4>
            <h5 className='text-start'>{des}</h5>
        </div>
    )
}
