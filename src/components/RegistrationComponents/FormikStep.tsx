import React from 'react';
import { FormikValues, FormikConfig } from 'formik'

export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
    label: string;
}

export function FormikStep({ children, ...props }: FormikStepProps) {
    return <>{children}</>
}

export default FormikStep;