import React from 'react';

import './AboutPage.scss';

const AboutPage = () => (
    <div className='about'>
        <h1>About Candra Ltd.</h1>
        <p>
            Candra Ltd. is a demo store I built while following Zero To Mastery's
            Complete React Developer course. The products you see are the course's
            sample catalog, and checkout runs in Stripe test mode, so no real card
            is ever charged.
        </p>
        <h2>What's next</h2>
        <p>
            I'm turning this into my own small shop of delights: things I design and
            3D-print, curated merch, and pothos cuttings from my plants.
        </p>
    </div>
);

export default AboutPage;