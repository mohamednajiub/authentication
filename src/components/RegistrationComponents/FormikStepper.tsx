import React, { useState, createContext } from 'react';

import { Formik, Form, FormikValues, FormikConfig } from 'formik'
import { Button } from '@material-ui/core';
import { FormikStepProps } from './FormikStep';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AdditionalData from './RegisterationSteps/AdditionalData';


export let FormValues = createContext({});

const FormikStepper = ({ children, ...props }: FormikConfig<FormikValues>) => {
    const children_array = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
    const [step, set_step] = useState(0);
    const current_child = children_array[step];

    const is_last_step = () => {
        return step === children_array.length - 1
    }

    return (
        <Formik
            {...props}

            enableReinitialize={true}
            validationSchema={current_child.props.validationSchema}
            onSubmit={async (values, setSubmitting) => {
                if (is_last_step()) {
                    await props.onSubmit(values, setSubmitting)
                } else {
                    set_step(s => s + 1)
                }
            }}

        >
            {({ isSubmitting, handleBlur, handleChange, values }) => (

                <Form autoComplete="off">
                    <Stepper activeStep={step} alternativeLabel>
                        {children_array.map((child) => (
                            <Step key={child.props.label}>
                                <StepLabel>{child.props.label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {is_last_step() ?
                        <AdditionalData values={values} />
                        : current_child
                    }

                    {step > 0 ? <Button onClick={() => set_step(s => s - 1)}>Back</Button> : null}
                    <Button type="submit">{is_last_step() ? 'Register' : 'Next'}</Button>
                </Form>

            )}
        </Formik>
    )
}

export default FormikStepper;