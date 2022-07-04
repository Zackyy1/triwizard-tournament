import React from 'react'
import './PopOver.scss'
const PopOver = ({ onCloseButtonClick, children, condition }) => {
    return (
        <div className={`pop-over ${condition ? 'opened' : ''}`}>
            <button className="close" onClick={() => {
                onCloseButtonClick()
            }}>&times;</button>
            <div className='content'>
                {children}
            </div>
        </div>
    )
}

export default PopOver