import React, { Component } from 'react';
import YouTube from 'react-youtube';

class DetailProduct extends Component {
    showDetailProduct(detail) {
        const opts = {
            height: '390px',
            width: '100%',
            playerVars: {
              autoplay: null
            }
          };
        // console.log("DetailProduct: ", detail);
        return (
            <div className="title">
                <div className="card h-100 mb-5" style={{width: "100%"}}>
                    <div className="title text-center p-3">
                        <strong><h1 className="text-uppercase">{detail.productName}</h1></strong>
                    </div>
                    <div className="warpper-card-img" style={{ height: "500", width: "auto", marginTop: 0}}>
                        <img className="card-img-top img-fluid img-thumbnail mb-2 text-center" src={detail.Image} style={{ height: "100%", width: "300", marginTop: 0}}/>
                    </div>
                    <div className="card-body">
                    <strong><h5 className="title pt-3"> รายละเอียดของสินค้า </h5></strong>
                        <li className="title"><strong> { detail.productName } ราคาสินค้า : { detail.unitPrice } บาท</strong></li>
                        <li className="title"> ประเภทของสินค้า : { detail.productType }</li>
                        <li className="title pb-5"> { detail.productDetail }</li>

                    <strong><h5 className="title"> ตัวอย่างการใช้งานสินค้า </h5></strong>
                    <div className="text-center" style={{width: "100%"}}>
                        <YouTube
                            videoId={detail.productWebsite}
                            opts={opts}
                            onReady={this._onReady}
                        />
                    </div>
                    <div className="text-center m-2">
                        <button className="btn btn-danger title" onClick={() => this.props.onBackPage() } > กลับไปหน้าหลัก </button>
                    </div>
                    </div>
                </div>
            </div>
        
        )
        
    }
    render() {
        const { detail } = this.props;
        return (
            <div>
                {this.showDetailProduct(detail)}
                
            </div>
        )
    }
}

export default DetailProduct;