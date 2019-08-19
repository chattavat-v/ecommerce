import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.clock = {date : new Date()};
    }


    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState(this.clock = {date : new Date()});
    }

    render() {
        const style = {height: 30, marginTop: 0};
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary title">
                <h1 className="navbar-brand text-white pt-3 mt-1"><img style={style} src="/images/logo/icon.png" alt="" />GrowElectronics </h1>

                <p className="title text-white pt-3 mt-1">{this.clock.date.toLocaleTimeString()}</p>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="list-inline-item"><Link className="nav-link active" to="/">หน้าหลัก</Link></li>
                    <li className="list-inline-item"><Link className="nav-link" to="/order">รายการสินค้า</Link></li>
                    <li className="list-inline-item"><Link className="nav-link" to="/products">สินค้า</Link></li>
                    <li className="list-inline-item"><Link className="nav-link" to="/about">เกี่ยวกับเรา</Link></li>
                </ul>
                </div>
            </nav>
        )
    }
}
export default Header;
