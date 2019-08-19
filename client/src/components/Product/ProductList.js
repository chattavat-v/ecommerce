import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {

    showProducts() {
        if(this.props.products) {
            return this.props.products.map((product,index) => (
                <ProductItem key={index} product={product} onAddOrder={this.props.onAddOrder} onShowDetialProduct={this.props.onShowDetialProduct} onEditProduct={this.props.onEditProduct} onDelProduct={this.props.onDelProduct} />
            ))
        }
    }

    render() {
        return (
            <div className="row">
                { this.showProducts() }
            </div>
        )
    }
}

export default ProductList;