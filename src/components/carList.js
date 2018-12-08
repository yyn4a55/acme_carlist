import React, { Component } from 'react';
import axios from 'axios';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
const data = require('../datasource/data.json');


class Carlist extends Component {

    // create the states of data
    constructor(props) {
        super(props);

        this.state = {
            carsData: [],
            //socket: this.props.socket
        };


    }

    componentWillMount() {
        //this.getCarList();
        console.log(data);
        this.setState({ carsData: data.cars });
        //this.ready();

    }



    getCarList = () => {
        var instance = axios.create({


            async: true,

            crossDomain: true,



        });
        instance.get('https://pibackend.herokuapp.com/carList/getCars').then(result => {
            console.log(result.data);
            this.setState({ carsData: result.data });

        }
        );

    }

    ready() {

        const socket = this.state.socket;
        socket.on('news', function (data) {
            console.log(data);
            socket.emit('my other event', { my: 'data' });
            socket.on('DisconnectReq', function () {
                socket.disconnect();
            });
        });

    }

    updateList = () => {

    }

    render() {
        console.log(this.state.carsData);

        return( <Table data={this.state.carsData}  width={1000} >
            <Column  width={100} sort fixed resizable>
                <HeaderCell>Name</HeaderCell>
                <Cell dataKey="id" />
            </Column>
            <Column  width={100} sort resizable>
                <HeaderCell>Name</HeaderCell>
                <Cell dataKey="name" />
            </Column>
            <Column  width={100} sort resizable>
                <HeaderCell>Email</HeaderCell>
                <Cell dataKey="email" />
            </Column>
        </Table>
        );
        

          
    }


}

export default Carlist;