import React from 'react';

import Stack from './Stack.js';
import getGallery from './getGallery.js'


export default function Gallery() {
    return (

        <div>
            <div className='container'>
                {
                    getGallery().map(stack => (
                        <Stack
                            key={stack.id}
                            id={stack.id}
                            name={stack.name}
                            img={stack.img}
                        />
                    ))
                }

            </div>
        </div>

    );
}

