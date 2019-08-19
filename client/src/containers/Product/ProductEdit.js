import React, { Component } from 'react';
import { connect } from "react-redux";
import { productCreate, productUpdate, productFetch } from '../../Actions/ProductAction';
import Header from '../../components/Header/Header';
import Contains from '../../components/Contains/Contains';
import Footer from '../../components/Footer/Footer';
import ProductForm from '../../components/Product/ProductForm';
import { Route, Redirect } from 'react-router';

class ProductEdit extends Component {

    constructor(props) {
        super(props);
        this.state = { backProduct : false }
        this.BacktoProduct = this.BacktoProduct.bind(this);
    }

    componentDidMount() {
        // console.log("id: ", this.props.match.params.id);
        if(this.props.match.params.id) {
            this.props.productFetch(this.props.match.params.id);
        }
    }

    BacktoProduct() {
        this.setState({ backProduct : true })
    }

    render() {
        const { formValues, match, products, productCreate, productUpdate } = this.props;
        // console.log(formValues);
        return (
            <div className="h-100">
                <Header />

                <div className="frameSlide">
                    <Contains />
                </div>

                <div className="container col-md-5">
                    { match.path.indexOf("add") > 0 && (
                        <div className="my-5">
                            <h2 className="text-center">เพิ่มรายการสินค้า</h2>
                            {products.saved && (
                                <div className="alert alert-secondary title" role="alert">
                                    {products.msg}
                                </div>
                            )
                            }
                            {this.state.backProduct && <Redirect to="/products" />}
                            <ProductForm onProductSubmit={() => productCreate(formValues)} onBacktoProduct={this.BacktoProduct}/>
                        </div>
                    )}
                    { match.path.indexOf("edit") > 0 && (
                        <div className="my-5">
                            <h2 className="text-center">แก้ไขรายการสินค้า</h2>
                            {products.saved && (
                                <div className="alert alert-secondary title" role="alert">
                                    {products.msg}
                                </div>
                            )
                            }
                            {this.state.backProduct && <Redirect to="/products" />}
                            <ProductForm onProductSubmit={() => productUpdate(products._id, formValues)} onBacktoProduct={this.BacktoProduct}/>
                        </div>
                    )}
                </div>

                <Footer />
            </div>
        )
    }
}

function mapStateToProps({ form, products }) {
	return { formValues: form.productForm ? form.productForm.values : null, products };
}

export default connect(mapStateToProps, { productFetch, productCreate, productUpdate })(ProductEdit);