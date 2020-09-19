import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Typography } from '@material-ui/core';
import { ErrorMessage } from 'formik';

interface Props {
    name: string;
    value: string;
    onChange: any;
    onBlur?: any;
    label: string;
    size: {};
    required?: boolean;
}

const RadioField: React.FC<Props> = ({ name, value, onChange, onBlur, label, required, size }) => {
    return (
        <>
            <FormControlLabel
                value={value}
                // onChange={onChange}
                control={<Radio color="primary" />}
                label={label}
                labelPlacement="end"
            />
            <Typography color='error'>
                <ErrorMessage name={name} />
            </Typography>
        </>
    );
};

export default RadioField;