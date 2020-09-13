import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import MainVerticalLogo from '../../images/logos/IEEE-HSB-blue-vertical-logo.png';
import PESHSCVerticalLogo from '../../images/logos/PES-HSC-colored-logo-vertical.png';
import RASHSCVerticalLogo from '../../images/logos/RAS-HSC-colored-logo-vertical.png';
import WIEHAGVerticalLogo from '../../images/logos/WIE-AG-colored-logo-vertical.png';
import ComSocHSCVerticalLogo from '../../images/logos/ComSoc-HSC-black-horizontal-logo.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        linkLogo: {
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'contain'
        }
    })
);

const Logos = () => {
    const classes = useStyles();

    return (
        <Container>
            <Grid container xl={3} md={4} sm={6} xs={12} spacing={2} alignContent="space-between" alignItems="center">
                <Grid item xs={2} component="a" href="https://ieeehsb.org" target="_blank" rel="noreferrer noopener">
                    <img src={MainVerticalLogo} alt="IEEE Helwan Student Branch" className={classes.linkLogo} />
                </Grid>

                <Grid item xs={2} component="a" href="https://ieeehsb.org/chapters/ras-chapter/" target="_blank" rel="noreferrer noopener">
                    <img src={RASHSCVerticalLogo} alt="RAS Helwan Student Chapter" className={classes.linkLogo} />
                </Grid>

                <Grid item xs={2} component="a" href="https://peshsc.ieeehsb.org/" target="_blank" rel="noreferrer noopener">
                    <img src={PESHSCVerticalLogo} alt="PES Helwan Student Chapter" className={classes.linkLogo} />
                </Grid>

                <Grid item xs={3} component="a" href="https://ieeehsb.org/chapters/wie-affinity-group/" target="_blank" rel="noreferrer noopener">
                    <img src={WIEHAGVerticalLogo} alt="WIE Helwan Affinity Group" className={classes.linkLogo} />
                </Grid>

                <Grid item xs={3} component="a" href="https://ieeehsb.org/chapters/comsoc-chapter/" target="_blank" rel="noreferrer noopener">
                    <img src={ComSocHSCVerticalLogo} alt="ComSoc Helwan Student Branch" className={classes.linkLogo} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Logos;