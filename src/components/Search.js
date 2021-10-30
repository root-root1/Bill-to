import React, {useState} from 'react';
import { Row, Col } from 'reactstrap';
import './BillToModal.css';
import { selectUser } from '../actions';
import { useDispatch } from 'react-redux';

const Search = ({toogleModal, customers}) => {
    const [searchTearm, setSearchTearm] = useState('');
    const dispatch = useDispatch();
    
    return (
        <Row>
            <Col sm="12" className="user">
                <input type="text" placeholder="search..." onChange={event => setSearchTearm(event.target.value)} />
                {customers.filter((val) => {
                    if (searchTearm === ''){
                        return val;
                    }else if (val.name.toLowerCase().includes(searchTearm.toLowerCase())) { 
                        return val;
                    }
                }).map((customer, id) => {
                    // console.log()
                    return (
                        <div onClick={toogleModal}>
                            <dl className='row'  key={id} onClick={() => dispatch(selectUser(customer))}>
                                <dt className='col-sm-3'>{customer.name}</dt>
                                <dd className='col-sm-9'>{customer.details.address}</dd>
                            </dl>
                        </div>
                    );
                })}
            </Col>
        </Row>
    )
}

export default Search;
