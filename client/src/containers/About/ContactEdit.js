import React, { Component } from 'react';
import { connect } from "react-redux";
import { contactCreate } from '../../Actions/ContactAction';
import ContactForm from '../../components/Contact/ContactForm';
import swal from '@sweetalert/with-react';
import { Redirect } from 'react-router';

class ContactEdit extends Component {

	constructor(props) {
		super(props);
		this.state = { alt : false, redirect: false };
	}
	sweetAlt(text) {
        swal(
            <div className="title">
				<h3 className="text-muted p-5">{text}</h3>
            </div>
          ).then ( () => {
			this.setState({ alt :  false, redirect: true})
		  }
		  )
	}

	render() {
		const styleImg = {height: 40};
		const { formValues, contactCreate, contact } = this.props;
		return (
			<div className="card mb-1" style={{width: "100%"}}>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary title" style={{width: "100%"}}>
					<h1 className="navbar-brand text-white mx-auto"><img style={styleImg} src="/images/logo/icon.png" alt="" />GrowElectronics </h1>
				</nav>
				<div className="p-4">
					{contact.saved && (
						<div>
							{this.state.alt && this.sweetAlt(contact.msg) }
						</div>
					)
					}
					<ContactForm onContactSubmit={() => {
						contactCreate(formValues)
						this.setState({ alt : true });
					}} />
				</div>
				{this.state.redirect && <Redirect to="/" /> }
			</div>
		)
	}
}

function mapStateToProps({ form, contact }) {
	return { formValues: form.contactForm ? form.contactForm.values : null, contact };
}

export default connect(mapStateToProps, { contactCreate })(ContactEdit);