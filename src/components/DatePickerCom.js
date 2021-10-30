import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const DatePickerCom = ({selectedDate, setSelectedDate}) => {
    return (
        <div className='m-4 p-4'>
            <DatePicker 
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                className='p-2'
            />
        </div>
    )
}

export default DatePickerCom
