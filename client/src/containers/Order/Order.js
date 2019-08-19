import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Contains from '../../components/Contains/Contains';
import Footer from '../../components/Footer/Footer';
import OrderList from '../../components/OrderInfo/OrderList';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import { connect } from "react-redux";
import { ordersFetch } from '../../Actions';
import { ordersDelete } from '../../Actions/OrderAction'

class Order extends Component {

    constructor(props) {
        super(props);
        this.state = { orders: [], order: [], info: 0 };
        this.showOrder = this.showOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
      }

    showOrder(order) {
        // console.log("order_showOrder: ", order)
        this.setState({order : order});
    }

    componentDidMount() {
        this.props.ordersFetch();
    }

    componentDidUpdate() {
        // console.log("props: ", this.props.orders);
        // console.log("state: ", this.state.orders);

        if(this.props.orders && this.state.orders.length != this.props.orders.length) {
            this.setState({orders : this.props.orders});
        }
    }

    deleteOrder(order) {
        this.setState({ order : []});
        this.props.ordersDelete(order);
    }

    render() {
        // console.log(this.props.orders)
        //  console.log("this.state.order: ", this.state.order);
        return (
            <div className="h-100">
                <Header />
                <div className="frameSlide">
                    <Contains />
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-3 col-md-3">
                            <div className="py-5">
                                <OrderList orders = { this.state.orders } onshowOrder={this.showOrder} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-9 col-md-9">
                            <div className="py-5">
                                <OrderInfo info = {this.state.info} orderInfo = {this.state.order}  onDeleteOrder = {this.deleteOrder}/>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

function mapStateToProps({orders}) {
    return { orders };
  }

export default connect(mapStateToProps, { ordersFetch, ordersDelete })(Order);
