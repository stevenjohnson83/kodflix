import React from 'react';

import Stack from './Stack.js';
import ssr from './images/SSR.jpg';
import tgf from './images/TGF.jpg';
import tdk from './images/TDK.jpg';
import tgf2 from './images/TGF2.jpg';
import rotk from './images/ROTK.jpg';
import pf from './images/PF.jpg';


export default function Gallery() {
    return (

        <div>
            <div className='container'>
                <Stack name='Shawshank redemption' img={ssr} />
                <Stack name='The Godfather' img={tgf} />
                <Stack name='The Dark Knight' img={tdk} />
            </div>
            <div className='container'>
                <Stack name='The Godfather Pt 2' img={tgf2} />
                <Stack name='Return Of The King' img={rotk} />
                <Stack name='Pulp Fiction' img={pf} />
            </div>
        </div>

    )

}