import React, { Component } from 'react';

class InfoOrderConfirm extends Component {

    render() {
        // console.log("InfoOrderConfirm: " ,this.props.orders);

        const { orderedDate, totalPrice, orders } = this.props.orders;

        return (
            <div className="py-5">
                <h2>รายละเอียดสินค้าที่สั่งซื้อ</h2>
                <hr />
                <div className="title">
                    <p><strong>วันสั่งซื้อ:</strong> {orderedDate}</p>
                    <p><strong>ยอดรวม:</strong> {totalPrice} บาท</p>
                </div>

                <div className="text-center">
                    {orders && orders.map((record,index) => {
                        return (
                            <div className="text-muted" key={index}>
                                <div className="container">
                                    <div className="row">
                                            <img className="col-4 m-4" src={record.product.Image} style={{ height: "100%", marginTop: 0}}/>
                                        <div className="col" style={{paddingTop: "8%"}}>
                                            <li>{record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity}</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default InfoOrderConfirm;