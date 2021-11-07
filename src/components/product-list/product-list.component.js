import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {cartItems} from '../../redux/cart/cart.actions'
import ProductModal from '../product-modal/product-modal.component'

import './product-list.style.css'

const ProductList = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const {filteredItems} = useSelector(state => state.cart)

    const [openProductModal, setOpenProductModal] = useState(false)

    const productID = useRef(null)

    useEffect(() => {
        dispatch(cartItems())
    }, [])

    const openProduct = (product_id) => {
        if(window.mobileAndTabletCheck()) {
            history.push(`/list/${product_id}`)
        } else {
            productID.current = product_id
            setOpenProductModal(true)
        }
    }

    const closeProductModal = () => {
        setOpenProductModal(false)
    }

    const displayCartItems = () => {
        return filteredItems.map((item) => {
            return <div key={item.product_id} onClick={() => openProduct(item.product_id)} className="item">
                        <img className="img" src={item.image} />
                        <button className="open">Open</button>
                    </div>
        })
    }

    return (
        <div className="productList">
           {
               displayCartItems()
           }
           {
               openProductModal && <ProductModal productID={productID.current} closeModal={closeProductModal} />
           }
        </div>
    )
}

export default ProductList
