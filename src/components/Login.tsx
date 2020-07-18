import React from 'react';
import { Container, Button } from '@material-ui/core';
import { Formik, Form } from 'formik';

import * as Yup from 'yup';
import InputField from './InputField/InputField';

import Axios from '../utils/Axios';

const Login: React.FC = () => {
	const on_submit = (email: string, password: string, setSubmitting) => {
		const loginData = {
			email: email,
			password: password,
		};
		Axios.post('/login', loginData)
			.then((response) => {
				console.log(response);
				setSubmitting(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const validation_schema = Yup.object().shape({
		login_email: Yup.string()
			.trim()
			.required('No Email Provided')
			.email("It doesn't seems an valid Email"),
		login_password: Yup.string()
			.trim()
			.required('No Password Provided')
			.min(8, 'Password is too short it must be at least 8 characters or longer')
			.matches(
				/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20}/,
				'Your password must have numbers, capital letters, small letters and special characters '
			),
	});

	const initial_values = {
		login_email: '',
		login_password: '',
	};

	return (
		<Container>
			<Formik
				initialValues={initial_values}
				validationSchema={validation_schema}
				onSubmit={(values, { setSubmitting }) =>
					on_submit(values.login_email, values.login_password, setSubmitting)
				}
			>
				{({ values, handleChange, handleBlur, isSubmitting, isValid }) => (
					<Form method='POST'>
						<InputField
							type='email'
							name='login_email'
							value={values.login_email}
							onChange={handleChange}
							onBlur={handleBlur}
							label='Email'
						/>
						<InputField
							type='password'
							name='login_password'
							value={values.login_password}
							onChange={handleChange}
							onBlur={handleBlur}
							label='Password'
						/>
						<Button color='primary' type='submit' disabled={!isValid || isSubmitting}>
							login
						</Button>
					</Form>
				)}
			</Formik>
		</Container>
	);
};

export default Login;
