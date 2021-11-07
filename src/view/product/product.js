import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductDetail from '../../components/product-detail/product-detail.component'
import { Link } from 'react-router-dom'

import './product.css'
import { getCartItemById } from '../../services/cart-service'
import Backdrop from '../../components/backdrop/backdrop.component'

const ProductScreen = () => {
    let { productID } = useParams();
    const [selectedItem, setSelectedItem] = useState(null)
    
    const getItem = async () => {
        const {data} = await getCartItemById(productID)
        setSelectedItem(data)
    }

    useEffect(() => {
        getItem()
    }, [])

    return (
        <>
            {
                selectedItem
                ?
                <div className="product">
                    <ProductDetail productDetail={selectedItem} />
                    <Link to={"../"}><button className="goBackBtn">Go Back</button></Link>
                </div>
                :
                <div>
                    <Backdrop />
                </div>
            }
        </>
    )
}

export default ProductScreen
