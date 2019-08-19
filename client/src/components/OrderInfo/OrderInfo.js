import React, { Component } from 'react';
import swal from '@sweetalert/with-react';

class OrderInfo extends Component {

    constructor(props) {
        super(props);
        this.sweetAlt = this.sweetAlt.bind(this);
    }

    deleteInfoOrder(orderInfo) {
        this.props.onDeleteOrder(this.props.orderInfo)
    }

    sweetAlt() {
        swal(
            <div className="title">
                <h3 className="text-muted p-5">ดำเนินการเสร็จสิ้น</h3>
            </div>
          )
    }

    render() {
        const { orderInfo:{ fullName, email, orders } } = this.props;

        if(!orders || orders.length == 0) {
            return (
                <div className="card" style={{width: "100%"}}>
                    <div className="card-body">
                        <div className="">
                            <h3 className="text-right title text-muted text-center"> กรุณาเลือกรายการสั่งซื้อ </h3>
                            <hr />
                        </div>
                    </div>
                </div>
            )
        }else {
            return (
                <div className="card" style={{width: "100%"}}>
                    <div className="card-body">
                        <div className="">
                            <h3 className="text-right title text-muted text-center"> รายละเอียดรายการสั่งซื้อ </h3>
                            <hr />
                            <div className="title">
                                {/* <div className="py-2 px-4"><strong>วันที่สั่งซื้อ:</strong> {orderedDate} </div> */}
                                <div className="py-2 px-4"><strong>ผู้สั่งซื้อสินค้า:</strong> {fullName} </div>
                                <div className="py-2 px-4"><strong>Email:</strong> {email} </div>
                                <div className="py-2 px-4"><strong>วันที่สั่งซื้อ:</strong> {orders.orderedDate} </div>
                                <div className="py-2 px-4"><strong>ยอดการสั่งซื้อ:</strong> {orders.totalPrice} </div>
                                {/* <ul> */}
                                    {orders && orders.orders.map((record,index) => {
                                        return (
                                            <div className="text-muted" key={index}>
                                                <div className="container">
                                                    <div className="row">
                                                            <img className="col-3 m-4" src={record.product.Image} style={{ height: "100%", marginTop: 0}}/>
                                                        <div className="col" style={{paddingTop: "10%"}}>
                                                            <li>{record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity}</li>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                {/* </ul> */}
                                {/* <h5 className="py-2 px-4">ยอดรวม: {totalPrice}</h5> */}
                                <div className="col-12 text-center">
                                    <button className="btn btn-success title m-2" onClick= {() => this.sweetAlt()}>ยืนยันการสั่งซื้อ</button>
                                    <button className="btn btn-danger title m-2" onClick={() => this.deleteInfoOrder(this.props.orderInfo)} >ลบรายการสั่งซื้อ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default OrderInfo;