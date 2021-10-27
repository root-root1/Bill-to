import React from 'react';
import products from '../reducers/product';

const TableItem = () => {
    const columns = [
        {title: "ITEM"},
        {title: "NSN"},
        {title: "PACK"},
        {title: "MRP"},
        {title: "BATCH NO"},
        {title: "BATCH EX"},
        {title: "QYT"},
        {title: "UNIT PRICE"},
        {title: "DISCOUNT"},
        {title: "GST (%)"},
        {title: "TAXABLE AMOUNT"},
        {title: "NET VAL"},
    ]
    return (
        <>
            <table className="table table-bordered table-dark">
                <tr>
                    <th className='col'>#</th>
                    {
                    columns.map((data, id) => {
                        return <th className='col p-4' key={id}>{data.title}</th>   
                    })}
                </tr>
                <tr>

                    {/* {
                        products.map((product) => {
                            return <div>
                                <th>{product.ITEM}</th>
                                <th>{product.NSN}</th>
                                <th>{product.PACK}</th>
                                <th>{product.MRP}</th>
                                <th>{product.BATCHNO}</th>
                                <th>{product.BATCHEX}</th>
                                <th>{product.QTY}</th>
                                <th>{product.UNITPRICE}</th>
                                <th>{product.DISCOUNT}</th>
                                <th>{product.GST}</th>
                                <th>{product.TAXABLEAMOUNT}</th>
                                <th>{product.NETVAL}</th>
                            </div>
                        })
                    } */}
                </tr>
            </table>
        </>
    )
}

export default TableItem;
