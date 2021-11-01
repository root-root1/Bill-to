import React, {useState} from 'react';
import TextField  from '@material-ui/core/TextField';
import IconButton  from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './tableProductItem.css';
import './productSearch.css';
import { useSelector } from 'react-redux';
import ProductSearch from './ProductSearch';
import SelectItem from './SelectItem';
import DatePickerCom from './DatePickerCom';


const TableProductItem = () => {
    let [inputfields, setInputfields] = useState([]);
    // let [qty, setQty] = useState(0);
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date);

    const products = useSelector(state => state.products);
    const activeSelectedUserReducer = useSelector(state => state.activeSelectedUserReducer);



    const [searchTearm, setSearchTearm] = useState('');
    

    const handleChangeInput = (index, event) => {
        const values = [...inputfields];
        values[index][event.target.name] = event.target.value;
        setInputfields(values);
        // setQty(inputfields[index].Qty)
    }

    const handleRemoveFields = (index) => {
        const values = [...inputfields];
        values.splice(index, 1);
        setInputfields(values);
        // setInputfields(inputfields.filter((_, i) => {return index !== i}));
    }

    const printOnSubmit = () => {
        alert("Check the Console");
        console.log("From: Surelocal Supply Chain Pvt Ltd")
        console.log("Bill to : ", activeSelectedUserReducer.name);
        console.log("Shipping Address is : ", activeSelectedUserReducer.details.address);
        const listofMrpAndQty = []
        selectedValue?console.log(selectedValue.label):console.log("select first pay mode")
        selectedDate ? console.log(selectedDate):console.log("select a date First")
        inputfields.map(inputfield => {
            listofMrpAndQty.push({title: inputfield.item, productTotal: parseInt(inputfield.mrp) * parseInt(inputfield.Qty)})
        })
        // console.log(...listofMrpAndQty);
        // console.log(listofMrpAndQty);
        listofMrpAndQty.map((data, i) => {
            // let fields = JSON.parse(data);
            let total = 0
            console.log("Product name: ", data.title)
            console.log("Product Total: ", data.productTotal);
            // allProductSum.push({item: data.title, productTotal: data.mrp * data.qty})
        })
        let total = 0
        for (let i = 0; i<listofMrpAndQty.length;i += 1){
            total += listofMrpAndQty[i].productTotal;
        }
        console.log("total is : ", total);
        // console.log(allProductSum);
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
                                    <tr key={index}> 
                                        <td data-label="S.No">{index+1}</td>
                                        <td data-label="ITEM" >
                                            {/* {inputfield.id} */}
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
                inputfields={inputfields}
                setInputfields={setInputfields}
                // index={index}
                setSearchTearm={setSearchTearm}
                searchTearm={searchTearm}
            />
            <SelectItem className='m-4' setSelectedValue={setSelectedValue} selectedValue={selectedValue}/>
            <input
                className="btn mt-4 button"
                type='button'
                value='Submit'
                onClick={() => printOnSubmit()}
            />
        </>
    )
}

export default TableProductItem;
