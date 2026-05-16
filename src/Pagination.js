import React from 'react'

function Pagination() {
    return (
        <div
            role="invalid"
            className="pagination"
            style={{ display: 'flex', alignItems: 'center' }}
        >
            <button aria-label="">Previous</button>
            <div role="button" style={{ fontSize: '12px', height: '100%' }}>
                1
            </div>
            <div role="button" style={{ fontSize: '12px' }}>
                2
            </div>
            <button aria-label="">Next</button>
        </div>
    )
}

export default Pagination
