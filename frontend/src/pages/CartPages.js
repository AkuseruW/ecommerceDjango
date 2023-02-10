import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineXMark } from "react-icons/hi2";
import '../styles/cart/cart_page.scss'
import { addToCart, removeFromCart } from '../actions/cartActions';

function CartPages() {
    const cartItems = useSelector(state => state.cart.cartItems)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const removeFromCartHandler = (slug) => {
        console.log(slug);
        dispatch(removeFromCart(slug))
    }

    const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)

    const checkoutHandler = () =>{
        navigate('/login?redirect=shipping')
    }

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
                            <div className="article-image">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div className='aticle-content'>
                                <div>
                                    <h4><Link to={`/article/${item.article}`}>{item.name}</Link></h4>
                                </div>

                                <div>
                                    <h4>{item.price}€</h4>
                                </div>

                                <div>
                                    <select value={item.qty} onChange={(e) => dispatch(addToCart(item.article, Number(e.target.value)))}>
                                        {[...Array(item.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <HiOutlineXMark className='icon' size={20} onClick={()=> removeFromCartHandler(item.article)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="right-slide">
                    <h2>Total</h2>
                    <p>Sub-total: <span>{total} &euro;</span></p>
                    <p>Delivery:</p>
                    <hr />
                    <p>Total (TVA include): <span></span></p>
                    <button type='btn' onClick={checkoutHandler} disabled={cartItems.lenght === 0}>PROCEED TO CHECKOUT</button>
                </div>

            </div>
        </div>

    )
}
export default CartPages
