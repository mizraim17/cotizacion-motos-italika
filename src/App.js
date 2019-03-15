import React, { Component } from 'react';

import './App.css';
import Table from "./Component/Table";
import allMotos from './motos.json'
import Comentario from "./Component/Comentario";

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
      <Comentario/>

</div>
    );
  }
}

export default App;
