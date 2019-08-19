import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import ContactFormField from '../../components/Common/ContactFormField';
import { Contact_formField } from './contactformField';

class ContactForm extends Component {

	renderContactFilds(Contact_formField) {
		return Contact_formField.map(( { label, name, type, required }, index) => {
			return (
				<Field key={index} label={label} name={name} type={type} required={required} component={ContactFormField} />
			)
		})
	}

	render() {
		const { onContactSubmit } = this.props;
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(onContactSubmit)} >
					{this.renderContactFilds(Contact_formField)}
					<div className="text-center">
						<button className="btn btn-info title col-3" type="submit">
							ตกลง
						</button>
					</div>
				</form>
			</div>
		)
	}
}

function validate(values) {
    const errors = {};
    Contact_formField.forEach(({ name, required}) => {
        if(!values[name] && required) {
            errors[name] = 'กรุณากรอกข้อมูล';
        }
    });
    return errors;
}

ContactForm = reduxForm({validate, form : "contactForm"})(ContactForm)

export default ContactForm;