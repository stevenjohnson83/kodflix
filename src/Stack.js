import React from 'react';
import { Link } from 'react-router-dom';

export default function Stack(props) {
    return (
        <Link to={'/' + props.id} className='item'>
            {/*<Link to={'/${props.id}'} className='item'></Link>*/}
            <img src={props.img} alt={props.name} />
            <div className='title overlay'>
                <h1>{props.name} </h1>
            </div>
        </Link>
    );
}