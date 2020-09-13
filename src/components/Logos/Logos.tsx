import React from 'react';
import { Link } from '@material-ui/core';

import MainVerticalLogo from '../../images/logos/IEEE-HSB-blue-vertical-logo.png';
import PESHSCVerticalLogo from '../../images/logos/PES-HSC-colored-logo-vertical.png';
import RASHSCVerticalLogo from '../../images/logos/RAS-HSC-colored-logo-vertical.png';
import WIEHAGVerticalLogo from '../../images/logos/WIE-AG-colored-logo-vertical.png';
import ComSocHSCVerticalLogo from '../../images/logos/ComSoc-HSC-black-horizontal-logo.png';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        link: {
            display: 'inline-flex',
            width: '50px',
            height: '50px',
            margin: theme.spacing(0.5)
        },
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
        <div>
            <Link href="https://ieeehsb.org" target="_blank" rel="noreferrer noopener" className={classes.link}>
                <img src={MainVerticalLogo} alt="IEEE Helwan Student Branch" className={classes.linkLogo} />
            </Link>
            <Link href="https://peshsc.ieeehsb.org/" target="_blank" rel="noreferrer noopener" className={classes.link}>
                <img src={PESHSCVerticalLogo} alt="PES Helwan Student Chapter" className={classes.linkLogo} />
            </Link>
            <Link href="https://ieeehsb.org/chapters/ras-chapter/" target="_blank" rel="noreferrer noopener" className={classes.link}>
                <img src={RASHSCVerticalLogo} alt="RAS Helwan Student Chapter" className={classes.linkLogo} />
            </Link>
            <Link href="https://ieeehsb.org/chapters/wie-affinity-group/" target="_blank" rel="noreferrer noopener" className={classes.link}>
                <img src={WIEHAGVerticalLogo} alt="WIE Helwan Affinity Group" className={classes.linkLogo} />
            </Link>
            <Link href="https://ieeehsb.org/chapters/comsoc-chapter/" target="_blank" rel="noreferrer noopener" className={classes.link}>
                <img src={ComSocHSCVerticalLogo} alt="ComSoc Helwan Student Branch" className={classes.linkLogo} />
            </Link>
        </div>
    )
}

export default Logos;