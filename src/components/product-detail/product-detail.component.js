import './product-detail.style.css'

const ProductDetail = ({productDetail}) => {
    
    const {name, price, image, description} = productDetail || {}
    return (
        <div className="productDetail">
            <img className="img" src={image} alt="product-image" />
            <div className="allDetails">
                <div className="titlePrice">
                    <div className="title">{name}</div>
                    <div className="price">{price}</div>
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
