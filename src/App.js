/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from "react"
import productsData from "./vschoolProducts"
import Product from "./Product"

function App() {
    const productsComponents = productsData.map(product => 
        <Product key={product.id} product={product} />
        // <div key={product.id}>
        //     <h3>{product.name}</h3>
        //     <ul>
        //         <li>price: {product.price}</li>
        //         <li>description: {product.description}</li>
        //     </ul>
        // </div>    
    ) 
  return (
    <div>
        {productsComponents}
    </div>
  )
}

export default App