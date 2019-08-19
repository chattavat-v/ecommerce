import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Contains from '../../components/Contains/Contains';
import Footer from '../../components/Footer/Footer';
import Monitor from '../../components/Monitor/Monitor';
import { connect } from "react-redux";
import { productsFetch } from '../../Actions';

class Home extends Component {

  componentDidMount() {
    this.props.productsFetch();
  }

  render() {
    return (
      <div className="h-100">
        <Header />

        <div className="frameSlide">
            <Contains />
        </div>

        <Monitor products={ this.props.products } />

        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { products : state.products };
}

export default connect(mapStateToProps, { productsFetch }) (Home);