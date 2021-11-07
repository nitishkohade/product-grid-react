import { getCartItems } from "../../services/cart-service";
import { CART_ACTION_TYPES } from "./cart.types";

export const cartItems = () => {
    return async (dispatch) => {
        try{
            const {data: {products}} = await getCartItems()
            dispatch({
                type: CART_ACTION_TYPES.GET_CART,
                payload: products
            })
        } catch(error) {
            dispatch({
                type: CART_ACTION_TYPES.ERROR,
                payload: "cart page is not responding"
            })
        }
    }
}

export const filterCartItems = (filterValue) => ({
    type: CART_ACTION_TYPES.FILTER_CART,
    payload: filterValue
})