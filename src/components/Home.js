import React from 'react';
import BillToModal from './BillToModal';
import TableItem from './TableItem';
import { useSelector } from 'react-redux';
import ChangeAddress from './ChangeAddress';

const Home = () => {
    const activeSelectedUserReducer = useSelector(state => state.activeSelectedUserReducer);
   

    return (
        <div className='container'>
            <div className="row m-5 p-3">
                <div className="col-sm mt-8 lead">
                    Bill From
                    <div>
                        <p className='text-muted m-3'>Surelocal Supply Chain Pvt Ltd</p>
                    </div>
                </div>
                <div className="col-sm mt-8 cursor-pointer col">
                    <BillToModal>
                        Bill To
                    </BillToModal>
                    <p className='text-muted'>{activeSelectedUserReducer ? activeSelectedUserReducer.name : ''}</p>
                </div>
                <div className="col-sm mt-8 col" >
                    <ChangeAddress>
                        Supply Address
                    </ChangeAddress>
                    <p className='text-muted'>{activeSelectedUserReducer ? activeSelectedUserReducer.details.address : ''}</p>
                </div>
            </div>
            <TableItem/>
        </div>
    )
}

export default Home;
