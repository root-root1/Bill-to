import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import './BillToModal.css'
import Search from './Search';
import { useSelector } from 'react-redux';
import CreateUpdateCustomer from './create-update-customer';

const BillToModal = (props) => {
    const [modal, setModal] = useState(false);
    const toogleModal = () => setModal(!modal);

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const customers = useSelector(state => state.customers);

    return (
        <div>
            <button className="btn btn-outline-light btn-md px-3" onClick={toogleModal}>{props.children}</button>
            <Modal isOpen={modal} toogle={toogleModal} size='lg'>
                <ModalHeader>
                    Bill To
                </ModalHeader>
                <ModalBody>
                <div>
                    <Nav tabs>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Search
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Add New Customer
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Update Customer
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Search toogleModal={toogleModal} customers={customers} />
                        </TabPane>
                        <TabPane tabId="2">
                            <CreateUpdateCustomer/>
                        </TabPane>
                        <TabPane tabId="3">
                            <CreateUpdateCustomer/>
                        </TabPane>
                    </TabContent>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className='btn custom' onClick={toogleModal}>Submit</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default BillToModal;
