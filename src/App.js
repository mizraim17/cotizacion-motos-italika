import React, { Component } from 'react';

import {Table,Button} from 'react-materialize'
import './App.css';
import Rowz from "./Component/Rowz";
import allMotos from './motos.json'

class App extends Component {
  state ={
    Bdmotos:allMotos
  }


componentWillMount() {


  let Bdmotos = this.state.Bdmotos;
     Bdmotos .sort((a, b) => a.Precio !== b.Precio ? a.Precio < b.Precio ? -1 : 1 : 0);
    this.setState({Bdmotos: Bdmotos})
  }

  orderLarge = () =>{
    let Bdmotos = this.state.Bdmotos;
    Bdmotos .sort((a, b) => a.Largo !== b.Largo ? a.Largo > b.Largo ? -1 : 1 : 0);
    this.setState({Bdmotos: Bdmotos})
  }

  orderPrice= () =>{
    let Bdmotos = this.state.Bdmotos;
    Bdmotos .sort((a, b) => a.Precio !== b.Precio ? a.Precio < b.Precio ? -1 : 1 : 0);
    this.setState({Bdmotos: Bdmotos})
  }
  orderWheel= () =>{
    let Bdmotos = this.state.Bdmotos;
    Bdmotos .sort((a, b) => a.LlantaTrasera !== b.LlantaTrasera ? a.LlantaTrasera < b.LlantaTrasera ? -1 : 1 : 0);
    this.setState({Bdmotos: Bdmotos})
  }

  render() {
    let {Bdmotos} = this.state;

    return (
<div className="container">
  <h2>Cotización de Motos Italika 150cc</h2>
  <Button onClick={this.orderLarge}> Por Largo</Button>
  <Button onClick={this.orderPrice}> Por Precio</Button>
  <Button onClick={this.orderWheel}> Por Llanta</Button>
  <Table responsive  className=" red accent-1 white-text" >
    <thead>
    <tr>
      <th data-field="id">Modelo</th>
      <th data-field="Cilindraje"> Cilindraje</th>
      <th data-field="name">Precio</th>
      <th data-field="price"> Frenos </th>
      <th data-field="price"> Llanta Trasera </th>
      <th data-field="price"> Peso </th>
      <th data-field="Largo">Largo</th>
      <th data-field="Foto"> Foto</th>
      <th data-field="Url"> Url Página</th>
    </tr>
    </thead>

    <tbody>
    {
      Bdmotos.map((el,i)=>{
       return(
         <Rowz
           key={i}
            moto={el}
         />
       )
      })
    }
    </tbody>
  </Table>

</div>
    );
  }
}

export default App;
