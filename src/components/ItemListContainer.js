import React, { Component } from 'react';

const arr = ["Antonio Gaspar Tessi","Jorge Perez", "Juan Gonzalez"];
function Greeting(props) {
    return <h1>Hola Bienvenido a mi tienda {props.name}</h1>;
}

export default class ItemListContainer extends Component {
    render(){
        return(
            <div>
                <h1><Greeting name={arr[0]}></Greeting></h1>
            <table>
                <tr>
                    <th>NAME</th>
                    <th>BOTON</th>
                    <th>Options</th>
                </tr>
                
                <Row></Row>
                <Row></Row>
                <Row></Row>
            </table>
            </div>
            )
    }
}

class Boton extends Component {
    render(){
        return(
            <button>{this.props.name}</button>
        )
    }
}

class Title extends Component {
    render(){
        return(
            <p>Titulo</p>
        )
    }
}

class Option extends Component {
    render(){
        return(
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        )
    }
}

class Row extends Component {
    render(){
        return(
            <tr>
                <td>
                    <Title></Title>
                </td>
                <td>
                    <Boton name="ROW"></Boton>
                </td>
                <td>
                    <Option></Option>
                </td>
            </tr>
        )
    }
}