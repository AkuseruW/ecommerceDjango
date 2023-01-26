// import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
// import { addToCart } from '../actions/cartActions';
// import { useParams } from 'react-router-dom'

function CartPages() {
    // const articleSlug = useParams()
    const cartItems = useSelector(state => state.cart.cartItems)
    

    return(
        <div>
            {cartItems.map(item => (
                <div key={item.article}>
                    <img src={item.image} alt={item.name} />
                    <Link to={`/article/${item.article}`}>{item.name}</Link>
                    <div>Quantité: {item.qty}</div>
                    <div>Prix: {item.price} €</div>
                </div>
            ))}
        </div>
    )
}
export default CartPages
