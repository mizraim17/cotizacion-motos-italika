import React from 'react';

const Table  = (props) =>{
  return(

    <tr key={props.moto.index}>
      <td className="text-center">{props.moto.Modelo}</td>
      <td className="text-center">  {props.moto.Precio}</td>
      <td className="text-center">{props.moto.Frenos}</td>
      <td className="text-center">{props.moto.Peso}</td>
      <td className="text-center">{props.moto.Largo}</td>
      <td className="text-center">{props.moto.Url}</td>
      <td className="text-center">{props.moto.Image}</td>
      <td className="text-center"><img src={props.moto.Url} height="50" alt=""/></td>
    </tr>

  );

}

export default Table