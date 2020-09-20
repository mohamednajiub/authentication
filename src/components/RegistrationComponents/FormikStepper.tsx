import React, { useState } from 'react';
import { Formik, Form, FormikValues, FormikConfig } from 'formik'
import { Button } from '@material-ui/core';
import { FormikStepProps } from './FormikStep'


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
            validationSchema={current_child.props.validationSchema}
            onSubmit={async (values, helpers) => {
                if (is_last_step()) {
                    await props.onSubmit(values, helpers)
                } else {
                    set_step(s => s + 1)
                }
            }}
        >

            {({ isSubmitting, handleBlur, handleChange, values }) => (
                <Form autoComplete="off">
                    {current_child}

                    {step > 0 ? <Button onClick={() => set_step(s => s - 1)}>Back</Button> : null}
                    <Button type="submit">{is_last_step() ? 'Register' : 'Next'}</Button>
                </Form>
            )}

        </Formik>
    )
}

export default FormikStepper;