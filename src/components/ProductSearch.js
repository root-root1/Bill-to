import React, {useState} from 'react';
import './productSearch.css';
import { showProduct } from '../actions';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';


const ProductSearch = ({
    data, 
    setInputFields, 
    inputfields, 
    inputfield, 
    index,
    SetDispatchAndSetVal,
}) => {
    const [searchTearm, setSearchTearm] = useState('');
    const dispatch = useDispatch();

    const handleChangeInput = (index, event) => {
        const values = [...inputfields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
        setSearchTearm(event.target.value);
    }
    
    return (
        <div className="search">
            <div className="searchInput">
                <input 
                    type="text" 
                    name='item'
                    value={inputfield.item}
                    placeholder="product"
                    onChange={event => handleChangeInput(index, event)}
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
                                        <div key={key} className="dataItem" onClick={() => [dispatch(showProduct(product))]}>
                                            <p onClick={() => SetDispatchAndSetVal()}>{product.ITEM}</p>
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
