import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { ErrorMessage } from 'formik';

interface Props {
	type: string;
	name: string;
	value: string | Date;
	onChange: any;
	onBlur?: any;
	label: string;
}

const InputField: React.FC<Props> = ({ type, name, value, onChange, onBlur, label }) => {
	return (
		<Grid>
			<TextField
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				label={label}
			/>
			<ErrorMessage name={name} component='p' />
		</Grid>
	);
};

export default InputField;
