import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';

import MainHorizontalWhiteLogo from '../../images/logos/IEEE-HSB-white-horizontal-logo.png'

import { MenuItem, Link as MUILink, Hidden, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		title: {
			flexGrow: 1,
		},
		headerWrapper: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center'
		},
		menu: {
			display: 'flex',
			flexDirection: 'row',
		},
		brand: {
			display: 'block',
		},
		brandLogo: {
			display: 'block',
			height: '40px',
			width: 'auto',
			objectFit: 'cover'
		}
	})
);
export default function ButtonAppBar() {
	const classes = useStyles();
	const [open_drawer, set_drawer] = useState(false);

	const toggleDrawer = () => {
		set_drawer(!open_drawer)
	}

	return (
		<AppBar position='static'>
			<Container disableGutters>
				<Toolbar className={classes.headerWrapper}>
					<MUILink href="https://ieeehsb.org" className={classes.brand}>
						<img src={MainHorizontalWhiteLogo} alt="IEEE Helwan Student Branch" className={classes.brandLogo} />
					</MUILink>

					<Hidden only={['xs', 'sm']}>
						<nav className={classes.menu}>
							<MenuItem component={Link} to="https://ieeehsb.org">
								Home
							</MenuItem>
							<MenuItem component={Link} to="/login">
								Login
							</MenuItem>
							<MenuItem component={Link} to="/register">
								Registeration
							</MenuItem>
						</nav>
					</Hidden>

					<Hidden mdUp>
						<IconButton
							edge='start'
							color='inherit'
							aria-label='menu'
							onClick={toggleDrawer}
						>
							<MenuIcon />
						</IconButton>
					</Hidden>
				</Toolbar>
				<Hidden mdUp>
					<Drawer anchor="left" open={open_drawer} onClose={toggleDrawer}>
						<nav>
							<MenuItem component={Link} to="https://ieeehsb.org">
								Home
							</MenuItem>
							<MenuItem component={Link} to="/login">
								Login
							</MenuItem>
							<MenuItem component={Link} to="/register">
								Registeration
							</MenuItem>
						</nav>
					</Drawer>
				</Hidden>
			</Container>
		</AppBar>
	);
}
