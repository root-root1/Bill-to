import React, {useState} from 'react';
import Select from 'react-select';

const SelectItem = ({setSelectedValue, selectedValue}) => {
    const action = [
        {label: "Cheque On Delivery", value: 1},
        {label: "Cash On Delivery", value: 2}
    ]
    const [value, setValue] = useState('');

    const onHandleValue = (value) => {
        setValue(value);
    }

    const hanleSelectedValue = value => {
        setSelectedValue(value);
    }

    return (
        <div className='container mt-4'>
            {/* <div className='row alert alert-info'>Selected Value: {selectedValue.label || {}}</div> */}
                <div>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <Select 
                            options={action}
                            value={selectedValue}
                            onInputChange={onHandleValue}
                            onChange={hanleSelectedValue}
                        />
                    </div>
                    <div className='col-md-4'></div>
            </div>
        </div>
    )
}

export default SelectItem
