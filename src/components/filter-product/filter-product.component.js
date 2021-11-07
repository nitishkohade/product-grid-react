import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterCartItems } from '../../redux/cart/cart.actions'
import './filter-product.style.css'

const FilterProductList = () => {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const onFilterChange = ({target: {value}}) => {
        setInput(value)
        dispatch(filterCartItems(value))
    }

    return (
        <div className="filterInput">
            <input value={input} onChange={onFilterChange} />
        </div>
    )
}

export default FilterProductList
