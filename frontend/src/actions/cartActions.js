import axios from 'axios'
import { CART_ADD_ITEM, LOAD_CART_ITEM } from "../constants/cartConstants";

export const addToCart = (slug, qty) => async (dispatch, getState) => {
  const {data} = await axios.get(`/api/article/${slug}`)

  dispatch({
    type:CART_ADD_ITEM,
    payload:{
      article:data.slug,
      name:data.name,
      image:data.image,
      price:data.price,
      countInStock:data.countInStock,
      qty
    }
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};

export const loadCart = (cartItems) => {
  return { type: LOAD_CART_ITEM, payload: cartItems }
}
