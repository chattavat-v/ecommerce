import React, { Component } from 'react';
import ProductList from '../Product/ProductList';
import Calculator from './Calculator';
import List from '../List/List';
import DetailProduct from '../DetailProduct/DetailProduct';
import swal from '@sweetalert/with-react';
import { withRouter } from 'react-router-dom';

class Monitor extends Component {

    constructor(props) {
        super(props);
        this.state = {totalPrice: 0, orders: [], detail: null, confirm: false, msg: ''};
        this.backtoProductList = this.backtoProductList.bind(this);
        this.addOrder = this.addOrder.bind(this);
        this.ShowDetailProduct = this.ShowDetailProduct.bind(this);
        this.delOrder = this.delOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
        this.cancleOrder = this.cancleOrder.bind(this);
        this.sweetAlt = this.sweetAlt.bind(this);
    }

    componentDidMount() {
        this.setState({ totalPrice: 0, orders: [], detail: null, confirm: false, msg: '' });
    }

    backtoProductList() {
        this.setState({ detail : null });
    }

    addOrder(product) {
        let findOrder = this.state.orders.find(order => order.product._id == product._id);
        if(findOrder) {
            findOrder.quantity++;
        }else {
            this.state.orders.push({ product: product, quantity: 1 });
        }
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({ totalPrice: totalPrice, orders: this.state.orders, confirm: false});
    }

    delOrder(product) {
        let findOrder = this.state.orders.find(order => order.product._id == product._id);
        let resultOrder = this.state.orders.filter(order => order.product._id != product._id);
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));
        this.setState({ totalPrice: totalPrice, orders: resultOrder, confirm: false});
    }

    confirmOrder() {
        const { totalPrice, orders } = this.state;
        let newOrders = [];
        orders.map(({product: {_id, productType, productName, Image, unitPrice}, quantity  }) => {
            newOrders.push({ product: {_id, productType, productName, Image, unitPrice}, quantity});
            // console.log(newOrders);
        });
        if(newOrders && newOrders.length > 0) {
            const d = new Date();
            const date = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
            // console.log(date);
            this.props.history.push({
                pathname: '/confirmOrder/',
                state: { detail: {orderedDate : date, totalPrice, orders: newOrders} }
            })
            this.setState({ totalPrice: 0, orders: [], confirm: false });
        } else {
            this.setState({ totalPrice: 0, orders: [], confirm: true, msg: 'กรุณาเลือกซื้อสินค้า' });
        }
    }

    cancleOrder() {
        this.setState({ totalPrice: 0, orders: [], confirm: false });
    }

    ShowDetailProduct(product) {
        // console.log("showDetailProduct-MONITOR: ", product);
        this.setState({ detail: product });
    }

    sweetAlt() {
        swal(
            <div className="title">
                <h3 className="text-muted p-5">{ this.state.msg }</h3>
            </div>
          )
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-12">
                        {this.state.confirm &&
                            <div>
                                { this.sweetAlt() }
                            </div>
                        }
                    </div>
                    <div className="col-sm-5 col-md-3 col-lg-3 w-100 mb-5">
                        <List onShowDetialProduct={this.ShowDetailProduct} />
                    </div>
                    <div className="col-sm-7 col-md-6 col-lg-6">
                        {this.props.products &&  Array.isArray(this.props.products) && this.state.detail && <DetailProduct detail={this.state.detail} onBackPage={this.backtoProductList}/>}
                        {this.props.products &&  Array.isArray(this.props.products) && !this.state.detail && <ProductList products={this.props.products} onAddOrder={this.addOrder} onShowDetialProduct={this.ShowDetailProduct}/>}
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder} onConfirmOrder={this.confirmOrder} onCancleOrder={this.cancleOrder} />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Monitor);