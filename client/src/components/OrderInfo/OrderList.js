import React, { Component } from 'react';
import OrderItem from './OrderItem';

class OrderList extends Component {

    showOrders() {
        // console.log("order:", this.props.orders);
        if(this.props.orders) {
            return this.props.orders.map((order,index) => (
                <OrderItem key={index} order={order} onshowOrder={this.props.onshowOrder}/>
            ))
        }
    }

    render() {
        const style = {height: 40};
        return (
            <div className="card" style={{width: "100%"}}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary title">
                    <h1 className="navbar-brand text-white pt-3 mt-1 mx-auto"><img style={style} src="/images/logo/icon.png" alt="" />GrowElectronics </h1>
                </nav>
                <div className="card-body">
                    <div className="">
                        { this.showOrders() }
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderList;