import React from 'react'
import "./Card.css"
import { Link } from "react-router-dom"

function Card({ product }) {
    // console.log(product);
    return (
        <div className='card'>
            <Link state={product} style={{ color: "red" }} to={`product/${product.id}`}>
                <h1>{product.productName}</h1>
            </Link>
            <h1>{product.productPrice}$</h1>
            <img src={product.productImage} width="300px" alt="" />
        </div>
    )
}

export default Card