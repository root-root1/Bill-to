import React from 'react';
import './productSearch.css';
import { activeProduct } from '../actions';
import { useDispatch } from 'react-redux';


const ProductSearch = ({
    data, 
    SetDispatchAndSetVal,
    searchTearm,
    setSearchTearm
}) => {
    // const [searchTearm, setSearchTearm] = useState('');
    const dispatch = useDispatch();

    const handleChangeInput = (event) => {
        setSearchTearm(event.target.value);
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
                                        <div key={key} className="dataItem" onClick={() => dispatch(activeProduct(product))}>
                                            <div onClick={doEveryThing}>
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
