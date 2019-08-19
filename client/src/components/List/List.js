import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    showListItem(products) {
        if(this.state.products) {
            return this.state.products.map( (product,index) => (
                <div key={index} className="row my-2">
                    <div className="col col-sm-7 col-md-7 col-lg-7">
                        <ul>
                            <li className="text-muted">{product.productName}</li>
                        </ul>
                    </div>
                    <div className="col-5 col-sm-5 col-md-5 col-lg-5">
                        <button className="btn btn-sm btn-info title" onClick={() => this.props.onShowDetialProduct(product)} > รายละเอียด </button>
                    </div>
                </div>
            ))
        }
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + "/api/products").then(res => {
            this.setState({products: res.data});
        })
    }

    render() {
        const style = {height: 40};
        return (
            <div className="">
                <div className="card" style={{width: "100%"}}>

                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary title">
                        <h1 className="navbar-brand text-white pt-3 mt-1 mx-auto"><img style={style} src="/images/logo/icon.png" alt="" />GrowElectronics </h1>
                    </nav>

                    <div className="card-body">
                        <h4 className="m-3">สินค้าทั้งหมด</h4>
                        {this.showListItem( this.state.products)}
                    </div>
                </div>
            </div>
        )
    }
}

export default List;