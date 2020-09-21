import React, { useEffect, useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import Axios from '../../../utils/Axios';

import * as Yup from 'yup';

import {
    TextField,
    FormControl,
    MenuItem,
    InputLabel,
    Typography,
    createStyles,
    makeStyles,
    Theme,

} from '@material-ui/core';

import { Select } from 'formik-material-ui';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fullwidth: {
            width: '100%',
        },
    })
);
const AdditionalData = (props) => {

    const classes = useStyles();


    const [chapters, set_chapters] = useState([]);
    const [committees, set_committees] = useState([]);
    const [positions, set_positions] = useState([]);
    const [roles, set_roles] = useState([]);

    useEffect(() => {
        Axios.get('/register')
            .then((response) => {
                console.log(response);
                set_roles(response.data.data.roles);
                set_chapters(response.data.data.chapters);
                set_committees(response.data.data.committees);
                set_positions(response.data.data.positions);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, [])
    return (
        <>
            {
                props.values?.type === 'volunteer' ? (
                    <>
                        <>
                            <FormControl className={classes.fullwidth}>
                                <InputLabel htmlFor="role">Role</InputLabel>
                                <Field
                                    component={Select}
                                    name="role"
                                    inputProps={{
                                        id: 'role',
                                    }}
                                >
                                    {roles?.map((role: any) => <MenuItem key={role.id} value={role.name}>{role.name.toUpperCase()}</MenuItem>)}
                                </Field>
                            </FormControl>
                            <Typography color='error'>
                                <ErrorMessage name='role' />
                            </Typography>
                        </>
                        {
                            props.values?.role === 'ex_com' ?
                                (
                                    <>
                                        <FormControl className={classes.fullwidth}>
                                            <InputLabel htmlFor="ex_options">Position</InputLabel>
                                            <Field
                                                component={Select}
                                                name="ex_options"
                                                inputProps={{
                                                    id: 'ex_options',
                                                }}
                                            >
                                                {positions?.map((position: any) => <MenuItem key={position.id} value={position.name}>{position.name.toUpperCase()}</MenuItem>)}
                                            </Field>
                                        </FormControl>
                                        <Typography color='error'>
                                            <ErrorMessage name='ex_options' />
                                        </Typography>
                                    </>
                                ) : (
                                    <>
                                        <FormControl className={classes.fullwidth}>
                                            <InputLabel htmlFor="committee">Committee</InputLabel>
                                            <Field
                                                component={Select}
                                                name="committee"
                                                inputProps={{
                                                    id: 'committee',
                                                }}
                                            >
                                                {committees?.map((committee: any) => <MenuItem key={committee.id} value={committee.name}>{committee.name.toUpperCase()}</MenuItem>)}
                                            </Field>
                                        </FormControl>
                                        <Typography color='error'>
                                            <ErrorMessage name='committee' />
                                        </Typography>
                                    </>
                                )
                        }
                    </>
                ) : null
            }

            <Field
                as={TextField}
                id="date"
                label="Birthday"
                type="date"
                name="DOB"
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
            />
            <Field name="faculty" as={TextField} label="Faculty" type="text" fullWidth />
            <Field name="university" as={TextField} label="University" type="text" fullWidth />
        </>
    )
}

export default AdditionalData;