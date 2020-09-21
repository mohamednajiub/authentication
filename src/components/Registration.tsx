import React from 'react';
import { Field, ErrorMessage } from 'formik';
import FormLabel from '@material-ui/core/FormLabel';

import * as Yup from 'yup';

import { Container, TextField, FormControlLabel, Radio, Typography } from '@material-ui/core';

import { RadioGroup } from 'formik-material-ui';

import Axios from '../utils/Axios';

import FormikStepper from './RegistrationComponents/FormikStepper';
import FormikStep from './RegistrationComponents/FormikStep';

const Registration = (props) => {

    const initial_values = {
        type: '',
        first_name: '',
        last_name: '',
        reg_email: '',
        reg_password: '',
        reg_password_confirmation: '',
        role: '',
        ex_options: '',
        committee: '',
        DOB: '',
        faculty: '',
        university: ''
    };

    const on_submit = (values, setSubmitting) => {
        console.log(values)
        const regestration_data = {
            firstName: values.first_name,
            lastName: values.last_name,
            email: values.reg_email,
            password: values.reg_password,
            password_confirmation: values.reg_password_confirmation,
            type: values.type,
            role: values.role,
            ex_options: values.ex_options,
            committee: values.committee
        };
        console.log(regestration_data)
        // Axios.post('/register', regestration_data)
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    };

    return (
        <Container maxWidth='sm'>
            <FormikStepper

                initialValues={initial_values}
                onSubmit={(values, { setSubmitting }) =>
                    on_submit(values, setSubmitting)
                }
            >
                <FormikStep
                    label="Choose Type"
                    validationSchema={Yup.object().shape({
                        type: Yup.string().required('Please Choose Your Type'),
                    })}
                >
                    <Field component={RadioGroup} name="type">
                        <FormLabel component="legend">Choose Your Type</FormLabel>
                        <FormControlLabel value="participant" control={<Radio color="primary" />} label="Participant" />
                        <FormControlLabel value="volunteer" control={<Radio color="primary" />} label="Volunteer" />
                    </Field>
                    <Typography color='error'>
                        <ErrorMessage name='type' />
                    </Typography>
                </FormikStep>

                <FormikStep
                    label="Basic Data"
                    validationSchema={
                        Yup.object().shape({
                            first_name: Yup.string()
                                .trim()
                                .min(2, "First Name must be at least 2 characters or longer")
                                .max(20, 'First Name is too long it must be less than or equal 20 characters')
                                .required('First Name is Required'),
                            last_name: Yup.string()
                                .trim()
                                .min(2, "Last Name must be at least 2 characters or longer")
                                .max(20, 'Last Name is too long it must be less than or equal 20 characters')
                                .required('Last Name is Required'),
                            reg_email: Yup.string()
                                .trim()
                                .email('It doesn\'t seems an valid Email')
                                .required('No Email Provided'),
                            reg_password: Yup.string()
                                .trim()
                                .required('No Password Provided')
                                .min(6, 'Password is too short it must be at least 6 characters or longer')
                                .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20}/, 'Your password must contains numbers, capital letters, small letters and special characters'),
                            reg_password_confirmation: Yup.string()
                                .trim()
                                .required('Password Confirmation Can\'t be empty')
                                .oneOf([Yup.ref('reg_password'), ''], 'Passwords must match'),
                        })
                    }
                >
                    <>
                        <Field name="first_name" as={TextField} label="First Name" fullWidth />
                        <Typography color='error'>
                            <ErrorMessage name='first_name' />
                        </Typography>
                    </>
                    <>
                        <Field name="last_name" as={TextField} label="Last Name" fullWidth />
                        <Typography color='error'>
                            <ErrorMessage name='last_name' />
                        </Typography>
                    </>
                    <>
                        <Field name="reg_email" as={TextField} label="Email" type="email" fullWidth />
                        <Typography color='error'>
                            <ErrorMessage name='reg_email' />
                        </Typography>
                    </>
                    <>
                        <Field name="reg_password" as={TextField} label="Password" type="password" fullWidth />
                        <Typography color='error'>
                            <ErrorMessage name='reg_password' />
                        </Typography>
                    </>
                    <>
                        <Field name="reg_password_confirmation" as={TextField} label="Password Confirmation" type="password" fullWidth />
                        <Typography color='error'>
                            <ErrorMessage name='reg_password_confirmation' />
                        </Typography>
                    </>
                </FormikStep>

                <FormikStep
                    label="Additional Data"
                    validationSchema={
                        Yup.object().shape({
                            DOB: Yup.date(),

                            role: Yup.string()
                                .when('type', {
                                    is: 'volunteer',
                                    then: Yup.string().required('Please Select Your Role'),
                                    otherwise: Yup.string().notRequired()
                                }),
                            ex_options: Yup.string()
                                .when('role', {
                                    is: 'ex_com',
                                    then: Yup.string().required('Please Select Your Position'),
                                    otherwise: Yup.string().notRequired()
                                }),

                            committee: Yup.string()
                                .when('role', {
                                    is: 'highboard' || 'volunteer',
                                    then: Yup.string().required('Please Choose your Committee'),
                                    otherwise: Yup.string().notRequired()
                                }),
                            faculty: Yup.string()
                                .trim()
                                .min(4, "Last Name must be at least 4 characters or longer")
                                .max(50, 'Last Name is too long it must be less than or equal 50 characters')
                            ,
                            university: Yup.string()
                                .trim()
                                .min(3, "Last Name must be at least 3 characters or longer")
                                .max(50, 'Last Name is too long it must be less than or equal 50 characters')
                            ,
                        })
                    }
                >

                </FormikStep>

            </FormikStepper>
        </Container>
    )
}

export default Registration;