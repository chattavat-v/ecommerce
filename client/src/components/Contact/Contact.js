import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ContactEdit from '../../containers/About/ContactEdit';

class Contact extends Component {
    static defaultProps = {
        center: {
            lat: 13.716949,
            lng: 100.475951
        },zoom: 15
    };

    render() {
        const styleImg = {height: 40};

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 pt-5">
                        <div className="google-map" style={{ height: '510px', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyC_ZY5w8gxRkBkCwqmx_SPEelTAiLQVt5s' }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                                >
                            </GoogleMapReact>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 py-5">
                        <div className="">
                            <ContactEdit />
                        </div>
                    </div>
                    <div className="card m-3" style={{width: "100%"}}>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-primary title" style={{width: "100%"}}>
                            <h1 className="navbar-brand text-white mx-auto"><img style={styleImg} src="/images/logo/icon.png" alt="" />GrowElectronics </h1>
                        </nav>
                        <div className="row h-100">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="card mx-auto mt-4" style={{width: "160px", height: "160px"}}>
                                    <img className="card-img-top" src="/images/logo/qrCode.jpg" alt="Card image cap"></img>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="card-body">
                                    <h3 className="card-title">Contact GrowElectronics</h3>
                                    <p className="text-muted title"><i className="fa fa-phone"></i> +(66) 81-094-7156</p>
                                    <p className="text-muted title"><i className="fa fa-envelope-square"></i> chattavat.psu@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;