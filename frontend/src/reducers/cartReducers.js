import {
  CART_ADD_ITEM,
  LOAD_CART_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,

  CART_SAVE_PAYMENT_METHOD,

  CART_CLEAR_ITEMS,

} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.article === item.article);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.article === existItem.article ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case LOAD_CART_ITEM:
      return {
        ...state,
        cartItems: action.payload,
      };


    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.article !== action.payload),
      };


    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };

    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
