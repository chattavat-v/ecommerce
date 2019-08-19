import React, { Component } from 'react';
import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form';
import { ConfirmOrder_formfield } from './ConfirmOrder_formfield';
import ConfirmOrderFormField from '../Common/ConfirmOrderFormField';



class ConfirmOrderForm extends Component {

    renderContactFilds(ConfirmOrder_formfield) {
		return ConfirmOrder_formfield.map(( { label, name, type, required },index ) => {
			return (
				<Field key={index} label={label} name={name} type={type} required={required} component={ConfirmOrderFormField} />
			)
		})
	}

    render() {
		const { onConfirmOrderSubmit } = this.props;
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(onConfirmOrderSubmit)}>
					{this.renderContactFilds(ConfirmOrder_formfield)}
					<div className="text-center">
						<button className="btn btn-block btn-success title" type="submit">
							ยืนยันการสั่งซื้อ
						</button>
					</div>
				</form>
			</div>
		)
	}
}

function validate(values) {
    const errors = {};
    ConfirmOrder_formfield.forEach(({ name, required}) => {
        if(!values[name] && required) {
            errors[name] = 'กรุณากรอกข้อมูล';
        }
    });
    return errors;
}

function mapStateToProps({ orders}) {
    if(orders && orders._id) {
        return { initialValues : orders };
    } else {
        return {};
    }
}

ConfirmOrderForm = reduxForm({validate, form : "confirmOrderForm"})(ConfirmOrderForm)

export default connect(mapStateToProps) (ConfirmOrderForm);