import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/cart/cart_page.scss'

function CartPages() {
    const cartItems = useSelector(state => state.cart.cartItems)

    return (
        <div className='container cart'>
            <div className='cart-items'>

                <div className='left-side'>

                    <div className='table-head'>
                        <h4>Produit</h4>
                        <h4>Prix</h4>
                        <h4>Quantité</h4>
                    </div>

                    {cartItems.map(item => (
                        <div className='cart-item' key={item.article}>
                            <div>
                                <div>
                                    <img src={item.image} alt={item.name} />

                                    <div>
                                        <h4><Link to={`/article/${item.article}`}>{item.name}</Link></h4>
                                    </div>

                                    <h4>{item.price}€</h4>

                                    <div>
                                        <span>{item.qty}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default CartPages
