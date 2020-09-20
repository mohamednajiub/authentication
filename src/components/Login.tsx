import React from 'react';
import { Container, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';

import * as Yup from 'yup';
import FormikField from './FormFields/FormikField';
import { LoginSubmit, LoginResponse } from '../Interfaces/Auth/Login';

import Axios from '../utils/Axios';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		form: {
			width: '100%',
			marginTop: theme.spacing(30),
		},
		submit: {
			margin: theme.spacing(2, 0),
		}
	})
);

const Login: React.FC = (props: any) => {

	const classes = useStyles();

	const on_submit: LoginSubmit = (email, password, setSubmitting) => {
		const loginData = {
			email: email,
			password: password,
		};
		Axios.post('/login', loginData)
			.then((response: LoginResponse) => {
				console.log(response);
				let expirationDate: Date = new Date(
					new Date().getTime() + response.data.expirationTime * 60 * 1000
				);

				// set token and expiration date in local storage
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('expirationDate', `${expirationDate}`);
				localStorage.setItem('userID', `${response.data.userId}`);
				localStorage.setItem('type', `${response.data.type}`);
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
			.min(6, 'Password is too short it must be at least 6 characters or longer')
			.matches(
				/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/,
				'Your password must have numbers, capital letters, small letters and special characters '
			),
	});

	const initial_values = {
		login_email: '',
		login_password: '',
	};

	return (
		<Container maxWidth='xs'>
			<Formik
				initialValues={initial_values}
				validationSchema={validation_schema}
				onSubmit={(values, { setSubmitting }) =>
					on_submit(values.login_email, values.login_password, setSubmitting)
				}
			>
				{({ isSubmitting, isValid, values, handleBlur, handleChange }) => (
					<Form method='POST' className={classes.form}>
						<FormikField type="email" name="login_email" label="Email" required />
						<FormikField type="password" name="login_password" label="Password" required />
						<Button fullWidth color='primary' type='submit' variant={(!isValid || isSubmitting) ? 'contained' : 'outlined'} disabled={!isValid || isSubmitting} className={classes.submit}>
							login
						</Button>
					</Form>
				)}
			</Formik>
		</Container>
	);
};

export default Login;
