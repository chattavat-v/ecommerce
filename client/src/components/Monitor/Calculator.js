import React, { Component } from 'react';

class Calculator extends Component {

    showOrders(orders) {
        //console.log(orders);
        if(!orders || orders.length == 0) {
            return <li className="text-right title text-muted"> ไม่มีรายการสินค้าสั่งซื้อ </li>
        }else {
            return orders.map((order,index) => {
                return (
                    <li key={index} className="text-right text-success title">
                        {order.product.productName}  x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <button className="btn btn-light btn-sm" onClick={() => this.props.onDelOrder(order.product)}>X</button>
                    </li>
                )
            })
        }
    }
    render() {
        const { totalPrice, orders } = this.props;
        return (
            <div className="mb-5">
                <h1 className="text-right"> รายการสั่งซื้อสินค้า </h1>
                <hr />
                <h1 className="text-right"> {totalPrice} บาท</h1>
                <hr />
                <ul className="list-unstyled ">
                    {this.showOrders(orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title" onClick={() => this.props.onConfirmOrder()} >ยืนยันการสั่งซื้อ</button>
                <button className="btn btn-block btn-secondary title" onClick={() => this.props.onCancleOrder()} >ยกเลิกการสั่งซื้อ</button>
            </div>
        )
    }
}

export default Calculator;