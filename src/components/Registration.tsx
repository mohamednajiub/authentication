import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

import * as Yup from 'yup';

import Axios from '../utils/Axios';

import ChooseType from './RegistrationComponents/ChooseType';
import BasicData from './RegistrationComponents/BasicData'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            width: '100%',
            marginTop: theme.spacing(30),
        },
        submit: {
            margin: theme.spacing(2, 0),
        },
        root: {
            width: '100%',
        },
        backButton: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    })
);

const getSteps = () => {
    return ['Choose Type', 'Fill Basic Data', 'Fill Additional Data'];
}

const getStepContent = (stepIndex: number, values, handleChange, handleBlur) => {

    switch (stepIndex) {
        case 0:
            return <ChooseType values={values} handleChange={handleChange} handleBlur={handleBlur} />;
        case 1:
            return <BasicData values={values} handleChange={handleChange} handleBlur={handleBlur} />;
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown stepIndex';
    }
}

const Registration: React.FC = (props: any) => {

    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const on_submit = (values, setSubmitting) => {
        console.log(values)
        const regestration_data = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.reg_email,
            password: values.reg_password,
            password_confirmation: values.reg_password_confirmation,
            type: values.reg_type
        };
        // Axios.post('/register', regestration_data)
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    };

    const validation_schema = Yup.object().shape({
        // login_email: Yup.string()
        //     .trim()
        //     .required('No Email Provided')
        //     .email("It doesn't seems an valid Email"),
        // login_password: Yup.string()
        //     .trim()
        //     .required('No Password Provided')
        //     .min(8, 'Password is too short it must be at least 8 characters or longer')
        //     .matches(
        //         /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}/,
        //         'Your password must have numbers, capital letters, small letters and special characters '
        //     ),
    });

    const initial_values = {
        reg_type: '',
        first_name: '',
        last_name: '',
        reg_email: '',
        reg_password: '',
        reg_password_confirmation: '',
        position: '',
        ex_options: '',
        committee: '',
        DOB: '',
        faculty: '',
        university: ''
    };

    return (
        <>
            <Container maxWidth='sm'>

                <>

                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography className={classes.instructions}>Registration Complete Successfully, Please Activate Your Account</Typography>
                                <Typography className={classes.instructions}>Registration Complete Successfully, Please Wait until your account beeing activated</Typography>
                                <Button component={Link} to="/">GO HOME</Button>
                            </div>
                        ) : (
                                <div>
                                    <Formik
                                        initialValues={initial_values}
                                        validationSchema={validation_schema}
                                        onSubmit={(values, { setSubmitting }) =>
                                            on_submit(values, setSubmitting)
                                        }
                                    >
                                        {({ values, handleChange, handleBlur, isSubmitting, isValid }) => (
                                            <Form method='POST' className={classes.form}>
                                                {getStepContent(activeStep, values, handleChange, handleBlur)}

                                                <Button fullWidth color='primary' type='submit' variant={(!isValid || isSubmitting) ? 'contained' : 'outlined'} className={classes.submit}>
                                                    Register
                        						</Button>
                                            </Form>
                                        )}
                                    </Formik>

                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.backButton}
                                        >
                                            Back
                                            </Button>
                                        <Button variant="contained" color="primary" onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </>

            </Container>

        </>
    );
};

export default Registration;
