import FilterProductList from "../../components/filter-product/filter-product.component"
import ProductList from "../../components/product-list/product-list.component"
import './cart.css'

const CartScreen = () => {
    return (<div className="cart">
        <FilterProductList />
        <ProductList />
    </div>)
    
}

export default CartScreen