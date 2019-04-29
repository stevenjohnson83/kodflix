import React from 'react';
import { Link } from 'react-router-dom';

export default function notFound() {
    return (
        <div>
            <h1>Oooops, something is broken, go back</h1>
            <Link to='/'>Back to Gallery </Link>
        </div>
    )
}