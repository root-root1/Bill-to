import React, {useState} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import './productSearch.css'
import { useSelector } from 'react-redux';


const ChangeAddress = (props) => {
    const [modal, setModal] = useState(false);
    const toogleModal =()=> setModal(!modal);
    const activeSelectedUserReducer = useSelector(state => state.activeSelectedUserReducer);
    return (
        <div>
            <button className='btn btn-outline-light btn-md px-3' onClick={toogleModal}>{props.children}</button>
            <Modal isOpen={modal} toggle={toogleModal}>
                <ModalHeader>
                    Change Address
                </ModalHeader>
                <ModalBody>
                <div className='search'>
                    <div className="searchInput row">
                        <input 
                            type="text" 
                            name='item'
                            // onChange={e => {return setDetails(e.target.value)}}
                            value={activeSelectedUserReducer?activeSelectedUserReducer.details.address: ''}
                            placeholder="Name"
                            className='m-4 col'
                        />
                    </div>
                </div>
                </ModalBody>
                <ModalFooter>
                    <button onClick={toogleModal}>Ok</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ChangeAddress;
