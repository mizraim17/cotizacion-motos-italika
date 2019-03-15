import React from 'react';

const Rowz  = (props) =>{
  return(

    <tr key={props.moto.index}>

      {console.log(props.moto)}
      <td className="text-center">{props.moto.Modelo}</td>
      <td className="text-center">{props.moto.Cilindraje}</td>
      <td className="text-center" type="number">  {props.moto.Precio}</td>
      <td className="text-center">{props.moto.Frenos}</td>
      <td className="text-center">{props.moto.Peso}</td>
      <td className="text-center">{props.moto.Largo}</td>
      <td className="text-center"><img src={props.moto.Urlimage} width="100" alt="fotos"/> </td>
      <td className="text-center"><a href={props.moto.Url}> {props.moto.Modelo}</a> </td>
    </tr>

  );
};

export default Rowz