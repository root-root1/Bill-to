import React from 'react';
import './productSearch.css'

const CreateUpdateCustomer = () => {
    return (
        <div className='search'>
            <div className="searchInput row">
                <input 
                    type="text" 
                    name='item'
                    placeholder="Name"
                    className='m-4 col'
                />
                <br />
                <input 
                    type="text" 
                    name='item'
                    placeholder="address"
                    className='m-4 col'
                />
                <br />
                <input 
                    type="text" 
                    name='item'
                    placeholder="Phone no"
                    className='m-4 col'
                />
            </div>
        </div>
    )
}

export default CreateUpdateCustomer;
