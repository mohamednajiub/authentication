
import React from 'react';
import InputField from '../InputField/InputField';

const BasicData = ({ values, handleChange, handleBlur }) => {
    return (
        <>
            <InputField
                type='text'
                name='first_name'
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                label='First Name'
                size={{
                    'xs': 12
                }}
                required={true}
            />
            <InputField
                type='text'
                name='last_name'
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                label='Last Name'
                size={{
                    'xs': 12
                }}
                required={true}
            />
            <InputField
                type='email'
                name='reg_email'
                value={values.reg_email}
                onChange={handleChange}
                onBlur={handleBlur}
                label='Email'
                size={{
                    'xs': 12
                }}
                required={true}
            />
            <InputField
                type='password'
                name='reg_password'
                value={values.reg_password}
                onChange={handleChange}
                onBlur={handleBlur}
                label='Password'
                size={{
                    'xs': 12
                }}
                required={true}
            />
            <InputField
                type='password'
                name='reg_password_confirmation'
                value={values.reg_password_confirmation}
                onChange={handleChange}
                onBlur={handleBlur}
                label='Password Confirmation'
                size={{
                    'xs': 12
                }}
                required={true}
            />
        </>
    )
}

export default BasicData;