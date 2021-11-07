import React from 'react'
import './modal.style.css'

const Modal = ({closeModal, render}) => {
    console.log("adsdsd")
    return (
        <div className="modal">
                <div className="content">
                    {render()}
                </div>
                <div className="footer">
                    <button onClick={closeModal}>Close</button>
                </div>
        </div>
    )
}

export default Modal
