import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, FormikValues, FormikConfig, FormikProps } from 'formik'
import { Button } from '@material-ui/core';
import { FormikStepProps } from './FormikStep';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


const FormikStepper = ({ children, ...props }: FormikConfig<FormikValues>) => {
    const children_array = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
    const [step, set_step] = useState(0);
    const current_child = children_array[step];
    const [completed, set_completed] = useState(false);

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

                    {current_child}
                    {/* {ReactDOM.render(current_child, null, values)} */}


                    {console.log(current_child.props)}

                    {
                        step === 1 ?
                            localStorage.setItem('type', `${values.type}`)
                            : null
                    }

                    {step > 0 ? <Button onClick={() => set_step(s => s - 1)}>Back</Button> : null}
                    <Button type="submit">{is_last_step() ? 'Register' : 'Next'}</Button>
                    {JSON.stringify(values, null, 4)}
                </Form>
            )}
        </Formik>
    )
}

export default FormikStepper;