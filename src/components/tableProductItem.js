import React, {useState} from 'react';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton  from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
// import Container from '@material-ui/core/Container';
import './tableProductItem.css'
import './productSearch.css'
// import ProductSearch from './ProductSearch';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { showProduct } from '../actions';
import ProductSearch from './ProductSearch';


const TableProductItem = () => {

    const activeProductReducer = useSelector(state => state.activeProductReducer);

    const [inputfields, setInputFields] = useState([
        {item: '', hsn: 0, pack: '', mrp: 0, batchno: '', batchex: '', Qty: 0, unitprice: 0, discount: 0, gst:0, taxable:0, netval: 0},
    ]);

    const products = useSelector(state => state.products);

    // const [searchTearm, setSearchTearm] = useState('');

    const handleChangeInput = (index, event) => {
        const values = [...inputfields];
        values[index][event.target.name] = event.target.value;
        // setInputFields(values);
        // if (inputfields.Qty !== 0)
        //     setQty(values);
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inputFields ", inputfields);
    }

    const SetDispatchAndSetVal = () => {
       if (activeProductReducer){
        setInputFields([...inputfields, {
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
    }

    const handleAddFields = ( ) => {
        setInputFields([...inputfields, {item: '', hsn: 0, pack: '', mrp: 0, batchno: '', batchex: '', Qty: 0, unitprice: 0, discount: 0, gst:0, taxable:0, netval: 0}]);
        // setItemdata('');
        // setHsn(0);
        // setPack('');
        // setMrp(0);
        // setBatchno('');
        // setBatchex('');
        // setQty(0);
        // setUnitprice(0);
        // setDiscount(0)
        // setGst(0);
        // setTaxable(0);
        // setNetval(0);
    }

    const handleRemoveFields = (index) => {
        const values = [...inputfields];
        values.splice(index, 1);
        setInputFields(values);
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
    // console.log(inputfields.length)
    return (
        <>
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
                    {
                        inputfields.map((inputfield, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td data-label="S.No">{index+1}</td>
                                        <td data-label="ITEM" >
                                            <ProductSearch
                                                data={products}
                                                setInputFields={setInputFields}
                                                inputfields={inputfields}
                                                inputfield={inputfield}
                                                index={index}
                                                SetDispatchAndSetVal={SetDispatchAndSetVal}

                                            />
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
                                                <RemoveIcon />
                                            </IconButton> 
                                        </td> 
                                        {console.log(inputfield)}
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
            <IconButton color='primary' className="m-4 button" onClick={() => handleAddFields()}>
                <AddIcon/> Add Poduct
            </IconButton>
            <Button
                variant='container'
                color='primary'
                type='submit'
                className='btn btn-outline'
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </>
    )
}

export default TableProductItem;
