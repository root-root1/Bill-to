import React, {useState} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

const ChangeAddress = (props) => {
    const [modal, setModal] = useState(false);
    const toogleModal =()=> setModal(!modal);
    return (
        <div>
            <button className='btn btn-outline-light btn-md px-3' onClick={toogleModal}>{props.children}</button>
            <Modal isOpen={modal} toggle={toogleModal}>
                <ModalHeader>
                    Change Address
                </ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                    <button onClick={toogleModal}>Ok</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ChangeAddress;
