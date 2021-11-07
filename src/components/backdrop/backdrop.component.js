import ReactDOM from 'react-dom'
import Spinner from '../spinner/spinner.component'

import './backdrop.style.css'

const Backdrop = () => {
    return ReactDOM.createPortal(
        <div className="backdrop">
            <Spinner />
        </div>, document.getElementById('modal-root')
    )
}

export default Backdrop