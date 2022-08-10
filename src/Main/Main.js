import React from 'react'
import "./Main.css"
import Card from "../Card/Card"


function Main({ products }) {
    console.log(products);
    return (
        <div >
            {products.map(product => (
                <Card key={product.id} product={product} />
            ))
            }
        </div>
    )
}

export default Main