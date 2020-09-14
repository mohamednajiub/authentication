import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { ErrorMessage } from 'formik';

interface Props {
	type: string;
	name: string;
	value: string | Date;
	onChange: any;
	onBlur?: any;
	label: string;
	size: {};
	required?: boolean;
	autoComplete?: string;
}

const InputField: React.FC<Props> = ({ type, name, value, onChange, onBlur, label, required, size, autoComplete }) => {
	return (
		<Grid item {...size}>
			<TextField
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				label={label}
				fullWidth
				required={required || false}
				autoComplete={autoComplete || ''}
			/>
			<Typography color='error'>
				<ErrorMessage name={name} />
			</Typography>
		</Grid>
	);
};

export default InputField;
