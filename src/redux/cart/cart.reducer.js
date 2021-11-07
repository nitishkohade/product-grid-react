import { CART_ACTION_TYPES } from "./cart.types"

const initial_state = {
    items: [],
    filteredItems: [],
    error: null
}

const userReducer = (state = initial_state, action) => {
    
    switch(action.type) {
        case CART_ACTION_TYPES.GET_CART:
           return {
               ...state,
               items: action.payload,
               filteredItems: action.payload
           }
        
        case CART_ACTION_TYPES.FILTER_CART:

            let items = [...state.items]
            const filterValue = action.payload.toString().toUpperCase()
            let filteredItems = items.filter(item => {
                const each = Object.values(item)
                let exist = false
                const len = each.length
                for(let i=0;i<len - 1;i++) {
                    if(each[i].toString().toUpperCase().indexOf(filterValue) >= 0) {
                        exist = true
                        break;
                    }
                }
                return exist
            })
            if(!filterValue) {
                filteredItems = items
            }
            return {
                ...state,
                filteredItems
            }
        case CART_ACTION_TYPES.ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer