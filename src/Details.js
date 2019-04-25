import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from './getGallery.js'


export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            movie: {}
        };
    }

    componentDidMount() {
        let movieTitle = this.props.match.params.movieTitle;
        let movie = getGallery().find((movie) => movie.id === movieTitle);
        this.setState({
            movie: movie
        });
    }


    render() {
        if (this.state.movie === undefined) {
            return <Redirect to ='/not-found' />;
        } else {
            return (
                <div>
                    <h1>{this.state.movie.name}</h1>
                    <Link to='/'>Back to Gallery </Link>
                </div>
            );
        }
    }
}
