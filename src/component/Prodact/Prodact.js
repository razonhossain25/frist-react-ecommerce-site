import React from 'react';
import "./Prodact.css"
const Prodact = (props) => {
    const {img,name,seller,ratings,price}=props.prodact;
    return (
        <div className='produact'>
            <img src={img} alt="" />
            <div className="product-info">
                <h2>{name}</h2>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Star</p>
            </div>
            <button>Add to Cart</button>
        </div>
    );
};

export default Prodact;