import React, { Component } from 'react';
import axios from 'axios';

class Cardetail extends Component {

    // create the states of data
    constructor(props) {
        super(props);

        this.state = {
            carData:null
        };

        
    }

    componentWillMount(){
        this.setState({carData: this.props.carData});

    }

    render(){

        
    }


}

export default Cardetail;