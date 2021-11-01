import React from 'react';
import './create-update.css'

const CreateUpdateCustomer = () => {
    return (
        <div className='search'>
            <div className="searchField">
                <input 
                    type="text" 
                    name='item'
                    placeholder="Name"
                    className='m-4'
                />
                <input 
                    type="text" 
                    name='item'
                    placeholder="address"
                    className='m-4'
                />
                <input 
                    type="text" 
                    name='item'
                    placeholder="Phone no"
                    className='m-4'
                />
            </div>
        </div>
    )
}

export default CreateUpdateCustomer;
