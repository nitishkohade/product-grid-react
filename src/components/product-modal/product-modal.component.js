import { useEffect, useState } from 'react'
import ProductDetail from '../../components/product-detail/product-detail.component'
import { getCartItemById } from '../../services/cart-service'
import Modal from '../modal/modal.component'

import './product-modal.style.css'

const ProductModal = ({closeModal, productID}) => {

    const [selectedItem, setSelectedItem] = useState(null)
    
    const getItem = async () => {
        const {data} = await getCartItemById(productID)
        setSelectedItem(data)
    }

    const renderProduct = () => {
        return <ProductDetail productDetail={selectedItem}/>
    }

    useEffect(() => {
        getItem()
    }, [])

    return (
        <div>
            {selectedItem ? <Modal render={renderProduct} closeModal={closeModal} /> : ''}
        </div>
    )
}

export default ProductModal
