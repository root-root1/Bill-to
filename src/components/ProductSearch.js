import React from 'react';
import './productSearch.css';
import { activeProduct } from '../actions';
import { useDispatch, useSelector } from 'react-redux';


const ProductSearch = ({
    data, 
    setInputfields,
    inputfields,
    searchTearm,
    setSearchTearm
}) => {
    const dispatch = useDispatch();
    const activeProducts = useSelector(state => state.activeProductReducer);

    const handleChangeInput = (event) => {
        setSearchTearm(event.target.value);
    }

    const SetDispatchAndSetVal = () => {
        if(activeProducts !== null){
            activeProducts.map((product) => 
                setInputfields([...inputfields, {
                    id: product.id,
                    item: product.ITEM,
                    hsn: product.HSN,
                    pack: product.PACK,
                    mrp: product.MRP,
                    batchno: product.BATCHNO,
                    batchex: product.BATCHEX,
                    Qty: product.QTY,
                    unitprice: product.UNITPRICE,
                    discount: product.DISCOUNT,
                    gst: product.GST,
                    taxable: product.TAXABLEAMOUNT,
                    netval: product.NETVAL,
                }])
            );
       }
    //    console.log(inputfields)
    }


    const doEveryThing = () => {
        SetDispatchAndSetVal();
        setSearchTearm('');
    }
    
    return (
        <div className="search">
                <div className="searchInput">
                    <input 
                        type="text" 
                        name='item'
                        value={searchTearm}
                        placeholder="product"
                        onChange={event => handleChangeInput(event)}
                    />
                </div>
                {
                    searchTearm.length !== 0 && (
                        <div className="dataResult">
                            {
                                data.filter((val) => {
                                    // console.log(searchTearm)
                                    if (searchTearm === ""){
                                        return val;
                                    }else if (val.ITEM.toLowerCase().includes(searchTearm.toLowerCase())){
                                        return val;
                                    }
                                }).map((product, key) => {
                                    return (
                                        <div key={key} className="dataItem" onClick={() => dispatch(activeProduct(data, product.id))}>
                                            <div onClick={() => doEveryThing()}>
                                                <p>{product.ITEM}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                    // console.log(searchTearm)
                }
            </div>
    )
}

export default ProductSearch;
