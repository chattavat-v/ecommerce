import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Contains from '../../components/Contains/Contains';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

class About extends Component {
    render() {
        return (
            <div className="h-100">
                <Header />

                <div className="frameSlide">
                    <Contains />
                </div>

                <Contact />

                <Footer />
            </div>
        )
    }
}

export default About;