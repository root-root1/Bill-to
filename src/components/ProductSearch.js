import React, {useState} from 'react';
import { Row, Col } from 'reactstrap';
import './productSearch.css';
import { showProduct } from '../actions';
import { useDispatch } from 'react-redux';

const ProductSearch = ({data, setInputFiels, inputfields, inputfield, index}) => {
    const [searchTearm, setSearchTearm] = useState('');
    const dispatch = useDispatch();

    const handleChangeInput = (index, event) => {
        const values = [...inputfields];
        values[index][event.target.name] = event.target.value;
        setInputFiels(values)
        setSearchTearm(event.target.value)
    }
    
    return (
        <div className="search">
            <div className="searchInput">
                <input 
                    type="text" 
                    name='Item'
                    value={inputfield.Item}
                    placeholder="product"
                    onChange={event => handleChangeInput(index, event)}
                />
                <div className='searchIcon'>

                </div>
            </div>
            {
                searchTearm.length !== 0 && (
                    <div className="dataResult">
                        {
                            data.filter((val) => {
                                console.log(searchTearm)
                                if (searchTearm === ""){
                                    return val;
                                }else if (val.Item.toLowerCase().includes(searchTearm.toLowerCase())){
                                    return val;
                                }
                            }).map((Items, key) => {
                                return (
                                    <div key={key} className="dataItem" onClick={() => dispatch(showProduct(Items))}>
                                        <p>{Items.Item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )}
        </div>
    )
}

export default ProductSearch;
