import axios from "axios";

export const getCartItems = async () => {
        return await axios.get(`https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list`)
} 

export const getCartItemById = async (id) => {
        return await axios.get(`https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/${id}/detail`)
}