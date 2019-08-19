import React, { Component } from 'react';

class OrderItem extends Component {

    constructor(props) {
        super(props);
    }

    renderOrders(order) {
        const { orders } = order;
        return (
            <div className="title">
                <div className="row">
                    <div className="col-8 col-sm-7 col-md-11 col-lg-7">
                        <p>วันสั่งซื้อ: {orders.orderedDate}</p>
                        <p>ยอดรวม: {orders.totalPrice}</p>
                    </div>
                    <div className="col col-sm col-md col-lg">
                        <button className="btn btn-info title" onClick={() => this.props.onshowOrder(this.props.order)} > รายละเอียด </button>
                    </div>
                </div>
                <hr />
            </div>
        )
    }

    render() {
        // console.log(this.props.order)
        return (
            <div>
                {this.renderOrders(this.props.order)}
            </div>

        )
    }
}

export default OrderItem;