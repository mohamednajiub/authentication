
import React from 'react';
import { RadioGroup } from '@material-ui/core';
import RadioField from '../InputField/RadioField';

const ChooseType = ({ values, handleChange, handleBlur }) => {

    const reg_types = ['volunteer', 'participant']

    return (
        <RadioGroup row aria-label="Register Type" name="reg_type" value={values.reg_type} onChange={handleChange} defaultValue="top">

            {reg_types.map(type => {
                return <RadioField
                    key={type}
                    name='reg_type'
                    value={type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label={type.toUpperCase()}
                    size={{
                        'xs': 12
                    }}
                />
            })}
        </RadioGroup>
    );
}

export default ChooseType;