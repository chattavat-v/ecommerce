import React from 'react';

export default ({ input, label, type, required, meta }) => {
    return (
        <div className="form-group">
            <label className="tite"> { label } </label>
            <input type={type} required={required} {...input} className="form-control"/>

            { meta.error && meta.touched &&
                (
                    <div className="mt-2 text-danger title">{ meta.error }</div>
                )
            }
        </div>
    )
}