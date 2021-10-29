import React, {useState} from 'react';
// import { useSelector } from 'react-redux';
// import ProductSearch from './ProductSearch';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton  from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
// import Container from '@material-ui/core/Container';
import './tableProductItem.css'
import ProductSearch from './ProductSearch';
import { useSelector } from 'react-redux';

const TableProductItem = () => {
    const [item, setItem] = useState('');
    const [nsn, setNsn] = useState(0);
    const [pack, setPack] = useState('');
    const [mrp, setMrp] = useState(0);
    const [batchno, setBatchno] = useState('');
    const [batchex, setBatchex] = useState('');
    const [qty, setQty] = useState();
    const [unitprice, setUnitprice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [gst, setGst] = useState(0);
    const [taxable, setTaxable] = useState(0.0);
    const [netval, setNetval] = useState(0.0);

    const [inputfields, setInputFiels] = useState([
        {Item: '', Qty: 0},
    ])

    const products = useSelector(state => state.products);

    const activeProductReducer = useSelector(state => state.activeProductReducer);


    const handleChangeInput = (index, event) => {
        const values = [...inputfields];
        values[index][event.target.name] = event.target.value;
        setInputFiels(values)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inputFields ", inputfields);
    }

    const handleAddFields = ( ) => {
        setInputFiels([...inputfields, {Item: '', Qty: 0}]);
        setItem('');
        setNsn(0);
        setPack('');
        setMrp(0);
        setBatchno('');
        setBatchex('');
        setQty(0);
        setUnitprice(0);
        setDiscount(0);
        setTaxable(0);
        setNetval(0);
    }

    const handleRemoveFields = (index) => {
        const values = [...inputfields];
        values.splice(index, 1);
        setInputFiels(values);
    }
    if (activeProductReducer){
        setItem(activeProductReducer.Item);
        setNsn(activeProductReducer.NSN);
        setPack(activeProductReducer.PACK);
        setMrp(activeProductReducer.MRP);
        setBatchno(activeProductReducer.BATCHNO);
        setBatchex(activeProductReducer.BATCHEX);
        setQty(activeProductReducer.QTY);
        setUnitprice(activeProductReducer.UNITPRICE);
        setGst(activeProductReducer.GST);
        setTaxable(activeProductReducer.TEXABLEAMOUNT);
        setNetval(activeProductReducer.NETVAL);
    }

    const columns = [
        {title: "ITEM"},
        {title: "NSN"},
        {title: "PACK"},
        {title: "MRP"},
        {title: "BATCH-NO"},
        {title: "BATCH-EX"},
        {title: "QYT"},
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
                        inputfields.map((inputfield, index) => (
                            <>
                                <tr key={index}>
                                    <td data-label="S.No">{index+1}</td>
                                    <td data-label="ITEM" >
                                        {
                                            // item ?
                                            // item:
                                            <ProductSearch 
                                                placeholder="Product" 
                                                data={products} 
                                                setInputFiels={setInputFiels} 
                                                inputfields={inputfields}
                                                inputfield={item !== ''?item:inputfield}
                                                index={index} 
                                            />
                                        }
                                    </td>
                                    <td data-label="NSN">{nsn?nsn:0}</td>
                                    <td data-label="PACK">{pack?pack:''}</td>
                                    <td data-label="MRP">{mrp?mrp:0}</td>
                                    <td data-label="BATCH-NO">{batchno?batchno:''}</td>
                                    <td data-label="BATCH-EX">{batchex?batchex:''}</td>
                                    <td data-label="QTY">
                                        {
                                            // qty?
                                            // <TextField
                                            //         name='Qty'
                                            //         type='number'
                                            //         value={qty} 
                                            //         onChange={event => handleChangeInput(index, event)}
                                            // />:
                                            <TextField
                                                name='Qty'
                                                type='number'
                                                value={qty !== 0? qty: inputfield.Qty} 
                                                onChange={event => handleChangeInput(index, event)}
                                            />
                                        }
                                    </td>
                                    <td data-label="UNIT-PRICE">{unitprice?unitprice:0}</td>
                                    <td data-label="DISCOUNT">{discount?discount:0}</td>
                                    <td data-label="GST-(%)">{gst?gst:0}</td>
                                    <td data-label="TAXABLE-AMOUNT">{taxable?taxable:0}</td>
                                    <td data-label="NET-VAL">{netval?netval:0}</td>  
                                    <td data-label="Delete">
                                        <IconButton className='p-2' onClick={() => handleRemoveFields(index)}>
                                            <RemoveIcon />
                                        </IconButton> 
                                    </td>                     
                                </tr>
                            </>
                        ))
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
