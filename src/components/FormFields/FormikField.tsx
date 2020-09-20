import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import { Field, ErrorMessage } from 'formik';

interface FormikFieldProps {
	name: string;
	label: string;
	type?: string;
	required?: boolean;
}

const FormikField: React.FC<FormikFieldProps> = ({ name, label, type = "text", required = false }) => {
	return (
		<div className="FormikField">
			<Field
				required={required}
				as={TextField}
				label={label}
				name={name}
				fullWidth
				type={type}
			/>
			<Typography color='error'><ErrorMessage name={name} /></Typography>
		</div>
	);
};

export default FormikField;
