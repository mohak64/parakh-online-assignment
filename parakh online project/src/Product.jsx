import React from 'react'

const Product = () => {
    return (
        <div className='p-3 border border-primary '>
            <h1>name</h1>
            <h2>price</h2>
            <div className='d-flex flex-column mt-4 gap-3'>
                <button type="button" class="btn btn-primary">Add to cart</button>
                <button type="button" class="btn btn-primary">Remove from cart</button>
            </div>
        </div>
    )
}

export default Product
