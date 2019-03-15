import React, { Component } from 'react';

import {Table} from 'react-materialize'
import './App.css';
import Rowz from "./Component/Rowz";
import allMotos from './motos.json'

class App extends Component {
  state ={
    Bdmotos:allMotos
  }
  // componentWillMount() {
  //   let {Bdmotos} = this.state
  //   this.setState({Bdmotos})
  // }

  render() {
    let {Bdmotos} = this.state;
    // console.log('Bdmotos app',Bdmotos)

    return (
<div>
  <h1>Cotizacion de motos</h1>
  <Table responsive>
    <thead>
    <tr>
      <th data-field="id">Modelo</th>
      <th data-field="Cilindraje"> Cilindraje</th>
      <th data-field="name">Precio</th>
      <th data-field="price"> Frenos </th>
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
