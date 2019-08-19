import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Contains from '../../components/Contains/Contains';
import Footer from '../../components/Footer/Footer';
import ConfirmOrderForm from '../../components/Monitor/ConfirmOrderForm';
import InfoOrderConfirm from '../../components/Monitor/InfoOrderConfirm';
import { connect } from "react-redux";
import { orderCreate } from '../../Actions/OrderAction';
import { Redirect } from 'react-router';
import swal from '@sweetalert/with-react';

class ConfirmOrderEdit extends Component {

    constructor(props) {
        super(props);
        this.state = { orders: [], form: [], alt : false, redirect: false}
        this.sweetAlt = this.sweetAlt.bind(this);
    }

    componentDidMount() {
        this.setState({orders : this.props.location.state.detail});
    }

    postDB(orders) {
        this.props.orderCreate(orders);
    }

    sweetAlt() {
        swal(
            <div className="title">
				<h3 className="text-muted p-5">{this.props.orders.msg}</h3>
            </div>
          ).then ( () => {
			this.setState({ alt :  false, redirect: true})
		  }
		  )
	}

    render() {
        const { formValues, orders } = this.props;
        // console.log(formValues);
        // console.log(orders)
        return (
            <div className="h-100">
                <Header />

                <div className="frameSlide">
                    <Contains />
                </div>

                <div className="container col-md-5 my-5">
                    <div className="card" style={{width: "100%"}}>
                        <div className="card-body">
                        <div className="">
                            <h2 className="text-center">ยืนยันการสั่งซื้อสินค้า</h2>
                            {orders.saved && (
                                <div>
                                    {this.state.alt && this.sweetAlt() }
                                </div>
                             )
                            }
                            <ConfirmOrderForm onConfirmOrderSubmit={() => {
                                this.postDB({orders : this.state.orders, ...formValues.values});
                                this.setState({ alt : true });
                            }} />

                            {this.state.orders && <InfoOrderConfirm orders = { this.state.orders }/>}
                        </div>
                        </div>
                    </div>
                </div>

                <Footer />
                {this.state.redirect && <Redirect to="/" /> }
            </div>
        )
    }
}

function mapStateToProps({form, orders}) {
    if(form){
        return { formValues: form.confirmOrderForm, orders }
    }
  }


export default connect(mapStateToProps, { orderCreate }) (ConfirmOrderEdit);