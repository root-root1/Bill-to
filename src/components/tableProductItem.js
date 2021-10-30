import React, {useState} from 'react';
import TextField  from '@material-ui/core/TextField';
import IconButton  from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './tableProductItem.css'
import './productSearch.css'
import { useSelector } from 'react-redux';
import ProductSearch from './ProductSearch';
import SelectItem from './SelectItem';
import DatePickerCom from './DatePickerCom';


const TableProductItem = () => {
    let [inputfields, setInputfields] = useState([]);
    let [qty, setQty] = useState(0);
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const products = useSelector(state => state.products);
    const activeProductReducer = useSelector(state => state.activeProductReducer);

    const [searchTearm, setSearchTearm] = useState('');
    

    const handleChangeInput = (index, event) => {
        const values = [...inputfields];
        values[index][event.target.name] = event.target.value;
        setInputfields(values);
        setQty(inputfields[index].Qty)
    }

    const SetDispatchAndSetVal = () => {
        // console.log(activeProductReducer);
        if(activeProductReducer !== null){
            setInputfields([...inputfields, {
                id: activeProductReducer.id,
                item: activeProductReducer.ITEM,
                hsn: activeProductReducer.HSN,
                pack: activeProductReducer.PACK,
                mrp: activeProductReducer.MRP,
                batchno: activeProductReducer.BATCHNO,
                batchex: activeProductReducer.BATCHEX,
                Qty: activeProductReducer.QTY,
                unitprice: activeProductReducer.UNITPRICE,
                discount: activeProductReducer.DISCOUNT,
                gst: activeProductReducer.GST,
                taxable: activeProductReducer.TAXABLEAMOUNT,
                netval: activeProductReducer.NETVAL,
            }]);
       }
    //    console.log(inputfields)
    }


    const handleRemoveFields = (index) => {
        // const values = [...inputfields];
        // values.splice(index, 1);
        // setInputfields(values);
        setInputfields(inputfields.filter((_, i) => {return index !== i}));
    }


    const columns = [
        {title: "ITEM"},
        {title: "HSN"},
        {title: "PACK"},
        {title: "MRP"},
        {title: "BATCH-NO"},
        {title: "BATCH-EX"},
        {title: "QTY"},
        {title: "UNIT-PRICE"},
        {title: "DISCOUNT"},
        {title: "GST-(%)"},
        {title: "TAXABLE-AMOUNT"},
        {title: "NET-VAL"},
    ]
    // let newArray = Array.from(new Set(inputfields))
    return (
        <>
            <DatePickerCom selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <table className='table'>
                <thead>
                    <th>S.No</th>
                    {
                        columns.map((data, id) => {
                        return <th key={id}>{data.title}</th>   
                    })}
                    <th>Delete</th>
                </thead>
                <tbody>
                    <>
                        {
                            inputfields.map((inputfield, index) => {
                                return (
                                    <tr key={inputfield.id}> 
                                        <td data-label="S.No">{index+1}</td>
                                        <td data-label="ITEM" >
                                            {inputfield.item}
                                        </td>
                                        <td data-label="HSN">{inputfield.hsn}</td>
                                        <td data-label="PACK">{inputfield.pack}</td>
                                        <td data-label="MRP">{inputfield.mrp}</td>
                                        <td data-label="BATCH-NO">{inputfield.batchno}</td>
                                        <td data-label="BATCH-EX">{inputfield.batchex}</td>
                                        <td data-label="QTY">
                                            {
                                                inputfield.Qty !== 0?
                                                <TextField
                                                        name='Qty'
                                                        type='number'
                                                        value={inputfield.Qty} 
                                                        onChange={event => handleChangeInput(index, event)}
                                                />:
                                                <TextField
                                                    name='Qty'
                                                    type='number'
                                                    value={inputfield.Qty} 
                                                    onChange={event => handleChangeInput(index, event)}
                                                />
                                            }
                                        </td>
                                        <td data-label="UNIT-PRICE">{inputfield.unitprice}</td>
                                        <td data-label="DISCOUNT">{inputfield.discount}</td>
                                        <td data-label="GST-(%)">{inputfield.gst}</td>
                                        <td data-label="TAXABLE-AMOUNT">{inputfield.taxable}</td>
                                        <td data-label="NET-VAL">{inputfield.netval}</td>  
                                        <td data-label="Delete">
                                            <IconButton className='p-2' onClick={() => handleRemoveFields(index)}>
                                                <DeleteIcon />
                                            </IconButton> 
                                        </td> 
                                    </tr>
                                )
                            })
                        }
                    </>
                </tbody>
            </table>
            <ProductSearch
                data={products}
                // inputfield={inputfield}
                // index={index}
                setSearchTearm={setSearchTearm}
                searchTearm={searchTearm}
                SetDispatchAndSetVal={SetDispatchAndSetVal}
            />
            <SelectItem className='m-4' setSelectedValue={setSelectedValue} selectedValue={selectedValue}/>
            {
                selectedValue?console.log(selectedValue.label):console.log("select first pay mode")
            }
            {
                selectedDate ? console.log(selectedDate):console.log("select a date First")

            }
        </>
    )
}

export default TableProductItem;
