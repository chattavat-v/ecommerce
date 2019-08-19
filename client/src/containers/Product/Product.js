import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Contains from '../../components/Contains/Contains';
import Footer from '../../components/Footer/Footer';
import ProductList from '../../components/Product/ProductList';
import DetailProduct from '../../components/DetailProduct/DetailProduct';
import List from '../../components/List/List';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { productsFetch, productDelete } from '../../Actions';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {detail : null};
        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.ShowDetailProduct = this.ShowDetailProduct.bind(this);
        this.backtoProductList = this.backtoProductList.bind(this);
    }

    componentDidMount() {
        this.props.productsFetch();
    }

    delProduct(product) {
        this.props.productDelete(product._id);
    }

    editProduct(product) {
        // console.log(product.id)
        this.props.history.push('products/edit/' + product._id);
    }

    ShowDetailProduct(product) {
        //  console.log("showDetailProduct-PRODUCT: ", product);
         this.setState({ detail: product });
    }

    backtoProductList() {
        this.setState({ detail : null });
    }

    render() {
        return (
            <div className="h-100">
                <Header />
                <div className="frameSlide">
                    <Contains />
                </div>

                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col-12 mb-3">
                            <button className="btn btn-primary title float-right col-5 col-sm-2 col-md-2" onClick={() => this.props.history.push('products/add')}>เพิ่มสินค้า</button>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3 w-100 mb-5">
                            <List onShowDetialProduct={this.ShowDetailProduct} />
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9">
                            {this.state.detail && <DetailProduct  detail={this.state.detail} onBackPage={this.backtoProductList}/>}
                            {!this.state.detail && this.props.products &&  Array.isArray(this.props.products) &&
                            <ProductList products={this.props.products}
                                onEditProduct={this.editProduct}
                                onDelProduct={this.delProduct}
                            />}
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { products : state.products };
  }

export default withRouter(connect(mapStateToProps, { productsFetch, productDelete })(Product));