import React from "react"

function Product(props) {
    return (
        <div>
            <h3>{props.product.name}</h3>
            <ul>
                <li>price: {props.product.price}</li>
                <li>description: {props.product.description}</li>
            </ul>
        </div>    
    )
}


export default Product