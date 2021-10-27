import React, {useState} from 'react';
import { Row, Col } from 'reactstrap';
import './BillToModal.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../actions';
import { useDispatch } from 'react-redux';

const Search = ({toogleModal}) => {
    const [searchTearm, setSearchTearm] = useState('');
    const customers = useSelector(state => state.customers);
    const dispatch = useDispatch();
    
    return (
        <Row>
            <Col sm="12" className="user">
                <input type="text" placeholder="search..." onChange={event => {setSearchTearm(event.target.value)}} />
                {customers.filter((val) => {
                    if (searchTearm === ''){
                        return val;
                    }else if (val.name.toLowerCase().includes(searchTearm.toLowerCase())) { 
                        return val;
                    }
                }).map((customer, id) => {
                    // console.log()
                    return (
                        <dl className='row'  key={id} onClick={() => dispatch(selectUser(customer))}>
                            <dt className='col-sm-3' onClick={toogleModal}>{customer.name}</dt>
                            <dd className='col-sm-9'>{customer.details.address}</dd>
                        </dl>
                    );
                })}
            </Col>
        </Row>
    )
}

export default Search;
