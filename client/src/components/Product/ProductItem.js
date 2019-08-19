import React, { Component } from 'react';

class ProductItem extends Component {

    doSimthing(productName) {
        console.log(productName);
    }

    render() {
        const {productName, Image, unitPrice} = this.props.product;
        return (
            <div className="col-12 col-sm-6 col-md-5 col-lg-6 mb-5">
                <div className="card h-100" style={{width: "100%", background: "rgb(234, 242, 245)"}}>
                    <div className="warpper-card-img" style={{ height: "500", width: "auto", marginTop: 0}}>
                        <img className="card-img-top img-fluid img-thumbnail mb-2 text-center" src={Image} style={{ height: "100%", width: "300", marginTop: 0}}/>
                    </div>
                    <div className="card-body text-center">
                        <strong><h5 className="title"> { productName } </h5></strong>
                        <p className="title"> { unitPrice } บาท</p>

                        {this.props.onAddOrder &&
                            <button className="btn btn-block btn-info title" onClick={() => this.props.onShowDetialProduct(this.props.product)} > รายละเอียด </button>
                        }
                         {this.props.onAddOrder &&
                            <button className="btn btn-block btn-primary title" onClick={() => this.props.onAddOrder(this.props.product)} > สั่งซื้อ </button>
                        }
                        {(this.props.onDelProduct || this.props.onEditProduct) &&
                            <button className="btn btn-info col-5 title" onClick={() => this.props.onEditProduct(this.props.product)} > แก้ไข </button>
                        }
                        {(this.props.onDelProduct || this.props.onEditProduct) &&
                            <button className="btn btn-danger col-5 float-right title" onClick={() => this.props.onDelProduct(this.props.product)} > ลบรายการ </button>
                        }
                    </div>
                </div>
            </div>

        )
    }
}

export default ProductItem;