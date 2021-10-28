import React, {useState} from 'react';
import { Row, Col } from 'reactstrap';
import './productSearch.css';
import { showProduct } from '../actions';
import { useDispatch } from 'react-redux';

const ProductSearch = ({toogleModal, mapData}) => {
    const [searchTearm, setSearchTearm] = useState('');
    const dispatch = useDispatch();
    
    return (
        <Row>
            <Col sm="12" className="user">
                <div className="search">
                    <input type="text" placeholder="search..." onChange={event => {setSearchTearm(event.target.value)}} />
                    {mapData.filter((val) => {
                        if (searchTearm === ''){
                            return val;
                        }else if (val.Item.toLowerCase().includes(searchTearm.toLowerCase())) { 
                            return val;
                        }
                    }).map((product, id) => {
                        // console.log()
                        return (
                            <div onClick={toogleModal}>
                                <dl className='row'  key={id} onClick={() => dispatch(showProduct(product))}>
                                    <dt className='col-sm-3'>{product.Item}</dt>
                                    {/* <dd className='col-sm-9'>{customer.details.address}</dd> */}
                                </dl>
                            </div>
                        );
                    })}
                </div>
                <div className="searchIcon"></div>
                <div className="dataResult">

                </div>
            </Col>
        </Row>
    )
}

export default ProductSearch;
