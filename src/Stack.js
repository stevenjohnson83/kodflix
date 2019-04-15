import React from 'react';
import { Link } from 'react-router-dom';

export default function Stack(props) {
    return (
        <Link to='/details' className='item'>
            <img src={props.img} alt={props.name} />
            <div className='title overlay'>
                <h1>{props.name} </h1>
            </div>
        </Link>
    );
}