import React from 'react';
import { FormikValues, FormikConfig, useFormikContext } from 'formik'

export interface FormikStepProps
    extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
    label: string;
    innerRef?: any
}

export function FormikStep({ children, ...props }: FormikStepProps) {
    return <>{children}
        { console.log(useFormikContext())}
    </>
}

export default FormikStep;