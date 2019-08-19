import React, { Component } from 'react';
import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form';
import FormField from '../Common/FormField'
import {productFormField} from './formFields';

class ProductForm extends Component {

    renderFields (formFields) {
        return formFields.map(( { label, name, type, required }, index ) => {
            return (
                <Field key={index} label={label} name={name} type={type} required={required} component={FormField} />
            )
        })
    }

    render() {
        const { onProductSubmit } = this.props;
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                    <div className="title">
                        {this.renderFields(productFormField)}
                    </div>
                    <button className="btn btn-block btn-success title" type="submit">ตกลง</button>
                </form>
                <div className="mt-3">
                    <button className="btn btn-block btn-danger title" onClick={() => this.props.onBacktoProduct() } > กลับไปหน้าหลัก </button>
                </div>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};
    productFormField.forEach(({ name, required}) => {
        if(!values[name] && required) {
            errors[name] = 'กรุณากรอกข้อมูล';
        }
    });
    return errors;
}

function mapStateToProps({ products}) {
    if(products && products._id) {
        return { initialValues : products };
    } else {
        return {};
    }
}

ProductForm = reduxForm({ validate, form : "productForm"})(ProductForm);

export default connect(mapStateToProps)(ProductForm);