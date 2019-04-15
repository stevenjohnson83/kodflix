import React from 'react';

export default function Stack(props) {
    return (
        <div className='item'>
            <img src={props.img} alt={props.name} />
            <h1 className='title overlay'> {props.name} </h1>
        </div>
    );
}