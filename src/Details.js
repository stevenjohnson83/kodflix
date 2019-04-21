import React, {Component} from 'react';
import { Link } from 'react-router-dom';



export default class Details extends Component {
    
    constructor(){
        super();
        this.state = {
            welcomeMessage: 'work in progress'
        };
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({
                welcomeMessage: 'test change message'
            });
            

        }, 3000)
    }


    render(){
    return (
        <div>
           <h1>{this.state.welcomeMessage}</h1>
            <Link to='/'>Back to Gallery </Link>
        </div>
    );
}
}