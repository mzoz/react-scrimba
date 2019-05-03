import React from "react"

function Product(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <ul>
                <li>price: {props.price}</li>
                <li>description: {props.description}</li>
            </ul>
        </div>    
    )
}


export default Product