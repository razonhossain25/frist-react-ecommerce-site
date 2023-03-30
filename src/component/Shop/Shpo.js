import React, { useEffect, useState } from 'react';
import Prodact from '../Prodact/Prodact';
import './Shop.css'


const Shop = () => {
    const [prodact, setProdact]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProdact(data))
    },[]);
    return (
        <div className="shop_container">
            <div className="prodact-container">
            {prodact.map(prodact => <Prodact prodact={prodact} key={prodact.id}></Prodact>)}
            </div>
            <div className="cart-container">
                <p>cart</p>
            </div>
        </div>
    );
};

export default Shop;