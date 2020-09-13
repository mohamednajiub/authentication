import React from 'react';
import { Link } from '@material-ui/core';

import MainVerticalLogo from '../../images/logos/IEEE-HSB-blue-vertical-logo.png';
import PESHSCVerticalLogo from '../../images/logos/PES-HSC-colored-logo-vertical.png';
import RASHSCVerticalLogo from '../../images/logos/RAS-HSC-colored-logo-vertical.png';
import WIEHAGVerticalLogo from '../../images/logos/WIE-AG-colored-logo-vertical.png';
import ComSocHSCVerticalLogo from '../../images/logos/ComSoc-HSC-black-horizontal-logo.png';

const Logos = () => {
    return (
        <div>
            <Link href="https://ieeehsb.org">
                <img src={MainVerticalLogo} alt="IEEE Helwan Student Branch" />
            </Link>
            <Link href="https://peshsc.ieeehsb.org/">
                <img src={PESHSCVerticalLogo} alt="PES Helwan Student Chapter" />
            </Link>
            <Link href="https://ieeehsb.org/chapters/ras-chapter/">
                <img src={RASHSCVerticalLogo} alt="RAS Helwan Student Chapter" />
            </Link>
            <Link href="https://ieeehsb.org/chapters/wie-affinity-group/">
                <img src={WIEHAGVerticalLogo} alt="WIE Helwan Affinity Group" />
            </Link>
            <Link href="https://ieeehsb.org/chapters/comsoc-chapter/">
                <img src={ComSocHSCVerticalLogo} alt="ComSoc Helwan Student Branch" />
            </Link>
        </div>
    )
}

export default Logos;