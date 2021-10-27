import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './BillToModal.css'
import Search from './Search';

const BillToModal = (props) => {
    const [modal, setModal] = useState(false);
    const toogleModal = () => setModal(!modal);

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

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
                        {/* <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Update Customer
                        </NavLink>
                        </NavItem> */}
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Search toogleModal={toogleModal} />
                        </TabPane>
                        <TabPane tabId="2">
                            
                        </TabPane>
                    </TabContent>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button onClick={toogleModal}>Ok</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default BillToModal;
