import { CART_ADD_ITEM, LOAD_CART_ITEM } from "../constants/cartConstants";


export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(x => x.article === item.article)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.article === existItem.article ? item : x
                    )
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case LOAD_CART_ITEM:
            return {
                ...state,
                cartItems: action.payload
            }
        
        default:
            return state
    }
}