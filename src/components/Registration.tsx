import React, { useState, useEffect, useRef } from 'react';
import { Field, ErrorMessage, FormikProps } from 'formik';
import FormLabel from '@material-ui/core/FormLabel';

import * as Yup from 'yup';

import {
    Container,
    TextField,
    FormControl,
    FormControlLabel,
    Radio,
    MenuItem,
    InputLabel,
    Typography,
    createStyles,
    makeStyles,
    Theme,

} from '@material-ui/core';

import { Select, RadioGroup } from 'formik-material-ui';

import Axios from '../utils/Axios';

import FormikStepper from './RegistrationComponents/FormikStepper';
import FormikStep from './RegistrationComponents/FormikStep';
// import FormikField from './FormFields/FormikField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fullwidth: {
            width: '100%',
        },
    })
);

const Registration = (props) => {

    const [chapters, set_chapters] = useState([]);
    const [committees, set_committees] = useState([]);
    const [positions, set_positions] = useState([]);
    const [roles, set_roles] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        Axios.get('/register')
            .then((response) => {
                console.log(response);
                set_roles(response.data.data.roles);
                set_chapters(response.data.data.chapters);
                set_committees(response.data.data.committees);
                set_positions(response.data.data.positions);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, [])

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

    const myFormRef = useRef<FormikProps<any>>(null);


    return (
        <Container maxWidth='sm'>
            <FormikStepper
                // innerRef={formikRef}

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
                // validationSchema={
                //     Yup.object().shape({
                //         first_name: Yup.string()
                //             .trim()
                //             .min(2, "First Name must be at least 2 characters or longer")
                //             .max(20, 'First Name is too long it must be less than or equal 20 characters')
                //             .required('First Name is Required'),
                //         last_name: Yup.string()
                //             .trim()
                //             .min(2, "Last Name must be at least 2 characters or longer")
                //             .max(20, 'Last Name is too long it must be less than or equal 20 characters')
                //             .required('Last Name is Required'),
                //         reg_email: Yup.string()
                //             .trim()
                //             .email('It doesn\'t seems an valid Email')
                //             .required('No Email Provided'),
                //         reg_password: Yup.string()
                //             .trim()
                //             .required('No Password Provided')
                //             .min(6, 'Password is too short it must be at least 6 characters or longer')
                //             .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20}/, 'Your password must contains numbers, capital letters, small letters and special characters'),
                //         reg_password_confirmation: Yup.string()
                //             .trim()
                //             .required('Password Confirmation Can\'t be empty')
                //             .oneOf([Yup.ref('reg_password'), ''], 'Passwords must match'),
                //     })
                // }
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
                    innerRef={myFormRef}
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
                    {/* {console.log(getIn(props))} */}
                    {/* {console.log(myFormRef.current?.values)} */}
                    {
                        localStorage.getItem('type') === 'volunteer' ?
                            (
                                <>
                                    {console.log('true')}
                                    <FormControl className={classes.fullwidth}>
                                        <InputLabel htmlFor="role">Role</InputLabel>
                                        <Field
                                            component={Select}
                                            name="role"
                                            inputProps={{
                                                id: 'role',
                                            }}
                                        >
                                            {roles.map((role: any) => <MenuItem key={role.id} value={role.name}>{role.name.toUpperCase()}</MenuItem>)}
                                        </Field>
                                    </FormControl>
                                    <Typography color='error'>
                                        <ErrorMessage name='role' />
                                    </Typography>
                                    <FormControl className={classes.fullwidth}>
                                        <InputLabel htmlFor="ex_options">Position</InputLabel>
                                        <Field
                                            component={Select}
                                            name="ex_options"
                                            inputProps={{
                                                id: 'ex_options',
                                            }}
                                        >
                                            {positions.map((position: any) => <MenuItem key={position.id} value={position.name}>{position.name.toUpperCase()}</MenuItem>)}
                                        </Field>
                                    </FormControl>
                                    <Typography color='error'>
                                        <ErrorMessage name='ex_options' />
                                    </Typography>
                                    <FormControl className={classes.fullwidth}>
                                        <InputLabel htmlFor="committee">Committee</InputLabel>
                                        <Field
                                            component={Select}
                                            name="committee"
                                            inputProps={{
                                                id: 'committee',
                                            }}
                                        >
                                            {committees.map((committee: any) => <MenuItem key={committee.id} value={committee.name}>{committee.name.toUpperCase()}</MenuItem>)}
                                        </Field>
                                    </FormControl>
                                    <Typography color='error'>
                                        <ErrorMessage name='committee' />
                                    </Typography>
                                </>
                            )
                            : console.log('false')
                    }

                    <Field
                        as={TextField}
                        id="date"
                        label="Birthday"
                        type="date"
                        name="DOB"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                    <Field name="faculty" as={TextField} label="Faculty" type="text" fullWidth />
                    <Field name="university" as={TextField} label="University" type="text" fullWidth />
                </FormikStep>

            </FormikStepper>
        </Container >
    )
}

export default Registration;