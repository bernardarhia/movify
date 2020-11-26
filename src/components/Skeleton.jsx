import React from 'react'

const Skeleton = ({darkMode}) => {
    return (
        <div className="skeleton-article">
            <div className="skeleton-results">
            <div className="skeleton__img" style={{background:darkMode ? '#444':''}}></div>
            <div className="skeleton__content">
                <div className="skeleton__header" style={{background:darkMode ? '#444':''}}></div>
                <div className="skeleton__text" style={{background:darkMode ? '#444':''}}></div>
            <div className="skeleton__released__date" style={{background:darkMode ? '#444':''}}></div>
            </div>
            </div>
        </div>
    )
}

export default Skeleton
