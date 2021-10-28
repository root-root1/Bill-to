import React, {useState} from 'react';
import { useSelector } from 'react-redux';
// import ProductSearch from './ProductSearch';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton  from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const TableProductItem = () => {

    const [tableItemCount,  setTableItemCount] = useState(1);

    const [item, setItem] = useState('');
    const [nsn, setNsn] = useState(0);
    const [pack, setPack] = useState('');
    const [mrp, setMrp] = useState(0);
    const [batchno, setBatchno] = useState('');
    const [batchex, setBatchex] = useState('');
    const [qty, setQty] = useState(0);
    const [unitprice, setUnitprice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [gst, setGst] = useState(0);
    const [taxable, setTaxable] = useState(0.0);
    const [netval, setNetval] = useState(0.0);

    const [inputfields, setInputFiels] = useState([
        {item: item, qty: qty},
    ])

    const [togglesearch, setTogglesearch] = useState(false);
    const toogle = () => setTogglesearch(!togglesearch);

    // const products = useSelector(state => state.products);
    // const [showInput, setShowInput] = useState(false);


    const columns = [
        {title: "ITEM"},
        {title: "NSN"},
        {title: "PACK"},
        {title: "MRP"},
        {title: "BATCH NO"},
        {title: "BATCH EX"},
        {title: "QYT"},
        {title: "UNIT PRICE"},
        {title: "DISCOUNT"},
        {title: "GST (%)"},
        {title: "TAXABLE AMOUNT"},
        {title: "NET VAL"},
    ]
    return (
        <>
            <table className="table table-bordered table-light">
                <thead>
                    <tr>
                        <th>#</th>
                        {
                        columns.map((data, id) => {
                            return <th className='col p-4' key={id}>{data.title}</th>   
                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        inputfields.map((inputfield, index) => (
                            <tr key={index}>
                                <td>
                                    {tableItemCount}
                                </td>
                                <td>
                                    {
                                        // toogle ? <ProductSearch toogleModal={toogle} mapData={products} />
                                        <TextField
                                            name='Item'
                                            label='Product'
                                            value={inputfield.item} 
                                        />
                                    }
                                </td>
                                <td>{nsn}</td>
                                <td>{pack}</td>
                                <td>{mrp}</td>
                                <td>{batchno}</td>
                                <td>{batchex}</td>
                                <td>
                                    <TextField
                                        name='Item'
                                        label='Quantty'
                                        value={inputfield.qty} 
                                    />
                                </td>
                                <td>{unitprice}</td>
                                <td>{discount}</td>
                                <td>{gst}</td>
                                <td>{taxable}</td>
                                <td>{netval}</td>
                                <td className='row'>
                                    <IconButton className='m-3 col'>
                                        <RemoveIcon/>
                                    </IconButton>
                                </td>
                                    <IconButton className='mr-3 col'>
                                        <AddIcon/>
                                    </IconButton>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableProductItem;
